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
          <label className="text-white font-bold mb-3 block">Username</label>
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
            name="password"
            className="bg-[#212133] rounded mb-5 h-10 p-6 w-full text-white focus:outline-none active:outline-none"
            value={password}
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
