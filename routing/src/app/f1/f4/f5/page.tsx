import Link from "next/link"

export default function F5(){
    return (
        <div>
            <h2>F5 Page</h2>
            <div>
                <Link href="/f1/f2">F2</Link>
                <Link href="/about">About</Link>
   
            </div>
        </div>
    )
}