/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';


function App(): JSX.Element {
    const [drawer, setDrawer] = useState<boolean>(false);

    return <>
        <div className='relative h-screen w-screen'>
            <header className='absolute w-full h-16 bg-black'>
                <button /*navigation button*/
                    className='w-10 bg-white aspect-square'
                ></button>
            </header>
        </div>
    </>;

}

export default App;