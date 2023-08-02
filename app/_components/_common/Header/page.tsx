'use client'
import React,{useState,useEffect} from "react";
import Styled from "./Header.module.sass";
import Link from "next/link";
const Header = () => {
    enum scrollDirection  {
        scrollDown = 1,
        scrollup = 0
    }
    // state
    let [scrollY,setSceollY] = useState<number>(0)
    let [preScrollY,preSetSceollY] = useState<number>(0) 
    let [isScrollDown,setScrollDown] = useState<number>(scrollDirection.scrollup) 
    const scrollHandler = ():void=>{
        let windowScrollY =  window.scrollY
        if(scrollY == 0){
            setSceollY(windowScrollY)
            return
        }
        preSetSceollY(scrollY)
        setSceollY(windowScrollY)
    }
    const isShowHeader = ():void=>{
        scrollY - preScrollY > 0 ? setScrollDown(scrollDirection.scrollDown) : setScrollDown(scrollDirection.scrollup)
        
    }
    useEffect(()=>{
        window.addEventListener('scroll',scrollHandler)
        isShowHeader()
        return ()=>{
            window.removeEventListener('scroll',scrollHandler)
        }
    },[scrollY])
    return (
        <div className={`${Styled.headerContainer}  ${isScrollDown == 1 ? Styled.headerContainerScrollDown : null} `} >
            <div className={Styled.Logo}>Jacky Blog</div>
            <div className={Styled.content}>
                <Link href="/content">Content</Link>
            </div>
            <div className={Styled.about}>
                <Link href="/about">About</Link>
            </div>
        </div>
    );
};

export default Header;
