import { redirect } from "next/navigation";
import {comments} from "../data"

export async function GET(request:Request,{params}:{
    params:{
        id:string;
    }
}){
    // try {
    //     const comment = comments.find((obj) => obj.id === Number(params.id));
    //     if (!comment) {
    //       return new Response("Not Found", { status: 404, statusText: "Comment not found" });
    //     }
    //     return new Response(JSON.stringify(comment), { status: 200, statusText: "OK" });
    //   } catch (error:any) {
    //     return new Response(error.message, { status: 500, statusText: "Internal Server Error" });
    //   }

    if(parseInt(params.id)>comments.length){
      redirect("/comments");
    }
    const comment = comments.find((obj)=> obj.id === parseInt(params.id));
    return Response.json(comment);

      
}

export async function PATCH(request:Request,{params}:{
    params:{id:string}}){
    const body = await request.json();
    const {text} = body;
    const index = comments.findIndex((comment)=> comment.id === Number(params.id) );
    comments[index].text = text;

    return Response.json(comments);
}

export async function DELETE(request:Request,{params}:{
    params:{id:string}}){
   
    const index = comments.findIndex((comment)=> comment.id === Number(params.id) );
    const deletedComment = comments[index];
    comments.splice(index,1);
   

    return Response.json(comments);
}