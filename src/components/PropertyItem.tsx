import "../styles/PropertyItem.css";

type Property = {
  imageUrl: string;
  name: string;
  address: string;
  units: number;
  occupancy: number;
  rentCollected: number;
  expenses: number;
};

interface PropertyItemProps {
  property: Property;
}

const PropertyItem = ({ property }: PropertyItemProps) => {

  const formatNumber = (number: number) => {
    return number.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };
  
  return (
    <div className="property_card">
      <img
        src={property.imageUrl}
        alt={property.name}
        className="property_image"
      />
      <div className="property_details">
        <h3 className="property_title">{property.name}</h3>
        <p className="property_location">{property.address}</p>
        <div className="btns">
          <button className="btn manage">Manage</button>
          <button className="btn">Reports</button>
        </div>
        <div className="property_stats">
          <p className="property_data">Units: {property.units}</p>
          <p className="property_data">Occupancy: {property.occupancy}%</p>
          <p className="property_data">
            Rent Collected: ${formatNumber(property.rentCollected)}
          </p>
          <p className="property_data">Expenses: ${formatNumber(property.expenses)}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
