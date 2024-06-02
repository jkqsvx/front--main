import React, { useState } from "react";
import HotelsView from './HotelsView';
import Header from "./Header";
import Footer from "./Footer";

const Hotels = ({ items }) => {
    const [sortedItems, setSortedItems] = useState([...items]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = items.filter(item =>
            item.destination.toLowerCase().includes(term) ||
            item.price.toLowerCase().includes(term)
        );
        setSortedItems(filtered);
    };

    return (
        <div style={{
            width: '100%',
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: "column"
        }}>
            <Header />
            <h3 style={{ marginBottom: '24px', marginTop: '24px', textAlign: 'center' }}>Отели</h3>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
                marginTop: 24,
                marginBottom: 50
            }}>
                {sortedItems.map((item, id) => (
                    <HotelsView
                        key={id}
                        description={item.description}
                        price={item.price}
                        id={item.id}
                        img={item.img}
                        title={item.name}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Hotels;
