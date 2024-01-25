import { type NextRequest } from "next/server";
import {headers,cookies} from "next/headers";

export async function GET(request: NextRequest){
    const requestHeaders = new Headers(request.headers);
    const headerList = headers();

    cookies().set("resultsPerPAge","20")
    const theme = request.cookies.get("theme");


    console.log(requestHeaders.get("Authorization"));
    console.log(headerList.get("Authorization")); 

    console.log(theme);
    console.log(cookies().get("resultsPerPage"))
    
    return new Response("<h1>Profile API data</h1>",{
        headers:{
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    })
}