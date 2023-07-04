import React from 'react';
import styles from "./page.module.css"
import Image from 'next/image.js';
import Link from 'next/link.js';
async function fetchDatas () {
    try{
        const response = await fetch("http://localhost:3000/api/posts", {
            cache: "no-store"
        })
        if (!response.ok ){
            throw new Error ("failed to fetch datas")
        }
        return response.json()
    }catch(err){
        console.log(err)
    }
}
const Blog = async () => {
    const data = await fetchDatas()
    return (
        <div className={styles.container}>
             {data?.map(item=>(
                <Link href={`/blog/${item._id}`} className={styles.postContainer} key={item.id}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.desc}> {item.desc}</p>
                    <Image className={styles.img} src={item.img} width={200} height={200} alt={item.title} />
                    <p className={styles.content}>{item.content}</p>
                    <h4 className={styles.username}>{item.username}</h4>
                </Link>
             ))}
        </div>
    );
};

export default Blog;