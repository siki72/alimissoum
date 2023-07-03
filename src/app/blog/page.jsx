import React from 'react';
import styles from "./page.module.css"
import Image from 'next/image.js';
import Link from 'next/link.js';
const fetchDatas = async () => {
    try{
        const response = await fetch("http://localhost:3000/api/posts", {
            cache: "no-store"
        })
        if (!response.ok ){
            throw new Error ("failed to fetech datas")
        }
        const data = await response.json()
        return data
    }catch(err){
        console.log(err)
    }
}
const Blog = async () => {
    const data = await fetchDatas()
    return (
        <div className={styles.container}>
             {data.map(post=>(
                <Link href={`/blog/${post._id}`} className={styles.postContainer} key={post.id}>
                    <h3 className={styles.title}>{post.title}</h3>
                    <p className={styles.desc}> {post.desc}</p>
                    <Image className={styles.img} src={post.img} width={200} height={200} alt={post.title} />
                    <p className={styles.content}>{post.content}</p>
                    <h4 className={styles.username}>{post.username}</h4>
                </Link>
             ))}
        </div>
    );
};

export default Blog;