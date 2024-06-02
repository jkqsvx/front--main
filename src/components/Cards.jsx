import React, {useState} from "react";
import CardView from "./CardView";

const Cards = ({items}) => {
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

    const sortByAscending = () => {
        const sorted = [...sortedItems].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        setSortedItems(sorted);
    };

    const sortByDescending = () => {
        const sorted = [...sortedItems].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        setSortedItems(sorted);
    };

    return (
        <div style={{
            width: '100%',
            maxWidth: '1400px',
            margin: '0 auto'
        }}>
            <h3 style={{marginBottom: '24px', marginTop: '24px', textAlign: 'center'}}>Экскурсии</h3>
            <div className="bg-body-tertiary"
                 style={{
                     display: 'grid',
                     gridTemplateColumns: 'repeat(3, 1fr)',
                     gap: '24px'
                 }}>
                {sortedItems.map((item, id) => (
                    <CardView
                        key={id}
                        description={item.description}
                        price={item.price}
                        id={item.id}
                        title={item.title}
                        img={item.img}
                    />
                ))}
            </div>
        </div>
    );
};

export default Cards;
