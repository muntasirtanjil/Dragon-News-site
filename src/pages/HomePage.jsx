import React from 'react';
import { Link, Navigate,  } from 'react-router';
import LatestNews from '../components/LatestNews';

const HomePage = () => {
  

  return (
    <div>

    
      <Navigate to="/category/0"></Navigate>
    </div>
  );
};

export default HomePage;