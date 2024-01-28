
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../hooks/";
import { getBooksByName } from '../helpers/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Results } from "./Results";

export const InputSearch = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);
    
    const [{searchQuery}, handleInputChange, reset] = useForm({
        searchQuery: q,
    });

    const booksFiltered = useMemo(()=>getBooksByName(q), [q]);   
    

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

            <Results q={q} dataLength={booksFiltered.length} />
        </>
    )
}
