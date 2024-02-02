import { useDispatch, useSelector } from "react-redux";
import smartLibraryApi from "../api/smartLibraryApi";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async({email, password}) => {

        dispatch( onChecking() );

        try {
            const { status, data } = await smartLibraryApi.post('/security/login', { email, password });
            const { token } = data;
            localStorage.setItem('token', token.access_token);
            localStorage.setItem('token-expire-date', token.expire_date);
            if ((status === 200 || status === 202)){
                dispatch( onLogin({ name: data.name, last_name: data.last_name, id: data.id_user}) );
            }
        } catch (error) {
            console.log({error});
            if(error.message === 'Network Error') {
                dispatch( onLogout('Ha ocurrido un error, inténtalo más tarde'));
                
                setTimeout(() =>{
                    dispatch(clearErrorMessage());
                }, 1000);
                return;
            } else {
                dispatch( onLogout('Credenciales incorrectas' ));
                
                setTimeout(() =>{
                    dispatch(clearErrorMessage());
                }, 1000);
                return;
            }
        }
    }

    const startRegister = async({name, last_name, email, password}) => {
        dispatch( onChecking() );
        try {
            const { status, data} = await smartLibraryApi.post('/user/create', { id: 0, type: 0, name, last_name, email, password, age: 0, active: true });
            if ((status === 200 || status === 202) && data.message === "User created successfully") {
                startLogin({email, password});
                // dispatch( onLogin({ name, last_name}));
            }
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

        const token = localStorage.getItem('token');
        const expire_date = localStorage.getItem('token-expire-date');
        const currentDate = new Date().toUTCString();

        if (!token) return dispatch( onLogout() );
        if(currentDate <= expire_date) return dispatch( onLogout() );

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