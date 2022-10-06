/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMeasure } from 'react-use';
import Circle from './components/Circle';
import Links from './components/Links';
import Header from './components/Header';

function App(): JSX.Element {
    const [drawer, setDrawer] = useState<boolean>(false);
    const [drawerRef, { height: drawerHeight }] = useMeasure();
    const [carSource, setCarSource] = useState<string>();
    const [cars, setCars] = useState<{[key: string]: string}>({white: '', black: '', blue: '', red: '', gray: ''});

    const [width, setWidth] = useState<number>(window.innerWidth);
    const [height, setHeight] = useState<number>(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        });

        const urls = [
            'https://static-assets.tesla.com/configurator/compositor?&options=$MTY13,$PPSW,$WY19B,$INPB0&view=REAR34&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&version=v0119-fec036b0d202209290551',
            'https://static-assets.tesla.com/configurator/compositor?&options=$MTY13,$PPSB,$WY19B,$INPB0&view=REAR34&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&version=v0119-fec036b0d202209290551',
            'https://static-assets.tesla.com/configurator/compositor?&options=$MTY13,$PPMR,$WY19B,$INPB0&view=REAR34&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&version=v0119-fec036b0d202209290551',
            'https://static-assets.tesla.com/configurator/compositor?&options=$MTY13,$PMNG,$WY19B,$INPB0&view=REAR34&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&version=v0119-fec036b0d202209290551',
            'https://static-assets.tesla.com/configurator/compositor?&options=$MTY13,$PBSB,$WY19B,$INPB0&view=REAR34&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&version=v0119-fec036b0d202209290551'
        ];
        
        async function fetchCars() {
            /* [white, blue, red, gray, black] */
            try {
                let results: string[] | Blob[] | Response[] = await Promise.all(urls.map(i => fetch(i)));
                results = await Promise.all(results.map(i => i.blob()));
                return results.map(i => URL.createObjectURL(i));
            } catch (e) {
                return Promise.reject(e);
            }
        }

        fetchCars()
            .then(([white, blue, red, gray, black]) => {
                setCarSource(white);
                setCars({
                    white,
                    blue,
                    red,
                    gray,
                    black
                });
            })
            .catch(err => console.error(err));


        return () => {
            window.onresize = null;
        };
    }, []);

    return <>
        <div className='relative w-screen h-screen bg-neutral-100'>
            <Header
                drawer={drawer}
                setDrawer={setDrawer}
                drawerRef={drawerRef}
            >
                { drawer && <Links/> }
            </Header>
            <div className='absolute flex w-full justify-center mt-[3.75rem]'
                style={{ minHeight: window.innerHeight - drawerHeight }}
            >
                {/* eslint-disable-next-line */}
                    <div className='min-w-[50vw] w-[70vw] max-w-[90rem] bg-white flex justify-start items-center flex-col overflow-x-hidden'>
                    <br />
                    <h1 className='font-black text-3xl mb-5'>Tesla Model Y</h1>
                    <p className='text-center w-3/4'>
                            Az általam legkedveltebb, sokak szerint &apos;hamis&apos; biztonságot nyújtó, 2020-as gyártású <span className='font-bold'>Tesla Model Y</span>.
                    </p>
                    <motion.img
                        draggable={false}
                        className='w-1/2 min-w-[30rem] object-cover mt-10'
                        src={carSource}
                        whileHover={{ scale: 1.2, opacity: .8 }}
                    />
                    { carSource && <>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: .13 }}
                            className='mt-[3.7vh] mb-10 bg-gray-200 rounded-full min-w-[40%] w-[15rem] max-w-[20rem] h-20 flex justify-center items-center z-10'>
                            <div className='flex flex-row justify-between w-[80%]'>
                                <Circle color='white' setCarSource={() => setCarSource(cars.white)}/>
                                <Circle color='blue' setCarSource={() => setCarSource(cars.blue)}/>
                                <Circle color='red' setCarSource={() => setCarSource(cars.red)}/>
                                <Circle color='gray' setCarSource={() => setCarSource(cars.gray)}/>
                                <Circle color='black' setCarSource={() => setCarSource(cars.black)}/>
                            </div>
                        </motion.div>
                    </> }
                    <p>Válaszd ki a tetszőleges színt!</p>
                </div>
            </div>
            {width > 768 &&
                                <motion.div
                                    animate={{ y: [height - 30, height, height - 30] }}
                                    onClick={() => {
                                        scrollTo({ top: height * 2, behavior: 'smooth' });
                                    }}
                                    transition={{ repeat: Infinity, repeatDelay: .5 }}
                                    className='absolute aspect-square h-10 left-1/2 -translate-x-1/2 cursor-pointer'
                                >
                                    <div className='w-1/2 h-1 bg-black rotate-[35deg] absolute left-1 -top-[10px]'></div>
                                    <div className='w-1/2 h-1 bg-black -rotate-[35deg] absolute left-[46%] -top-[10px]'></div>
                                </motion.div>
            }

        </div>
    </>;
}

export default App;