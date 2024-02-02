/* eslint-disable @typescript-eslint/no-explicit-any */
export const ButtonGetMore = ({onClick}) => {

    const isQueryHomePage = window.location.href.includes('?');

    return (
        !isQueryHomePage && (
            <div className="bg-[#432b84] hover:bg-[#34255e] w-fit px-4 py-3 rounded-lg mx-auto cursor-pointer" onClick={onClick}>
                <p id="moreBooks" className="text-white">More books</p>
            </div>
        )
    )
}
