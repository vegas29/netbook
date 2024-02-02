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

    const startLoadingRatingByUserId= async({isbn = '', userId = ''}) => {
        try {
            const { data }  = await smartLibraryApi.post(`/library/get/rating/user`, {isbn, id_user: userId });
            dispatch(onLoadRatingByIsbn(data));
        } catch (error) {
            console.log('Error solicitando el rating por usuario');
            console.log(error);
        }
    }

    const startSendRatingByUserId= async({id_rating}) => {
        try {
            const { data }  = await smartLibraryApi.post(`/library/update/rating/${id_rating}*`);
            console.log('data rating', data)
            dispatch(onLoadRatingByIsbn(data));
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