import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from "../../styles/Blog.module.css"
import Navbars from '../../component/Navbars'

// http://localhost:3000/blogpost/How%20to%20learn%20Python

const slug = () => {

  const [blog, setBlog] = useState();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const { slug } = router.query;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
      return a.json()
    })
      .then((parsed) => {
        setBlog(parsed);
      })
  }, [router.isReady]);




  return (
    <div className={styles.body}>
    <Navbars/>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.blogItem}>{blog && blog.title} </h1>
          <hr />
          <div className={styles.blog}>
            {blog && blog.content}
          </div>
        </main>
      </div>
    </div>

  )
}

export default slug