/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAuthStore } from '../../hooks/';
import { useBookStore } from '../../hooks/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Footer } from "../../components/Footer";
import { ItemCard } from "../../components/ItemCard";
import { ItemsList } from "../../components/ItemsList";
import { Navbar } from "../../components/Navbar";
import { TextTitle } from "../../components/TextTitle";
import { Background } from "../../layouts/Background";
import { LayoutContainer } from "../../layouts/LayoutContainer";
import { TextPage } from '../../components/TextPage';



export const BookPage = () => {

    const { user } = useAuthStore();
    const localUserId = localStorage.getItem('id');

    console.log('userId', localUserId)

    const { isbn } = useParams();

    const {  startLoadingBooksByIsbn, startLoadingRecommendationByUserId, startLoadingRatingByUserId } = useBookStore();
        
    const { activeBook, recommendations, 
        // ratingByIsbn
    } = useSelector((state:any) => state.book);

    useEffect(() => {
        startLoadingBooksByIsbn({isbn});
        startLoadingRecommendationByUserId({userId: user.id ? user.id : localUserId});
        startLoadingRatingByUserId({isbn, userId:  user.id ? user.id : localUserId});
    }, []);

    return (
        <Background>
            <LayoutContainer>
                <Navbar user={user} />
                <TextTitle text={activeBook?.book_title} fontSize="text-3xl md:text-5xl" width="mx-auto md:mx-0 lg:w-5/12" fontWeight="font-bold" align={'text-center lg:text-left'}/>
                <div className="flex flex-col lg:flex-row items-center">
                    <ItemCard isbn={isbn} isPage={true} url_l={activeBook?.url_l}/>
                    <TextPage author={activeBook?.book_author} date={activeBook?.year_publication} publisher={activeBook?.publisher} rating={2}/>
                </div>
                <div className="relative mx-auto w-6/12 sm:w-full">
                    <FontAwesomeIcon className="absolute top-1/4 ml-5" icon={faSearch} color="#675B8C" />
                    <h2 className="font-bold ml-12 mt-10 text-lg md:text-xl text-[#675B8C] uppercase">Recommended for you</h2>
                </div>
                <ItemsList books={recommendations}/>
                <Footer/>
            </LayoutContainer>
        </Background>
    )
}
