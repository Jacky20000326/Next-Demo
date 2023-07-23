"use client";
import React, { useState } from "react";

const template = ({ children }: { children: React.ReactNode }) => {
    let [count, setCount] = useState<number>(0);
    const increaseCount = () => {
        setCount((count) => (count += 1));
    };
    return (
        <>
            <div className="About-template-Title">About template</div>
            <div className="About-template-count">Count: {count}</div>
            <button className="About-template-Add-Btn" onClick={increaseCount}>
                increase
            </button>

            <div>{children}</div>
        </>
    );
};

export default template;
