/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { motion } from 'framer-motion';

type props = {
    children: JSX.Element | false
    drawerRef: any
    drawer: boolean
    setDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header({ children, drawerRef, drawer, setDrawer }: props) {

    return <>
        <motion.header
            ref={drawerRef as React.Ref<HTMLElement>}
            key={drawer.toString()}
            className='w-full bg-black flex top-0 z-10 absolute'
            initial={{ height: drawer ? '4rem' : '15rem', backgroundColor: drawer ? '#000': '#5d5d5a' }}
            animate={{ height: drawer ? '15rem': '4rem', backgroundColor: drawer ? '#5d5d5a': '#000' }}
        >
            <button /*navigation button*/
                onClick={() => {setDrawer(prev => !prev);}}
                className='w-10 h-5 aspect-square ml-[4vw] mt-5 relative'
            >
                <motion.div
                    key={drawer.toString() + '1'}
                    className='absolute bg-white w-full h-1 top-0'
                    initial={{ rotate: drawer ? '0deg' : '45deg', top: drawer ? '50%' : '0%' }}
                    animate={{ rotate: drawer ? '45deg': '0deg' }}
                />
                <motion.div
                    key={drawer.toString() + '2'}
                    className='absolute bg-white w-full h-1 top-[50%]'
                    initial={{ scale: drawer ? 1 : 0 }}
                    animate={{ scale: drawer ? 0 : 1 }}
                />
                <motion.div
                    key={drawer.toString() + '3'}
                    className='absolute bg-white w-full h-1 top-[100%]'
                    initial={{ rotate: drawer ? '0deg' : '-45deg', top: drawer ? '50%' : '100%' }}
                    animate={{ rotate: drawer ? '-45deg': '0deg' }}
                />
            </button>
            { children }
        </motion.header>
    </>;
}