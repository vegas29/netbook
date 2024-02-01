import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

import { useAuthStore } from '../hooks';

export const Navbar = ({user}) => {

  const { startLogout } = useAuthStore();

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 md:justify-between py-10">
      <p className="text-white text-2xl font-bold">Smart Library<span className="text-[#AD6BF1]">.</span></p>
      
      <div className="flex gap-10 text-white bg-[#432b84] p-3 rounded-xl">
        <p className="font-medium">Hola, {user.name + ' ' + user.last_name} </p>
        <FontAwesomeIcon className="text-2xl cursor-pointer" icon={faRightToBracket} onClick={startLogout} />
      </div>
    </div>
  )
}
