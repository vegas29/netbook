export const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="h-[150px] flex text-white items-center justify-center">
            All rights reserved © {year} Smart Library<span className="text-[#AD6BF1]">.</span>
        </footer>
    )
}
