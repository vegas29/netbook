/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { ItemCard } from "./ItemCard";
import { Loader } from "../ui/components/Loader";

export const ItemsList = ({books}) => {
    
    const { isLoadingBooks } = useSelector((state:any) => state.book);

    return (
        isLoadingBooks ? (
            <Loader/>
        ) : (
            books.length > 0 ? (
                <div className="py-7 md:py-10 md:max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10 xl:px-0">
                {
                    books.map(book => (
                        <ItemCard
                            key={book.isbn}
                            {...book}
                        />
                    ))
                }
                </div>
            ) : (
                <p className="text-center text-lg lg:text-xl">There aren't books</p>
            )
        )
    )
}
