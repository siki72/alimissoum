import Image from 'next/image.js';
import React from 'react';
import styles from "./page.module.css"
async function getaSinglePost (id){
    try{
        const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
            cache: "no-store"
        })
        if (response.status === 200) {
            const data = await response.json()
            return data
        }
        return Error("failed to fetch post")
    }catch(err){
        console.log(err)
    }
}
//parmas as arg to get the [id] or [slug] from url after blog
const Page = async ({params}) => {
    const data = await getaSinglePost(params.id)
    return (
        <div className={styles.container}>
            <div className={styles.postContainer}key={data._id} >
                <h1>{data.title}</h1>
                <p>{data.desc}</p>
                <Image className={styles.img} src={data.img} width={200} height={200} alt={data.title} />
                <p className={styles.content}>{data.content}</p>
                <h4 className={styles.username}>{data.username}</h4>
                </div>
           
        </div>
    );
};

export default Page;