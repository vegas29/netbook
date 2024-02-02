import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthStore } from "../hooks";
import { LoginPage } from '../pages/auth/LoginPage';
import { RegisterPage } from '../pages/auth/RegisterPage';
import { LoaderPage } from '../ui/components/LoaderPage';
import { HomePage } from '../pages/home/HomePage';
import { BookPage } from '../pages/book/BookPage';

export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();

    const token = localStorage.getItem('token');

    useEffect(() => {
        checkAuthToken();
    }, []);

    if (status === 'checking') {
        return (
            <LoaderPage />
        )
    }

    return (
        <Routes>
            {
                (status === 'not-authenticated' && !token )
                    ? (
                        <>
                            <Route path="/" element={<LoginPage/>} />
                            <Route path="/register" element={<RegisterPage/>} />
                            <Route path="/*" element={<Navigate to="/"/>} />
                        </>
                    )
                    :  (
                        <>      
                            <Route path="/home" element={<HomePage/>} />                  
                            <Route path="/*" element={<Navigate to="/home"/>} />
                            <Route path="/book/:isbn" element={<BookPage/>} />    
                        </>
                    )
            }
        </Routes>     
    )
}
