
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function GET(request:Request){
    const cookieStore = cookies()
    const getCookieValue = cookieStore.get('test')
    console.log(getCookieValue?.value)
    return new Response('Hello, Next.js!', {
        status: 200,
        headers: { 'Set-Cookie': `2` },
      })
}
