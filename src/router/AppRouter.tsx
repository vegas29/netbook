import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthStore } from "../hooks";
import { LoginPage } from '../pages/auth/LoginPage';
import { RegisterPage } from '../pages/auth/RegisterPage';
import { Loader } from '../ui/components/Loader';
import { HomePage } from '../pages/home/HomePage';
// import { BookPage } from '../pages/book/BookPage';

export const AppRouter = () => {

    const { status, 
        // checkAuthToken
    } = useAuthStore();

    if (status === 'checking') {
        return (
            <Loader />
        )
    }

    return (
        <Routes>
            {
                (status === 'not-authenticated')
                    ? (
                        <>
                            <Route path="/" element={<LoginPage/>} />
                            <Route path="/register" element={<RegisterPage/>} />
                        </>
                    )
                    :  (
                        <>      
                            <Route path="/" element={<HomePage/>} />                  
                            <Route path="/*" element={<Navigate to="/"/>} />
                        </>
                    )
            }
        </Routes>     
        
        // <Routes>
        //     <>
        //         <Route path="/login" element={<LoginPage/>} />
        //         <Route path="/register" element={<RegisterPage/>} />
        //         <Route path="/" element={<HomePage/>} />           
        //         <Route path="/book/:bookId" element={<BookPage/>} />       
        //         <Route path="/*" element={<Navigate to="/"/>} />
        //     </>
        // </Routes> 
    )
}
