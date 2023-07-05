"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import useSWR from "swr";
import styles from "./page.module.css";
import Image from "next/image.js";
const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.user.name}`,
    fetcher
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;
    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.user.name,
        }),
      });
      mutate();
      e.target.reset()
    } catch (err) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/dashboard/login");
    }
  }, [status]);
  if (status === "loading") {
    return <p>loading ...</p>;
  }
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {isLoading
          ? "loading"
          : data?.map((post) => (
              <div className={styles.post} key={post._id}>
                <div className={styles.imgContainer}>
                  <Image
                    src={post.img}
                    width={300}
                    height={200}
                    alt={post.desc}
                  />
                </div>
                <h2 className={styles.postTitle}>{}</h2>
                <span
                  className={styles.delete}
                  onClick={() => handleDelete(post._id)}
                >
                  X
                </span>
              </div>
            ))}
      </div>

      <form className={styles.new} onSubmit={handleSubmit}>
        <h1> Add new post</h1>
        <input type="text" placeholder="Title" className={styles.input} />
        <input type="text" placeholder="Desc" className={styles.input} />
        <input type="text" placeholder="Image" className={styles.input} />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className={styles.textarea}
        ></textarea>
        <button className={styles.btn}>Send</button>
      </form>
    </div>
  );
};

export default Dashboard;
