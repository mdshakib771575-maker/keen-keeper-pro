"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';

const MynavLink = ({ href, children }) => {
    const pathName = usePathname()
    console.log("pathname", pathName)
    return (

        <Link href={href} className={` font-semibold mr-1 ${pathName === href ? "bg-green-700 text text-white" : ""}`}>{children}</Link>

    );
};

export default MynavLink;