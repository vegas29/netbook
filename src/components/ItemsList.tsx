import { ItemCard } from "./ItemCard";

export const ItemsList = ({books}) => {

    return (
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
    )
}
