import React, { useState } from 'react';
import { motion } from 'framer-motion';


function App(): JSX.Element {
    const [drawer, setDrawer] = useState<boolean>(false);

    return <>
        <div className='relative h-screen w-screen'>
            <motion.header
                key={drawer.toString()}
                className='absolute w-full bg-black flex'
                initial={{ height: drawer ? '4rem' : '15rem', backgroundColor: drawer ? '#000': 'rgba(0, 0, 0, 0.7)' }}
                animate={{ height: drawer ? '15rem': '4rem', backgroundColor: drawer ? 'rgba(0, 0, 0, 0.7)': '#000' }}
            >
                <button /*navigation button*/
                    onClick={() => {setDrawer(prev => !prev);}}
                    className='w-10 h-5 aspect-square ml-5 mt-5 relative'
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
                { drawer &&
                        <ul className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
                            {[['About me', './about'], ['Check out my GitHub', 'https://github.com/eternalmangekyo022'], ['Source', 'https://github.com/eternalmangekyo022/ai_gepkocsi']].map((i, index) => <>
                                <motion.li
                                    className='m-5 flex w-[65vw] h-8 cursor-pointer bg-neutral-500 justify-center items-center rounded-lg hover:bg-neutral-400 transition-colors'
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: .05 + (index / 10) }}
                                >
                                    <a href={i[1]} className=''>{i[0]}</a>
                                </motion.li>
                            </>)}
                        </ul>
                }
            </motion.header>
        </div>
    </>;
}

export default App;