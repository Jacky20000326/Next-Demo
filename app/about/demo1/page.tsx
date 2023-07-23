import React from "react";
import Link from "next/link";
const page = () => {
    return (
        <div>
            Demo1<Link href="/demo2">demo2</Link>
        </div>
    );
};

export default page;
