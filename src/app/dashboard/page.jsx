"use client"
import { useSession } from 'next-auth/react';
import React from 'react';
import useSWR from "swr"
const Page = () => {
    const session = useSession()
    console.log(session)
    return (
        <div>
            dashboard
        </div>
    );
};

export default Page;