import { useDispatch, useSelector } from "react-redux";
import smartLibraryApi from "../api/smartLibraryApi";
import { clearErrorMessage, 
    // onChecking, 
onLogin, onLogout } from "../store/auth/authSlice";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async({email, password}) => {

        // dispatch( onChecking() );

        try {
            const { data } = await smartLibraryApi.post('/security/login', { email, password });
            // localStorage.setItem('token', data.token);
            // localStorage.setItem('token-init-date', new Date().getTime());
            dispatch( onLogin({ name: data.name, uid: data.uid}) );
        } catch (error) {
            console.log({error});
            dispatch( onLogout('Credenciales incorrectas' ));

            setTimeout(() =>{
                dispatch(clearErrorMessage());
            }, 1000);
        }
    }

    const startRegister = async({name, lastname, email, password}) => {
        // dispatch( onChecking() );

        try {
            const { data } = await smartLibraryApi.post('/user/create', { name, lastname, email, password });
            // localStorage.setItem('token', data.token);
            // localStorage.setItem('token-init-date', new Date().getTime());
            dispatch( onLogin({ name: data.name, uid: data.uid}) );
        } catch (error) {
            console.log({error});
            dispatch( onLogout(error?.response?.data?.msg || 'Error'));

            setTimeout(() =>{
                dispatch(clearErrorMessage());
            }, 1000);
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout());
    }

    const checkAuthToken = async() => {

        // const token = localStorage.getItem('token');
        // if (!token) return dispatch( onLogout() );

        // try {
        //     const { data } = await smartLibraryApi.get('/auth/renew');
        //     localStorage.setItem('token', data.token);
        //     localStorage.setItem('token-init-date', new Date().getTime());
        //     dispatch( onLogin({ name: data.name, uid: data.uid}) );
        // } catch (error) {
        //     console.log({error});
        //     localStorage.clear();
        //     dispatch( onLogout() );
        // }
    }
    


    return {
        //Properties
        errorMessage,
        status,
        user,

        //Methods
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout
    }
}