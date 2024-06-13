import './App.css';
import * as utils from './utils'
import { useEffect, useState } from 'react';
import DetailCard from "./components/card/DetailCard"
import PartnerList from './components/partnerList/PartnerList';
import Header from './components/header/Header';

function App() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="partner-dash">
      <Header />
      <div className="card-view">
        <PartnerList onCardHover={setHoveredCard} />
        {hoveredCard && <DetailCard {...hoveredCard } />}
      </div>
    </div>
  );
}

export default App;
