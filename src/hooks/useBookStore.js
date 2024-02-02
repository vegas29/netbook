import { useDispatch } from "react-redux";
import smartLibraryApi from "../api/smartLibraryApi";
import { onLoadBooks, onSetActiveBook, onLoadRecommendations, onLoadRatingByIsbn } from "../store";

export const useBookStore = () => {
    const dispatch = useDispatch();

    const setActiveBook = ( book ) => {
        dispatch( onSetActiveBook(book) );
    }

    const startLoadingBooks = async({offset = 0, limit = 10}) => {
        try {
            const { data } = await smartLibraryApi.get(`/library/get/?offset=${offset}&limit=${limit}`,);
            dispatch(onLoadBooks(data));
        } catch (error) {
            console.log('Error cargando libros');
            console.log(error);
        }
    }

    const startLoadingBooksByName = async({searchQuery = '', offset = 0, limit = 10}) => {
        try {
            const { data }  = await smartLibraryApi.post(`/library/get/book/search/title?title=${searchQuery}&offset=${offset}&limit=${limit}`);
            dispatch(onLoadBooks(data));
        } catch (error) {
            console.log('Error cargando libros');
            console.log(error);
        }
    }

    const startLoadingBooksByIsbn = async({isbn = ''}) => {
        try {
            const { data }  = await smartLibraryApi.get(`/library/get/${isbn}`);
            dispatch(onSetActiveBook(data));
        } catch (error) {
            console.log('Error cargando libro');
            console.log(error);
        }
    }

    const startLoadingRecommendationByUserId= async({userId = ''}) => {
        try {
            const { data }  = await smartLibraryApi.post(`/recomendation/get/`, {user_id: userId, date: new Date('2024-01-28')});
            dispatch(onLoadRecommendations(data));
        } catch (error) {
            console.log('Error solicitando la recomendación');
            console.log(error);
        }
    }

    const startLoadingRatingByUserId= async({isbn = ''}) => {
        try {
            const { data }  = await smartLibraryApi.get(`/library/get/book/rating/?isbn=${isbn}`);
            dispatch(onLoadRatingByIsbn(data));
        } catch (error) {
            console.log('Error solicitando el rating por usuario');
            console.log(error);
        }
    }

    const startSendRatingByUserId= async({id_user, isbn, newRating}) => {
        try {
            const { status }  = await smartLibraryApi.post(`/library/create/rating/`, {id_rating: 0, isbn, id_user: Number(id_user), user_rating: Math.round(Number(newRating))});
            if (status === 200 || status === 202) {
                return true;
            }
        } catch (error) {
            console.log('Error actualizando el rating por usuario');
            console.log(error);
        }
    }


    return {
        //Properties

        //Methods
        setActiveBook,
        startLoadingBooks,
        startLoadingBooksByName,
        startLoadingBooksByIsbn,
        startLoadingRecommendationByUserId,
        startLoadingRatingByUserId,
        startSendRatingByUserId
    }
}