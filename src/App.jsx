import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EffectsCollection, Navbar, CardHover, MagicText } from './components';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<EffectsCollection />} />
                <Route path="/cardhover" element={<CardHover />} />
                <Route path="/magictext" element={<MagicText />} />
            </Routes>
        </Router>
    );
};

export default App;
