/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../hooks/";

import { useBookStore } from "../hooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Results } from "./Results";
import { ItemsList } from "./ItemsList";
import { useSelector } from "react-redux";
import { Loader } from "../ui/components/Loader";

export const InputSearch = ({books}) => {

    const location = useLocation();
    const navigate = useNavigate();

    const { startLoadingBooksByName } = useBookStore();
    const { isLoadingBooks } = useSelector((state:any) => state.book);

    const {q = ''} = queryString.parse(location.search);
    
    const [{searchQuery}, handleInputChange] = useForm({
        searchQuery: q,
    });


    const handleSubmit = (e)=>{
        e.preventDefault();

        const offset = 0;
        const limit = 10;

        startLoadingBooksByName({searchQuery, offset, limit});

            
        if(searchQuery.trim() === ''){
            alert('The name of books is required');
            return;
        }
      
        navigate(`?q=${searchQuery}`);
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

            {isLoadingBooks ? (
                <Loader/>
            ) : (
                books.length > 0 ? (
                    <>
                        <Results q={q} dataLength={books.length} />
                        <ItemsList books={books} />
                    </>
                    ) : (
                        <p className="text-center text-lg lg:text-xl text-white py-20">There aren't books with {searchQuery}</p>
                    )
                
            )}


        </>
    )
}
