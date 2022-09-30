import React from 'react';

export default React.memo(
    function Circle({ color }: { color: 'white' | 'black' | 'red' | 'blue' | 'gray' }) {
        return <>
            <button
                className='relative rounded-full w-10 aspect-square'
                onClick={() => {

                    return null;
                }}
                style={{ backgroundColor: color }}
            />
        </>;
    });