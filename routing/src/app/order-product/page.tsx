"use client";
import {useRouter} from "next/navigation"

export  default function OrderProduct(){

    const router = useRouter();
    const handleClick =() =>{
        console.log("Placin the order.");
        router.forward()
    }

    return(
        <>
        <h1>Order Product</h1>
        <button type="button" onClick={handleClick} className="border border-balck-700 bg-slate-200">Place Order</button>
        </>
    )
}