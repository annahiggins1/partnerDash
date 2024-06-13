import './PartnerList.css';
import Card from '../card/Card';
import * as utils from '../../utils'
import { useState, useEffect } from 'react';
import { supabase } from '../../supabase';
import AddCardForm from './AddCardForm';
import { getPartners, handleAddCard } from '../../utils';

function PartnerList({ onCardHover }) {
    const [partners, setPartners] = useState([]);
    const [isFormVisible, setFormVisible] = useState(false);

    console.log("Cards: ", partners);

    useEffect(() => {
        utils.getPartners(setPartners);
        
    }, []);

    function handleOnSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const partner = Object.fromEntries(formData);
        handleAddCard(partner, setPartners);
        setFormVisible(false);
    }

    const handleDelete = async (id) => {
        try {
            const { error } = await supabase
                .from('partners')
                .delete()
                .eq('id', id);

            if (error) {
                throw error;
            }

            getPartners(setPartners);
        } catch (error) {
            console.error('Error deleting partner:', error);
        }
    };
    return (
        <div className="partners-wrapper">
            <ul className="partner-list">
                {partners && partners.map((card, i) => (
                    <li className="card-list-item" key={i}>
                        <Card
                            id={card.id}
                            name={card.name}
                            description={card.description}
                            logo={card.logo}
                            active={card.active}
                            onMouseEnter={() => onCardHover(card)}
                            onMouseLeave={() => onCardHover(null)}
                            handleDelete={handleDelete}
                        />
                    </li>
                ))}
            </ul>
            <button onClick={() => setFormVisible(!isFormVisible)}>Add New Card</button>
            {isFormVisible &&
                <AddCardForm
                    handleOnSubmit={handleOnSubmit}
                />}
        </div>
    );
}

export default PartnerList;