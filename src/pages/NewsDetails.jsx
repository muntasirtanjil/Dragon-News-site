import React, {  useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/HomeLayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [news, setNews] = useState({});

    useEffect(() => {
        const newsDetails = data.find(singleData => singleData.id == id);
        setNews(newsDetails);
    }, [id, data])

    return (
        <div className=''>
            <header className='py-3.5'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-4 '>
                <section className='col-span-9 '>
                    <h2 className='font-bold mb-5 '>Dragon News</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>

            </main>
        </div>
    );
};

export default NewsDetails;