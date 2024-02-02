export const ButtonGetMore = ({onClick}) => {
    return (
        <div className="bg-[#432b84] hover:bg-[#34255e] w-fit px-4 py-3 rounded-lg mx-auto cursor-pointer" onClick={onClick}>
            <p id="moreBooks" className="text-white">More books</p>
        </div>
    )
}
