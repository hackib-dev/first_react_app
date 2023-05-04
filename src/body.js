import logo from './img/logo.svg';
import { useState } from "react";
import open from './img/icon-hamburger.svg';
import close from './img/icon-close.svg';
import image from './img/illustration-devices.svg';

export default function Body() {
    const [navbar, setNavbar] = useState(false);

    return (
      <div>
   
       <nav className="w-full">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                  
                    <div className="flex items-center justify-between lg:mx-40 lg:mt-10 py-3 md:py-5 md:block">
                      
                        <a href="">
 					                  <img src={logo} className="App-logo w-5" alt="logo" />
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                     (
                                      <img src={close} className="w-6 h-6" alt="logo" />
                                    )
                                ) : 
                                (
                                  <img src={open} className="w-6 h-6" alt="logo" />
                                )
                                }
                            </button>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    > 
                        <ul className="text-[#242942] lg:text-[12px] font-semibold	lg:mx-[50px] lg:mt-10 items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="">
                                <a href="">PRODUCT</a>
                            </li>
                            <li className="lg:px-3">
                                <a href="">FEATURES</a>
                            </li>
                            <li className="">
                                <a href="">PRICING</a>
                            </li>
                            <li className="text-[#a0a1ac] lg:px-3">
                                <a href="">•</a>
                            </li>
                            <li className="text-[#a0a1ac]">
                                <a href="">LOGIN</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </nav>



        <section className="mt-14">
          <div className="grid lg:grid-cols-2 gap-4 max-lg:order-first max-sm:order-last">
            <div className="px-8 lg:px-0 lg:ml-48 lg:order-first sm:order-2">
              <div className="flex flex-row items-center">
                <p className='bg-[#242942] text-white mr-3 text-xl lg:text-xs py-0.5 px-3.5 lg:py-0.5 lg:px-2 rounded-full font-medium'>NEW</p>
                <p className='text-[#a0a1ac] tracking-[.20em] text-xl lg:text-xs'>MONOGRAPH DASHBOARD</p>
              
              </div> 

              <h1 className='font-bold text-[#242942] text-[44px] lg:text-5xl my-3 leading-none'>POWERFUL INSIGHTS INTO YOUR TEAM</h1>

              <p className='text-[#5b5f71] font-normal text-[24px] lg:text-sm tracking-[.05em] lg:max-w-[45%] leading-8'>Project planning and time tracking for agile teams</p>

              <div className="flex flex-row items-center mt-10">
                <p className='bg-[#ff5c5c] text-white rounded px-5 py-2 lg:px-4 lg:py-2 text-base lg:text-xs font-medium tracking-[.05em]'>SCHEDULE A DEMO </p>
                <p className='text-[#a0a1ac] tracking-[.2em] text-base lg:text-xs pl-5'>TO SEE A PREVIEW</p>
              </div> 

            </div>
          
            <div className="overflow-hidden max-lg:order-last max-sm:order-first">
              
            <img src={image} className="lg:ml-44 ml-0 max-w-[600px] mb-20" alt="logo" />
  
            </div>
          </div>
        </section>
      </div>

    


        
    );
}