import backgroundImage from '../assets/backgroundauth.png';

export const AuthLayout = ({children}) => {
    return (
        <div className="flex justify-center items-center min-h-screen min-w-screen absolute top-0 z-[-2] h-screen w-screen bg-cover bg-gradient-to-b from-sky-950 to-sky-100" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="shadow-md rounded-md max-[600px] h-[750px] flex flex-col justify-center p-10 md:p-20 mx-8 bg-[#181827]">
                {children}
            </div>
        </div>
    )
}