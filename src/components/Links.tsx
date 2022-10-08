import React from 'react';
import { motion } from 'framer-motion';

export default function Links() {

    return <>
        <ul className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
            {[
                ['Source', 'https://github.com/eternalmangekyo022/ai_gepkocsi', 'https://www.svgrepo.com/show/353044/code.svg'],
                ['Check out my GitHub', 'https://github.com/eternalmangekyo022', 'https://www.svgrepo.com/show/349375/github.svg'],
                ['About me', './about', 'https://www.svgrepo.com/show/257694/question.svg'],
            ].map((i: string[], index) => <>
                <motion.li
                    className='m-5 flex w-[65vw] h-8 cursor-pointer bg-neutral-500 text-center justify-center items-center rounded-lg hover:bg-neutral-400 transition-colors'
                    initial={{ scale: 0, x: -1000 }}
                    animate={{ scale: 1, x: 0 }}
                    transition={{ delay: .05 + (index / 10) }}
                >
                    { index === 3 ? <a>About me<img width='20' className='inline ml-1 mb-1' src={i[2]}></img></a> :
                        <a target='_blank' href={i[1]} rel="noreferrer" className='w-full'>{i[0]} <img width='20' className='inline ml-1 mb-1' src={i[2]}></img></a>
                    }

                </motion.li>
            </>)}
        </ul>
    </>;
}