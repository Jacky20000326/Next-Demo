import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const metadata: Metadata = {
    title: "Next.js 0723 Test Demo",
};

export default function Home() {
    return (
        <>
            <main className={styles.main}>home page</main>
            <div className="LinkGroup">
                <div className="Link" style={{ color: "#fff" }}>
                    <Link href="/about/demo1">demo1</Link>
                </div>
                <div className="Link" style={{ color: "#fff" }}>
                    <Link href="/about/demo2">demo2</Link>
                </div>
            </div>
        </>
    );
}
