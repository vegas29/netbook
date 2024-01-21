export const AuthLayout = ({children}) => {
    return (
        <div className="flex justify-center items-center min-h-screen min-w-screen absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <div className="shadow-md rounded-md max-[600px] h-[700px] flex flex-col justify-center p-10 md:p-20 mx-8 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                {children}
            </div>
        </div>
    )
}