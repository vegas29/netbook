export const TextTitle = ({text = 'Title', align='text-center', fontSize='text-base', fontWeight='', color='text-white', width='w-full'}) => {
  return (
    <p className={`
      ${align} ${fontSize} ${color} ${fontWeight} ${width} my-12 md:my-24
    `}>
      {text}
    </p>
  )
}
