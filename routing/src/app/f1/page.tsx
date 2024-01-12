import Link from "next/link"

export default function F1(){
    return (
        <div>
            <h2>F1 Page</h2>
            <div>
                <Link href="/f1/f2">F2</Link>
                <Link href="/f1/f4">F4</Link>
            </div>
        </div>
    )
}