import React from 'react';

export default function Circle({ color }: { color: 'white' | 'black' | 'red-500' | 'blue-500' | 'gray-500' }) {
    return <>
        <button className={`relative rounded-full bg-${color} w-10 aspect-square`}></button>
    </>;
}