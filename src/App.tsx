/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useState } from 'react';
import { useMeasure } from 'react-use';
import Links from './components/Links';
import Header from './components/Header';
import themeContext from './context/theme';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import About from './pages/about';
import Index from './pages';
/* plz memoize state */

const App = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [_drawer, _setDrawer] = useState<boolean>(false);
    
    const drawer = useMemo(() => _drawer, [_drawer]);
    const setDrawer = useMemo(() => _setDrawer, [_setDrawer]);

    const [drawerRef, { height: drawerHeight }] = useMeasure();

    return <>
        <themeContext.Provider value={{ theme, setTheme }}>
            <div className='relative w-screen h-screen bg-neutral-100'>
                <Header
                    drawer={drawer}
                    setDrawer={setDrawer}
                    drawerRef={drawerRef}
                >
                    { drawer && <Links/> }
                </Header>
                <Router>
                    <Routes>
                        <Route path="/" element={<Index drawerHeight={ drawerHeight } />} />
                        <Route path='/about' element={<About/>}/>
                    </Routes>
                </Router>
                

            </div>
        </themeContext.Provider>
    </>;
};

export default App;