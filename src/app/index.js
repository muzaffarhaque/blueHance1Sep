'use client'

import React, { createContext, useEffect, useState } from 'react';
export const GlobalInfo = createContext();

export default function IndexApp({ children, interClass }) {
    const [theme, setTheme] = useState('');
    const [loading, setLoading] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        // console.log("Yes load is Start",document?.readyState)
        // const handleScroll = () => {
        //     const position = window.pageYOffset;
        //     const fixedY = position >= 500 ? 500 : position;
        //     setScrollPosition(fixedY);
        // };
        const handleLoad = () =>{console.log("Yes load is finished");  setLoading(false)}
        // window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleLoad);

        if (document?.readyState === 'complete') {
            handleLoad();
        }
        return () => {
            // window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('load', handleLoad);
            
        };
    }, []);


    return (
        <body className={interClass} dark-theme={theme} >
            <div
                className="fixed left-[28px] mb:left-0 p-5 z-20"
                style={{ top: 600 - scrollPosition }}
            >
                <div
                    onClick={() => setTheme('light')}
                    className={`w-[24px] h-[24px] mb:w-[12px] mb:h-[12px] bg-white mb-3 rounded-full cursor-pointer border-[1px] ${theme === 'light' ? ' border-black' : 'border-transparent'}`}
                ></div>
             
            </div>
          
                <div className={`web-pre-loader  ${!loading ?'end-preload':''}`}>
                    <div className="loader"></div>
                </div> 
                <GlobalInfo.Provider value={theme}>
                    {children}
                </GlobalInfo.Provider>
         

        </body>
    );
}
