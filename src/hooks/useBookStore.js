import { useDispatch } from "react-redux";
import smartLibraryApi from "../api/smartLibraryApi";
import { onLoadBooks, onSetActiveBook } from "../store";

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


    return {
        //Properties

        //Methods
        setActiveBook,
        startLoadingBooks,
        startLoadingBooksByName
    }
}