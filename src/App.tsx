/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App(): JSX.Element {
    const [drawer, setDrawer] = useState<boolean>(false);

    return <>
        <div className='relative h-screen w-screen'>
            <motion.header
                key={drawer.toString()}
                className='absolute w-full bg-black flex'
                initial={{ height: drawer ? '15rem' : '4rem', backgroundColor: drawer ? 'rgba(0, 0, 0, 0.3)': '#000' }}
                animate={{ height: drawer ? '4rem': '15rem', backgroundColor: drawer ? '#000': 'rgba(0, 0, 0, 0.3)' }}
            >
                <button /*navigation button*/
                    onClick={() => setDrawer(prev => !prev)}
                    className='w-10 h-5 aspect-square ml-5 mt-5 relative'
                >
                    <motion.div
                        key={drawer.toString() + '1'}
                        className='absolute bg-white w-full h-1 top-0'
                        initial={{ rotate: drawer ? '45deg' : '0deg', top: drawer ? '0%' : '50%' }}
                        animate={{ rotate: drawer ? '0deg': '45deg' }}
                    />
                    <motion.div
                        key={drawer.toString() + '2'}
                        className='absolute bg-white w-full h-1 top-[50%]'
                        initial={{ scale: drawer ? 0 : 1 }}    
                        animate={{ scale: drawer ? 1 : 0 }}
                    />
                    <motion.div
                        key={drawer.toString() + '3'}
                        className='absolute bg-white w-full h-1 top-[100%]'
                        initial={{ rotate: drawer ? '-45deg' : '0deg', top: drawer ? '100%' : '50%' }}
                        animate={{ rotate: drawer ? '0deg': '-45deg' }}
                    />
                </button>
            </motion.header>
        </div>
    </>;
}

export default App;