import { Tween } from 'react-gsap';

import styles from '../assets/css/Footer.module.css';

const Footer = () => {
  return (
    <Tween from={{ y: 30, delay: 0.5, opacity: 0 }} duration={0.7} ease="power3.out">
      <div id={styles.main_footer} className="second_level_blur py-5">
        <p className="text-black text-xl text-center">&copy; 2021 <a href="https://abdulkader.me">Abdul Kader</a> All rights reserved.</p>
      </div>
    </Tween>
  );
};

export default Footer;
