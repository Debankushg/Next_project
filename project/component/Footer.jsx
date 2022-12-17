import styles from '../styles/footer.module.css';
import {FaFacebookF} from  'react-icons/fa';
import {AiOutlineTwitter ,AiFillLinkedin ,AiFillInstagram} from  'react-icons/ai';

import Link from 'next/link'


const Footer = () => {
  return (
    <div>
        <footer className={styles.footer}>
  	 <div className={styles.container}>
  	 	<div className={styles.row}>
  	 		<div className={styles.footerCol}>
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className={styles.footerCol}>
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className={styles.footerCol}>
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="#">watch</a></li>
  	 				<li><a href="#">bag</a></li>
  	 				<li><a href="#">shoes</a></li>
  	 				<li><a href="#">dress</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className={styles.footerCol}>
  	 			<h4>follow us</h4>
  	 			<div className={styles.socialLinks}>
  	 				<Link href="#"><FaFacebookF/></Link>
  	 				<Link href="#"><AiOutlineTwitter/></Link>
  	 				<Link href="#"><AiFillInstagram/></Link>
  	 				<Link href="#"><AiFillLinkedin/></Link>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

    </div>
  )
}

export default Footer