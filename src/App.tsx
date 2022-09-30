import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMeasure } from 'react-use';
import Circle from './components/Circle';

function App(): JSX.Element {
    const [drawer, setDrawer] = useState<boolean>(false);
    const [drawerRef, { height: drawerHeight }] = useMeasure();
    const [carSource, setCarSource] = useState<string>('https://static-assets.tesla.com/configurator/compositor?&options=$MTY13,$PPSW,$WY19B,$INPB0&view=REAR34&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&version=v0119-fec036b0d202209290551');

    return <>
        <div className='relative w-screen no-scrollbar'>
            <motion.header
                ref={drawerRef as React.Ref<HTMLElement>}
                key={drawer.toString()}
                className='w-full bg-black flex top-0 z-10'
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
                { drawer &&
                        <ul className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
                            {[
                                ['Source', 'https://github.com/eternalmangekyo022/ai_gepkocsi', 'https://www.svgrepo.com/show/353044/code.svg'],
                                ['Check out my GitHub', 'https://github.com/eternalmangekyo022', 'https://www.svgrepo.com/show/349375/github.svg'],
                                ['About me', './about', 'https://www.svgrepo.com/show/257694/question.svg'],
                            ].map((i, index) => <>
                                <motion.li
                                    className='m-5 flex w-[65vw] h-8 cursor-pointer bg-neutral-500 justify-center items-center rounded-lg hover:bg-neutral-400 transition-colors'
                                    initial={{ scale: 0, x: -1000 }}
                                    animate={{ scale: 1, x: 0 }}
                                    transition={{ delay: .05 + (index / 10) }}
                                >
                                    <a href={i[1]}>{i[0]} <img width='20' className='inline ml-1 mb-1' src={i[2]}></img></a>
                                </motion.li>
                            </>)}
                        </ul>
                }
            </motion.header>
            <div className='absolute flex w-full bg-neutral-100 justify-center'
                style={{ minHeight: window.innerHeight - drawerHeight }}
            >
                {/* eslint-disable-next-line */}
                <div className='min-w-[50vw] w-[70vw] max-w-[90rem] bg-white flex justify-start items-center flex-col'>
                    <br />
                    <h1 className='font-black text-3xl mb-5'>Tesla Model Y</h1>
                    <p className='text-center w-3/4'>
                        Az általam legkedveltebb, sokak szerint &apos;hamis&apos; biztonságot nyújtó, 2020-as gyártású <span className='font-bold'>Tesla Model Y</span>.
                    </p>
                    <motion.img
                        className='max-h-[20rem] object-cover mt-10' src={carSource}
                        whileHover={{ scale: 1.2, opacity: .8 }}
                    />
                    <div className='mt-[3.7vh] bg-gray-200 rounded-full min-w-[40%] w-[15rem] max-w-[20rem] h-20 flex justify-center items-center'>
                        <div className='flex flex-row justify-between w-[80%]'>
                            <Circle color='white'/>
                            <Circle color='blue-500'/>
                            <Circle color='red-500'/>
                            <Circle color='gray-500'/>
                            <Circle color='black'/>

                        </div>

                    </div>


                </div>
            </div>

        </div>
    </>;
}

export default App;