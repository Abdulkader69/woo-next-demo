import NavLink from './NavLink';

import headerStyle from '../assets/css/Header.module.scss';

const Navigation = () => {
  return (
    <ul className="menu flex">
      <li>
        <NavLink activeClassName={headerStyle.active} href="/">
          <a className={`${headerStyle.nav_link} no-underline block px-5 py-2 second_level_blur bg-black text-white border-r-2 border-gray-500`}>Home</a>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={headerStyle.active} href="/about">
          <a className={`${headerStyle.nav_link} no-underline block px-5 py-2 second_level_blur bg-black text-white border-r-2 border-gray-500`}>About</a>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={headerStyle.active} href="/products">
          <a className={`${headerStyle.nav_link} no-underline block px-5 py-2 second_level_blur bg-black text-white border-r-2 border-gray-500`}>Products</a>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={headerStyle.active} href="/contact">
          <a className={`${headerStyle.nav_link} no-underline block px-5 py-2 second_level_blur bg-black text-white`}>Contact</a>
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
