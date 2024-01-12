import Card from "@/components/card"
import Link from "next/link"

export default function Archieved(){
    return(
        <Card>
           <div>Archieved Notifications</div>
           <div>
            <Link href="/complex-dashboard">Default</Link>
            </div>
           
        </Card>
    )
}