import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "../../layouts/AuthLayout";
import { useAuthStore, useForm } from "../../hooks/";
import { hashStringToSHA256 } from "../../helpers/";
import Swal from "sweetalert2";

export const RegisterPage = () => {

  const { startRegister, errorMessage } = useAuthStore();

  const [formValues, handleInputChange] = useForm({
    name: '',
    last_name: '',
    email: '',
    password: '',
    rpassword: ''
  })

  const {name, last_name, email, password, rpassword} = formValues;

  const handleLogin = async (e) =>{
    e.preventDefault();

    if([name, last_name, email, password, rpassword].includes('')) {
      Swal.fire('There are empty fields', 'Please, fill in all fields', 'error');
      return;
    }

    if (!email.includes('@')) {
      console.log(email.includes('@'), email)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The email is not valid",
      });

      return;
    }
    
    if(password !== rpassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The passwords are not same",
      });

      return;
    }

    const hashPassword = await hashStringToSHA256(password);

    await startRegister({name, last_name, email, password: hashPassword});
  }

  useEffect(() => {
    if (errorMessage !== null) {
      Swal.fire('Error en el registro', errorMessage ? errorMessage : 'Ha ocurrido un error', 'error');
    }
  }, [errorMessage]);

  return (
    <AuthLayout>
      <h2 className="text-white flex justify-center mb-14 md:text-left text-3xl md:text-5xl font-bold">Smart Library<span className="text-[#AD6BF1]">.</span></h2>
      <h3 className="text-white mb-1 md:text-left text-2xl md:text-4xl font-bold">Register<span className="text-[#AD6BF1]">.</span></h3>
      <p className="text-white">
        Please enter your credentials to register in smart library
      </p>

      <form
        onSubmit={handleLogin}
        className="max-w-[400px] mt-10"
      >

        <div>
          <label className="text-white font-bold mb-3 block">Name</label>
          <input
            type="text"
            placeholder="Type your name"
            name="name"
            className="bg-[#212133] rounded mb-5 h-10 p-6 w-full text-white focus:outline-none active:outline-none"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="text-white font-bold mb-3 block">Lastname</label>
          <input
            type="text"
            placeholder="Type your last_name"
            name="last_name"
            className="bg-[#212133] rounded mb-5 h-10 p-6 w-full text-white focus:outline-none active:outline-none"
            autoComplete="off"
            value={last_name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="text-white font-bold mb-3 block">Email</label>
          <input
            type="text"
            placeholder="Type your email"
            name="email"
            className="bg-[#212133] rounded mb-5 h-10 p-6 w-full text-white focus:outline-none active:outline-none"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="text-white font-bold mb-3 block">Password</label>
          <input
            type="password"
            placeholder="Type your password"
            name="password"
            className="bg-[#212133] rounded mb-5 h-10 p-6 w-full text-white focus:outline-none active:outline-none"
            value={password}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="text-white font-bold mb-3 block">Repeat password</label>
          <input
            type="password"
            placeholder="Type again your password"
            name="rpassword"
            className="bg-[#212133] rounded mb-5 h-10 p-6 w-full text-white focus:outline-none active:outline-none"
            value={rpassword}
            onChange={handleInputChange}
          />
        </div>
        
        <button
          type="submit"
          className="block bg-[#572887] hover:bg-[#4D1E7D] transition duration-300 text-white w-full my-5 p-2 rounded-lg mb-12"
        >
          Submit
        </button>

        <Link
          to="/"
          className="text-white flex flex-col md:flex-row justify-center items-center"
        >
          Don't have already an account?
          <span className="text-[#AD6BF1] hover:text-[#9e61dc]  ml-2">
            Sign In
          </span>
        </Link>
      </form>
    </AuthLayout>
  )
}
