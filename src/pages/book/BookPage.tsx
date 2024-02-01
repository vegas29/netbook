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

    const relatedBooks = [
        {
          "isbn": "123",
          "book_title": "Cien años de soledad",
          "book_author": "Gabriel Garcia Marquez",
          "year_publication": 2014,
          "publisher": "Harper Collins Español",
          "url_s": "https://images.cdn2.buscalibre.com/fit-in/360x360/52/6b/526bb938f7613f31e3e42272df5463e1.jpg",
          "url_m": "https://images.cdn2.buscalibre.com/fit-in/360x360/52/6b/526bb938f7613f31e3e42272df5463e1.jpg",
          "url_l": "https://images.cdn2.buscalibre.com/fit-in/360x360/52/6b/526bb938f7613f31e3e42272df5463e1.jpg"
        },
        {
            "isbn": "123",
            "book_title": "Cien años de soledad",
            "book_author": "Gabriel Garcia Marquez",
            "year_publication": 2014,
            "publisher": "Harper Collins Español",
            "url_s": "https://images.cdn2.buscalibre.com/fit-in/360x360/52/6b/526bb938f7613f31e3e42272df5463e1.jpg",
            "url_m": "https://images.cdn2.buscalibre.com/fit-in/360x360/52/6b/526bb938f7613f31e3e42272df5463e1.jpg",
            "url_l": "https://images.cdn2.buscalibre.com/fit-in/360x360/52/6b/526bb938f7613f31e3e42272df5463e1.jpg"
        },
        {
            "isbn": "123",
            "book_title": "Cien años de soledad",
            "book_author": "Gabriel Garcia Marquez",
            "year_publication": 2014,
            "publisher": "Harper Collins Español",
            "url_s": "https://images.cdn2.buscalibre.com/fit-in/360x360/52/6b/526bb938f7613f31e3e42272df5463e1.jpg",
            "url_m": "https://images.cdn2.buscalibre.com/fit-in/360x360/52/6b/526bb938f7613f31e3e42272df5463e1.jpg",
            "url_l": "https://images.cdn2.buscalibre.com/fit-in/360x360/52/6b/526bb938f7613f31e3e42272df5463e1.jpg"
        },
        {
            "isbn": "123",
            "book_title": "Cien años de soledad",
            "book_author": "Gabriel Garcia Marquez",
            "year_publication": 2014,
            "publisher": "Harper Collins Español",
            "url_s": "https://images.cdn2.buscalibre.com/fit-in/360x360/52/6b/526bb938f7613f31e3e42272df5463e1.jpg",
            "url_m": "https://images.cdn2.buscalibre.com/fit-in/360x360/52/6b/526bb938f7613f31e3e42272df5463e1.jpg",
            "url_l": "https://images.cdn2.buscalibre.com/fit-in/360x360/52/6b/526bb938f7613f31e3e42272df5463e1.jpg"
        }               
    ];


    return (
        <Background>
            <LayoutContainer>
                <Navbar />
                <TextTitle text="Cien años de soledad" fontSize="text-3xl md:text-5xl" width="mx-auto md:mx-0 lg:w-5/12" fontWeight="font-bold" align={'text-center lg:text-left'}/>
                <div className="flex flex-col lg:flex-row items-center">
                    <ItemCard isPage={true} url_s={'https://images.cdn2.buscalibre.com/fit-in/360x360/52/6b/526bb938f7613f31e3e42272df5463e1.jpg'}/>
                    <TextPage author={'Gabriel García'} date={'10 de noviembre de 2015'} publisher={'Harper Collis Español'} rating={2}/>
                </div>
                <div className="relative mx-auto w-6/12 sm:w-full">
                    <FontAwesomeIcon className="absolute top-1/4 ml-5" icon={faSearch} color="#675B8C" />
                    <h2 className="font-bold ml-12 mt-10 text-lg md:text-xl text-[#675B8C] uppercase">Books realted to your interests</h2>
                </div>
                <ItemsList books={relatedBooks}/>
                <Footer/>
            </LayoutContainer>
        </Background>
    )
}
