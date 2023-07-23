import { NextResponse } from "next/server";
const apiUrl:string = 'https://jsonplaceholder.typicode.com/comments?postId=1'
export async function GET( request: Request,{params}:{params:{id:string}}){
    // let apiResult = await fetch(apiUrl+)
    // NextResponse.json(apiResult)
    console.log(params)

    const res = await fetch(apiUrl, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()
    
    return NextResponse.json({ data })
}