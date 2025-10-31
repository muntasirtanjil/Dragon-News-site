import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex  items-center bg-base-200 py-3 gap-2 px-3'>
            <button className='btn btn-secondary font-bold '>Latest</button>
           <Marquee className='' pauseOnHover={true}>
             <p className='font-bold'>This is my first building news based website , I am trying to implement react-fast-marquee , It's help us improve my skill   </p>
           </Marquee>
        </div>
    );
};

export default LatestNews;