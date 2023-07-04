"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
const Dashboard = () => {
  const {data: session, status} = useSession();
  const router = useRouter();
  console.log(session)
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/dashboard/login");
    }
  }, [status]);
  if (status === "loading") {
    return <p>loading ...</p>;
  }

    return <div>dashboard</div>;

};

export default Dashboard;
