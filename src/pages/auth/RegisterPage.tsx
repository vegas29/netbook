import { Link } from "react-router-dom";
import { AuthLayout } from "../../layouts/AuthLayout";
import { useAuthStore, useForm } from "../../hooks/";
import Swal from "sweetalert2";

export const RegisterPage = () => {

  const { startRegister, 
    // errorMessage 
  } = useAuthStore();

  const [formValues, handleInputChange] = useForm({
    name: '',
    lastname: '',
    email: '',
    password: '',
    rpassword: ''
  })

  const {name, lastname, email, password, rpassword} = formValues;

  const handleLogin = (e) =>{
    e.preventDefault();

    if (name.length === 0 || name === '') {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The name is required",
      });
    } else if (lastname.length === 0 || lastname === '') {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El lastname is required",
      });
    } else if (email.length === 0 || email === '') {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The email is required",
      });
    } else if (!email.includes('@')) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The email is not valid",
      });
    } else if (password.length === 0 || password === '') {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The password is required",
      });
    } else if(password !== rpassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The passwords are not same",
      });

      return;
    }

    startRegister({name, lastname, email, password});
  }

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
            placeholder="Type your lastname"
            name="lastname"
            className="bg-[#212133] rounded mb-5 h-10 p-6 w-full text-white focus:outline-none active:outline-none"
            autoComplete="off"
            value={lastname}
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
          to="/login"
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
