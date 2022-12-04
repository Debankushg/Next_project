import Link from "next/link"
import Navbar from "../../component/Navbars"
import styles from "../../styles/Blog.module.css"
import React ,{useEffect,useState} from "react"
const Blog = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/blog").then((a)=>{
      return a.json()})
    .then((parsed) =>{
    setBlogs(parsed);
    })
    },[])
  

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
        {blogs.map((blogItem)=>{
          return <div className={styles.blog} key={blogItem.slug}>
           <Link href={`/blogpost/${blogItem.slug}`}>
              <h3 className={styles.blogItem}>{blogItem.title}</h3></Link>
              <p>{blogItem.content.substr(0,148)}...</p>
          </div>
        })}
        </main>
      </div>
    </div>
  )
}

export default Blog