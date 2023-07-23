import { NextResponse } from 'next/server'

let url = 'https://jsonplaceholder.typicode.com/comments?postId=1';

export async function GET (){
    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()
    
    return NextResponse.json({ data })
}