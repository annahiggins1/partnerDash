import "./DetailCard.css";

function DetailCard({ key, name, description, logo, active, onMouseEnter, onMouseLeave }) {
    return (
      <div key={key} className="detail-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
        <div className="detail-header">
            <div className="detail-header-text">
              <h2 className="detail-partner-name">{name}</h2>
              <p className={"detail-status " + (active ? "active" : "inactive")}>{active ? "Active" : "Inactive"}</p>
            </div>
            <img className="detail-logo" src={logo} alt={name + " logo"} />
        </div>
        <p className="detail-description">{description}</p>
      </div>
    );
}

export default DetailCard;