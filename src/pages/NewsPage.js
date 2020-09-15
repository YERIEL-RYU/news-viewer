import React from 'react';
import Categorise from '../components/Categories';
import NewList from '../components/NewsList';

const NewsPage = ({match}) => {
    const category = match.params.category || 'all';
    return (
        <>
          <Categorise />
          <NewList category={category} />  
        </>
    );
};

export default NewsPage;