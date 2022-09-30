import React, { MouseEventHandler } from 'react';

export default React.memo(
    function Circle({ color, setCarSource }: { color: 'white' | 'black' | 'red' | 'blue' | 'gray', setCarSource: MouseEventHandler<HTMLButtonElement> }) {
        return <>
            <button
                className='relative rounded-full w-10 aspect-square'
                onClick={setCarSource}
                style={{ backgroundColor: color }}
            />
        </>;
    });