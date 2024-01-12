import {Metadata} from "next";

export const metadata:Metadata = {
    title: {
        absolute: "Absolute title from about",
    },
}

export default function About(){
    return <h1> It is About Me</h1>
}
