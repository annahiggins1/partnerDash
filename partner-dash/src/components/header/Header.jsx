import './Header.css'
import { useState, useEffect } from 'react';

function Header() {
    const [numItems, setNumItems] = useState(0);

    useEffect(() => {
        const handleNumItemsEvent = (event) => {
            setNumItems(event.detail.numItems);
        };

        window.addEventListener('numItems', handleNumItemsEvent);

        return () => {
            window.removeEventListener('numItems', handleNumItemsEvent);
        };
    }, []);

    return <div className="header">
        <h1 className="partner-text">Partners</h1>
        <p className="number-items">{numItems} items</p>
    </div>;
}

export default Header;