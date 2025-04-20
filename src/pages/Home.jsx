import React from 'react';
// import './Home.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


const Home = () => {
    return (
        <>
            <Header />
            <main className="flex justify-center gap-4 flex-col min-h-screen">
                <h1 className="text-3xl text-center font-bold underline text-blue-500">React & Tailwind CSS Starter Pack</h1>
                <p className="text-center text-xl">This is a starter pack for React & Tailwind CSS projects</p>
                <img src="https://bit.ly/3wsmzTy" alt="meme" className="mx-auto" />
            </main>
            <Footer />
        </>

    )
}

export default Home;