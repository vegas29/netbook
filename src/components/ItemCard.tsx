import { Link } from "react-router-dom";

export const ItemCard = ({book_title, year_publication, url_s}) => {

    return (
        <Link 
            to={`/book/${book_title}`}
            className="overflow-hidden rounded-xl"
        >   
            <img src={url_s} alt={book_title} className="h-[400px] rounded-xl cursor-pointer transform transition-transform hover:scale-110 hover:h-[400px]" />
            <p className="text-white text-xl font-bold capitalize mt-8">{book_title}</p>
            <p className="text-gray-200 font-bold capitalize text-sm">{year_publication}</p>
        </Link>
    )
}
