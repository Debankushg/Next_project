import Link from 'next/link'
import style from '../styles/navbar.module.css'

const Navbar = () => {
  return (
   <>
   <nav className={style.navbar}>
    <ul className={style.menu}>
        <li className={style.li}>
            <Link href="/" className={style.a}>
                Home
            </Link>
        </li>
        <li className={style.li}>
            <Link href="/web/About" className={style.a}>
                About
            </Link>
        </li>
        <li className={style.li}>
            <Link href="/web/Services" className={style.a}>
                Services
            </Link>
        </li>
        <li className={style.li}>
            <Link href="/web/Blog" className={style.a}>
                Blog
            </Link>
        </li>
        <li className={style.li}>
            <Link href="/web/Contact"  className={style.a}>
                Contact
            </Link>
        </li>
    </ul>
   </nav>
   </>
  )
}

export default Navbar