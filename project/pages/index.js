import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <ul className='styles.grid'>
        <Link href={"/"} >
          Home
        </Link>
        <Link href={"/about"} >
          About
        </Link>
        <Link href={"/services"} >
          Services
        </Link>
        <Link href={"/contact"} >
          Contact
        </Link>
      </ul>

    </>
  )
}
