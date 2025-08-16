import "../styles/PropertiesList.css";
import PropertyItem from "./PropertyItem";

interface PropertyProps {
  grid: boolean;
  propertyData: {
    id: string;
    name: string;
    address: string;
    imageUrl: string;
    units: number;
    occupancy: number;
    rentCollected: number;
    expenses: number;
    propertyType: string;
    state: string;
    city: string;
    assignedManager: string;
    openMaintenanceRequests: boolean;
    complianceAlerts: boolean;
  }[];
}

const PropertiesList = ({ grid, propertyData }: PropertyProps) => {
  return (
    <div className={grid ? "grid" : "list"}>
      {propertyData.map((property) => (
        <PropertyItem key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertiesList;
