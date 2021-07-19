import React, { useContext } from 'react';
import { Tween } from 'react-gsap';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';

import headerStyle from '../assets/css/Header.module.scss';
import { AppContext } from '../context/AppContext';

const Header = () => {
  const [globalCart] = useContext(AppContext);

  return (
    <header id={headerStyle.main_header}>
      <Tween from={{ y: -30, delay: 0.5, opacity: 0 }} duration={0.7} stagger={0.2} ease="power3.out">
        <div className={`second_level_blur ${headerStyle.top_header}`}>
          <div className="container">
            <div className="top_header_inner pl-4 pr-4 flex justify-between items-center">
              <div className="header_icons flex items-center">
                <div className="hi_item pr-5 pb-2 pt-2 border-r border-gray-50">
                  <a href="mailto:user@domain.com" className="no-underline flex items-center">
                    <Image src="/images/email.svg" width={17} height={17} />
                    <span className="text-xs pl-2">user@domain.com</span>
                  </a>
                </div>
                <div className="hi_item pr-5 pl-5 pb-2 pt-2 border-r border-gray-50">
                  <a href="tel:+123456790" className="no-underline flex items-center">
                    <Image src="/images/telephone.svg" width={17} height={17} />
                    <span className="text-xs pl-2">+1234567890</span>
                  </a>
                </div>
              </div>

              <div className="header_icons flex items-center">
                <div className="hi_item pr-5 pl-5 pb-2 pt-2 border-l border-gray-50">
                  <a href="#" className="no-underline flex items-center">
                    <Image src="/images/login.svg" width={17} height={17} />
                    <span className="text-xs pl-2">Login</span>
                  </a>
                </div>
                <div className="hi_item pl-5 pb-2 pt-2 border-l border-gray-50">
                  <a href="tel:+123456790" className="no-underline flex items-center">
                    <Image src="/images/register.svg" width={17} height={17} />
                    <span className="text-xs pl-2">Register</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="primary_header">
          <div className="container">
            <div className="primary_header_inner flex justify-between items-center py-3 px-4">
              <div className="site_logo w-1/6">
                <Link href="/">
                  <a>
                    <Image src="/images/Niobium.png" width={90} height={60} layout="intrinsic" alt="Logo" />
                  </a>
                </Link>
              </div>
              <div className="header_additional_info w-1/6 text-right">
                <Link href="/cart">
                  <a className="relative"><svg id="Capa_1" className="mr-0 m-auto" enableBackground="new 0 0 512.008 512.008" height="35" viewBox="0 0 512.008 512.008" width="35" xmlns="http://www.w3.org/2000/svg"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="256.004" x2="256.004" y1="421.004" y2="31.004"><stop offset="0" stopColor="#a93aff"/><stop offset="1" stopColor="#ff81ff"/></linearGradient><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="316" x2="316" y1="481.004" y2="210.997"><stop offset="0" stopColor="#ffbef9"/><stop offset="1" stopColor="#fff1ff"/></linearGradient><g><g><g><path d="m509.158 157.229c-2.813-3.911-7.324-6.226-12.158-6.226h-380.173l-36.579-109.745c-2.051-6.123-7.793-10.254-14.238-10.254h-51.01c-8.291 0-15 6.709-15 15s6.709 15 15 15h40.199l91.436 274.38c-15.147 7.251-25.635 22.734-25.635 40.62 0 24.814 20.186 45 45 45h240c8.291 0 15-6.709 15-15s-6.709-15-15-15h-240c-8.262 0-15-6.724-15-15s6.738-15 15-15h270c6.445 0 12.188-4.131 14.238-10.254l61-180c1.524-4.57.762-9.609-2.08-13.521z" fill="url(#SVGID_1_)"/></g></g><g><g><path d="m372.367 300.55c8.023 2.006 16.188-2.856 18.193-10.913l15-60c1.992-8.027-2.871-16.172-10.928-18.179-8.174-2.007-16.201 2.856-18.193 10.913l-15 60c-1.992 8.027 2.872 16.172 10.928 18.179zm-160.928-10.913c2.029 8.149 10.332 12.926 18.193 10.913 8.057-2.007 12.92-10.151 10.928-18.179l-15-60c-1.992-8.057-10.313-12.949-18.193-10.913-8.057 2.007-12.92 10.151-10.928 18.179zm89.561-78.633c-8.291 0-15 6.709-15 15v60c0 8.291 6.709 15 15 15s15-6.709 15-15v-60c0-8.291-6.709-15-15-15zm-75 180c-24.814 0-45 20.186-45 45s20.186 45 45 45 45-20.186 45-45-20.186-45-45-45zm180 0c-24.814 0-45 20.186-45 45s20.186 45 45 45 45-20.186 45-45-20.186-45-45-45z" fill="url(#SVGID_2_)"/></g></g></g></svg> <span className="absolute -top-3 -right-3 h-6 w-6 text-center leading-6 bg-black rounded-full text-white text-xs font-bold">{globalCart ? globalCart.length : 0}</span></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="navigation-container bg-black">
          <div className="container">
            <Navigation />
          </div>
        </div>
      </Tween>
    </header>
  );
};
export default Header;
