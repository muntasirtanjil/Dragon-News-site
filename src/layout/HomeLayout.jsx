import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navber from '../components/Navber';
import LeftAside from '../components/HomeLayout/LeftAside';
import RightAside from '../components/HomeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='my-4 w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='my-5 w-11/12 mx-auto'>
                    <Navber></Navber>
                </nav>
            </header>
            <main className='grid grid-cols-12 gap-4  my-5 w-11/12 mx-auto'>
                <aside className=' col-span-3 sticky h-fit top-0'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className=' col-span-3 sticky h-fit top-0'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;