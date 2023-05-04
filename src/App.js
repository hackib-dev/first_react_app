import logo from './img/logo.svg';
import { useState } from "react";
import open from './img/icon-hamburger.svg';
import close from './img/icon-close.svg';
import image from './img/illustration-devices.svg';
import Body from './body';

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
     <div className='relative'>
        <div className='grid grid-cols-2 h-[480px] lg:h-80'>
          <div></div>
          <div className='bg-[#eef3f6] rounded-bl-[50px] -z-10'></div>
        </div>
        <div className='absolute top-0 '>
          <Body/>
        </div>
     </div>
    


        
    );
}