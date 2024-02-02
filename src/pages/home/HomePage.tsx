/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LayoutContainer } from "../../layouts/LayoutContainer";

import { useAuthStore, useBookStore } from "../../hooks";
import { Background } from "../../layouts/Background";
import { Navbar } from "../../components/Navbar";
import { TextTitle } from "../../components/TextTitle";
import { InputSearch } from "../../components/InputSearch";
import { Footer } from "../../components/Footer";
import { ButtonGetMore } from "../../components/ButtonGetMore";

export const HomePage = () => {

    const { user } = useAuthStore();
    const { startLoadingBooks } = useBookStore();
    
    const { books } = useSelector((state:any) => state.book);

    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(10);
    const [arrayBooks, setArrayBooks] = useState(books && books);
    const [firtsArray, setFirstArray] = useState(false);

    useEffect(() => {
        startLoadingBooks({offset, limit});
    }, []);
    
    useEffect(() => {
        startLoadingBooks({offset, limit});
    }, [offset, limit]);

    const nextPage = () => {
        setOffset(offset + 10);
        setLimit(limit + 10);
        setFirstArray(true);
        setArrayBooks(prevBooks => prevBooks.concat(books));
    }

    return (
        <Background>
            <LayoutContainer>
                <Navbar user={user}/>
                <TextTitle text="What would you like to read tonight" fontSize="text-3xl md:text-4xl" width="md:w-4/12 md:mx-auto" fontWeight="font-bold"/>
                <InputSearch books={!firtsArray ? books :  arrayBooks}/>
                {books.length > 0 &&  (
                    <ButtonGetMore onClick={nextPage}/>
                )}
                <Footer/>
            </LayoutContainer>
        </Background>
    )
}
