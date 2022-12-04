import Link from "next/link"
import Navbar from "../../component/Navbars"
import styles from "../../styles/Blog.module.css"

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <div>
            <Link href={"/"}>
              <h3 className={styles.blogItem}>How to Learn Javascript in 2022</h3></Link>
              <p>Javascript is a language used to design login for web</p>
              <Link href={"/"}>
              <h3 className={styles.blogItem}>How to Learn Javascript in 2022</h3></Link>
              <p>Javascript is a language used to design login for web</p>
              <Link href={"/"}>
              <h3 className={styles.blogItem}>How to Learn Javascript in 2022</h3></Link>
              <p>Javascript is a language used to design login for web</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Blog