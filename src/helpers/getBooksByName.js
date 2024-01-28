// import { heroes } from "../data/heroes";

export const getBooksByName = (name = '') => {

    const books = [];

    name = name.toLowerCase().trim();

    if(name.length === 0) return [];

    return books.filter(book => book.name.toLowerCase().includes(name));

}