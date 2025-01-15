import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../src/components/Layout.js/Layout';
import Home from './pages/Home/home';
import Messages from './pages/Messages/Messages';
import Userpage from './pages/UserPage/Userpage';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/user-page" element={<Userpage />} />
            </Routes>
        </Layout>
    );
}

export default App;
