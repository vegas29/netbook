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
            const { data } = await smartLibraryApi.get(`/library/get/${offset}/${limit}`,);
            console.log('data', data);
            dispatch(onLoadBooks(data.book));
        } catch (error) {
            console.log('Error cargando libros');
            console.log(error);
        }
    }


    return {
        //Properties

        //Methods
        setActiveBook,
        startLoadingBooks
    }
}