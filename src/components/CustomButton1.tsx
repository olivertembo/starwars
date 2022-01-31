import React from "react"
import Link from "next/link";

interface CustomButton1{
    title: string;
    href: string;
}

export default function CustomButton1({title, href}: CustomButton1){

    return (
        <Link href={href}>
        <a>{title}</a>
      </Link>
    );
}