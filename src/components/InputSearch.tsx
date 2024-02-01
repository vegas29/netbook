
// import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../hooks/";
// import { getBooksByName } from '../helpers/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Results } from "./Results";
import { ItemsList } from "./ItemsList";

export const InputSearch = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);
    
    const [{searchQuery}, handleInputChange, reset] = useForm({
        searchQuery: q,
    });

    const filteredBooks = [
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
    ]

    // const booksFiltered = useMemo(()=>getBooksByName(q), [q]);   

    const handleSubmit = (e)=>{
        e.preventDefault();
    
        if(searchQuery.trim() === ''){
          alert('The name of books is required');
          return;
        }
    
        navigate(`?q=${searchQuery}`);
    
        reset();
    }


    return (
        <>
        
            <form 
                className="relative w-[300px] md:w-[700px] mx-auto"
                onSubmit={handleSubmit}
                aria-label="form"
            >
                <FontAwesomeIcon className="absolute top-1/4 ml-5" icon={faSearch} color="#675B8C" />
                <input
                    type="text"
                    placeholder="What do you want yo read?"
                    name="searchQuery"
                    className="bg-[#2C2C4F] rounded-xl pl-16 mb-5 h-10 p-6 w-full text-white focus:outline-none active:outline-none"
                    autoComplete="off"
                    required
                    value={searchQuery}
                    onChange={handleInputChange}
                />
            </form>

            <Results q={q} dataLength={filteredBooks.length} />

            <ItemsList books={filteredBooks} />
        </>
    )
}
