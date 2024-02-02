import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

import { useAuthStore } from '../hooks';

export const Navbar = ({user}) => {

  const currentURL = window.location.href;
  const isHome = currentURL.includes('home');
  const navigate = useNavigate();

  const { startLogout } = useAuthStore();

  const localUserName = localStorage.getItem('name') + ' ' + localStorage.getItem('last_name');

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 md:justify-between py-10">

      { !isHome ? (
        <div className='flex flex-row-reverse gap-4 items-center'>
          <p className="text-white text-2xl font-bold">Smart Library<span className="text-[#AD6BF1]">.</span></p>
          <FontAwesomeIcon className="text-2xl cursor-pointer text-white hover:bg-[#432b84] p-2 rounded" icon={faArrowLeft} onClick={goBack} />
        </div>
      ) : (

        <p className="text-white text-2xl font-bold">Smart Library<span className="text-[#6a359f]">.</span></p>
      )}

      
      <div className="flex gap-10 text-white bg-[#432b84] p-3 rounded-xl">
        <p className="font-medium">Hi, {user.name ? user.name + ' ' + user.last_name : localUserName} </p>
        <FontAwesomeIcon className="text-2xl cursor-pointer" icon={faRightToBracket} onClick={startLogout} />
      </div>
    </div>
  )
}
