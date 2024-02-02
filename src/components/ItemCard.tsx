import { Link } from "react-router-dom";

export const ItemCard = ({book_title = 'title', year_publication = '1999', url_l = '', isPage = false, isbn}) => {

    return (
        <Link 
            to={`/book/${isbn}`}
            className="overflow-hidden rounded-xl"
        >   
            {isPage ? (
                <img src={url_l} alt={book_title} className={`h-[480px] rounded-xl cursor-pointer transform transition-transform hover:scale-110 hover:h-[480px] mx-auto sm:mx-0 object-cover pb-12`} />
            ) : (
                <img src={url_l} alt={book_title} className={`h-[400px] rounded-xl cursor-pointer transform transition-transform hover:scale-110 hover:h-[400px] mx-auto sm:mx-0 object-cover`} />
            )}
            {!isPage && (
                <div className="text-center sm:text-left">                
                    <p className="text-white text-xl font-bold capitalize mt-8">{book_title}</p>
                    <p className="text-gray-200 font-bold capitalize text-sm">{year_publication}</p>
                </div>
            )}
        </Link>
    )
}
