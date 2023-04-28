import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EffectsCollection, Navbar, CardHover, MagicText, TaglineCarousel } from './components';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<EffectsCollection />} />
                <Route path="/CardHover" element={<CardHover />} />
                <Route path="/MagicText" element={<MagicText />} />
                <Route path="/TaglineCarousel" element={<TaglineCarousel />} />
            </Routes>
        </Router>
    );
};

export default App;
