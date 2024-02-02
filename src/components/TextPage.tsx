/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import { Loader } from "../ui/components/Loader";

export const TextPage = ({author, date, publisher, rating}) => {

    const { isLoadingBooks } = useSelector((state:any) => state.book);

    const ratingChanged = (newRating) => {
        console.log('rating', newRating);
    };


    return (
        isLoadingBooks ? (
            <Loader/>
        ) : (

            <div className="text-white text-left md:ml-32 lg:ml-52 flex flex-col gap-5 text-md md:text-xl">
                <p>
                    <span className="font-black">Author: </span>
                    {author}
                </p>

                <p>
                    <span className="font-black">Publication date: </span>
                    {date}
                </p>

                <p>
                    <span className="font-black">Publisher: </span>
                    {publisher}
                </p>

                <p className="flex">
                    <span className="font-black">Rating: </span>
                    <ReactStars
                        value={rating}
                        isHalf={true}
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                </p>

            </div>
        )
    )
}
