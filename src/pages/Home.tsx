// Home.js
import React, { useState } from 'react';
import Search from '../components/atoms/search';
import CardSong from '../components/cardSong';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = (nameSong: string) => {
        setSearchTerm(nameSong);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',   }}>
            <Search onSearch={handleSearch} />
            <CardSong searchTerm={searchTerm} />
        </div>
    );
}

export default Home;
