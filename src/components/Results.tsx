import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShuttleSpace } from '@fortawesome/free-solid-svg-icons';

export const Results = ({q, dataLength}) => {
  return (
    <>
      {dataLength > 0 && (
        <div className="relative">
          <FontAwesomeIcon className="absolute top-1/4 ml-5" icon={faSearch} color="#675B8C" />
          <h2 className="font-bold ml-12 mt-10 text-lg md:text-xl text-[#675B8C] uppercase">Search results</h2>
        </div>
      )}

      {
        (q === '')
        ? 
        <div className="mt-10">
          <div className="bg-[#9385bc] w-fit px-4 py-3 rounded-full mx-auto">
            <FontAwesomeIcon className="" icon={faShuttleSpace} color="#675B8C" rotation={180} flip="vertical" bounce  />
          </div>
          <div className=" text-gray-400 text-center text-2xl font-bold shadow-lg rounded-lg w-full md:w-5/12 mx-auto pb-10 mt-5">
            Search for a book, this book will be displayed here
          </div>
        </div>
        : (dataLength === 0)
        && <div aria-label="alert-danger" className="bg-red-600 text-white text-center text-2xl font-bold shadow-lg rounded-lg w-full md:w-5/12 mx-auto py-10 mt-5">
          There are no result for {q}
        </div>
      }
    </>
  )
}
