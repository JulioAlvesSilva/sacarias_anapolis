'use client'

import { useEffect, useState } from "react";

export default function useScreenSize(){

    const [screen, setScreen] = useState(false);
    useEffect(()=> {
        const handleSizeScreen = ()=> {
            setScreen(window.innerWidth <= 800)
        };
        handleSizeScreen();
        window.addEventListener('resize', handleSizeScreen);
        return ()=> {
            window.removeEventListener('resize', handleSizeScreen)
        };
    }, [])
    return screen
}