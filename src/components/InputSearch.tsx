
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/";
import queryString from 'query-string';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const InputSearch = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);
    
    const [formValues, handleInputChange, reset] = useForm({
        searchQuery: q,
    });
    
    const {searchQuery} = formValues;
    

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
    )
}
