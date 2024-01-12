"use client";

import { notFound } from "next/navigation";

function getRandomInt(count:number){
    return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
    children,
}:{
    children: React.ReactNode;
}){ 
    const random = getRandomInt(2);
    if(random === 1){
        throw new Error("Error loading product");
    }
    // if(parseInt(params.reviewId) > 1000){
    //     notFound();
    // }
    return(
        <>
        {children}
        <h2>Features Product</h2>
        </>
    )
}