import './Card.css';

function Card({ id, name, description, logo, active, onMouseEnter, onMouseLeave, handleDelete }) {
  
  return (
    <div className="card" onMouseEnter={onMouseEnter} onMouseLeave={(() => {})}> 
      <img className="logo" src={logo} alt={name + " logo"} />
      <div className="card-content"> 
      <div className="text-content"> 
        <h2 className="partner-name">{name}</h2>
        <p className={active ? "status active" : "status inactive"}>{active ? "Active" : "Inactive"}</p>
        <p className="description">{description}</p>
      </div>
      <button className="delete-button" onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
}

export default Card;
