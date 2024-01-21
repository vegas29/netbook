import { AuthLayout } from "../../layouts/AuthLayout";
import { useForm } from "../../hooks/";
import { Link } from "react-router-dom";

export const RegisterPage = () => {

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  })

  const {email, password} = formValues;

  const handleLogin = (e) =>{
    e.preventDefault();
    console.log('submit login');
  }

  return (
    <AuthLayout>
      <h3 className="text-white mb-20 md:text-left text-3xl md:text-5xl font-bold">Sign Up</h3>

      <form
        onSubmit={handleLogin}
        className="max-w-[400px]"
      >

        <input
          type="text"
          placeholder="Email"
          name="email"
          className="bg-transparent border-b border-gray-300 text-base mb-10 h-10 p-5 w-full transition duration-300 text-white"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="bg-transparent border-b border-gray-300 text-base mb-10 h-10 p-5 w-full transition duration-300 text-white"
          value={password}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Confirm your password"
          name="password"
          className="bg-transparent border-b border-gray-300 text-base mb-10 h-10 p-5 w-full transition duration-300 text-white"
          value={password}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="block bg-blue-500 hover:bg-blue-600 transition duration-300 text-white w-full my-5 p-2 rounded-lg mb-12"
        >
          Login
        </button>

        <Link
          to="/"
          className="text-white"
        >
          Do you have already account? Sign In
        </Link>
      </form>
    </AuthLayout>
  )
}
