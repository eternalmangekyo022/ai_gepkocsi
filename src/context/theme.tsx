/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

export default React.createContext({
    theme: 'light',
    setTheme: () => {}
} as {
    theme: 'light' | 'dark'
    setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>
});