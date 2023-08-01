import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Next.js 0723 Test Demo",
};

export default function Home() {
    return (
        <>
            <main>home page</main>
        </>
    );
}
