/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import { useAuthStore, useBookStore } from '../hooks';
import Swal from "sweetalert2";
import { Loader } from "../ui/components/Loader";

export const TextPage = ({author, date, publisher, rating}) => {

    const { isLoadingBooks } = useSelector((state:any) => state.book);

    const { user } = useAuthStore();
    const localUserId = localStorage.getItem('id');
    const { startSendRatingByUserId } = useBookStore();

    const { isbn } = useParams();

    const ratingChanged = async (newRating) => {

        const id_user = user.id ? user.id : localUserId;

        const resp = await startSendRatingByUserId({id_user, isbn, newRating});

        if (resp) {
            Swal.fire('Updated', 'Your rating has updated', 'success');
        } else {
            Swal.fire('Error on updated', 'There is a error on send rating', 'error');
        }
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
                        size={35}
                        activeColor="#ffd700"
                    />
                </p>

            </div>
        )
    )
}
