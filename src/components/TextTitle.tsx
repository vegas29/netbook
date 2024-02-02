/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";

export const TextTitle = ({text = 'Title', align='text-center', fontSize='text-base', fontWeight='', color='text-white', width='w-full'}) => {

  const { isLoadingBooks } = useSelector((state:any) => state.book);

  return (
    <p className={`
      ${align} ${fontSize} ${color} ${fontWeight} ${width} my-12 md:my-24
    `}>
      {isLoadingBooks ? 'Loading...' :text}
    </p>
  )
}
