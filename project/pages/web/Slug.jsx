import React from 'react'
import { useRouter } from 'next/router'
import styles from "../../styles/Blog.module.css"


const Slug = () => {

    const router = useRouter()
    const{slug} =router.query

  return (
    <div className={styles.container}>
    <main className={styles.main}>
    <h1>
        Title of the pages {slug}
    </h1>
    </main>

    </div>

  )
}

export default Slug