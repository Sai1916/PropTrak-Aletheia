import { useState } from "react";
import "../styles/Properties.css";
import PropertiesNavbar from "./PropertiesNavbar";
import PropertiesList from "./PropertiesList";

interface PropertiesProps {
  filteredProperties: {
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
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  filterOpen: boolean;
  setFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Properties = ({ filteredProperties, input, setInput, filterOpen, setFilterOpen }: PropertiesProps) => {

    const [grid, setGrid] = useState(true);

    return (
    <div className="properties_container">
      <PropertiesNavbar
        input={input}
        setInput={setInput}
        grid={grid}
        setGrid={setGrid}
        filterOpen={filterOpen}
        setFilterOpen={setFilterOpen}
      />
      <PropertiesList grid={grid} propertyData={filteredProperties} />
    </div>
  );
};

export default Properties;
