import "../styles/Filter.css";
import LocationFilter from "./LocationFilter";
import Manager from "./Manager";
import Occupancy from "./Occupancy";
import PriceRange from "./PriceRange";
import PropertyTypeFilter from "./PropertyTypeFilter";
import ToggleComponent from "./ToggleComponent";

interface FilterProps {
  setState: (
    value: {
      value: string;
      label: string;
      cities: { value: string; label: string }[];
    } | null
  ) => void;
  setCity: (value: { value: string; label: string } | null) => void;
  setManager: (value: string) => void;
  propertyTypesArr: string[];
  setPropertyTypesArr: (value: string[]) => void;
  propertyTypes: string[];
  state: {
    value: string;
    label: string;
    cities: { value: string; label: string }[];
  } | null;
  locationData: {
    value: string;
    label: string;
    cities: { value: string; label: string }[];
  }[];
  managers: { label: string; value: string }[];
  minOccupancy: number;
  maxOccupancy: number;
  setMinOccupancy: (value: number) => void;
  setMaxOccupancy: (value: number) => void;
  minRevenue: number;
  maxRevenue: number;
  setMinRevenue: (value: number) => void;
  setMaxRevenue: (value: number) => void;
  minExpense: number;
  maxExpense: number;
  setMinExpense: (value: number) => void;
  setMaxExpense: (value: number) => void;
  maintenance: boolean;
  setMaintenance: (value: boolean) => void;
  compliance: boolean;
  setCompliance: (value: boolean) => void;
  filterOpen: boolean;
  setFilterOpen: (value: boolean) => void;
}

const Filter = ({
  setState,
  setCity,
  setManager,
  filterOpen,
  setFilterOpen,
  propertyTypesArr,
  setPropertyTypesArr,
  propertyTypes,
  state,
  locationData,
  managers,
  minOccupancy,
  maxOccupancy,
  setMinOccupancy,
  setMaxOccupancy,
  minRevenue,
  maxRevenue,
  setMinRevenue,
  setMaxRevenue,
  minExpense,
  maxExpense,
  setMinExpense,
  setMaxExpense,
  maintenance,
  setMaintenance,
  compliance,
  setCompliance,
}: FilterProps) => {
  return (
    <div className="filter_container">
      <div className="filter_header">
        <p className="filter_title">Filters</p>
        <button className="filter_toggle_button" onClick={() => setFilterOpen(!filterOpen)}>
          {filterOpen ? "Close Filters" : "Open Filters"}
        </button>
      </div>
      <PropertyTypeFilter
        propertyTypes={propertyTypes}
        propertyTypesArr={propertyTypesArr}
        setPropertyTypesArr={setPropertyTypesArr}
      />
      <LocationFilter
        locationData={locationData}
        state={state}
        setState={setState}
        setCity={setCity}
      />
      <Manager manager managers={managers} setManager={setManager} />
      <Occupancy
        minOccupancy={minOccupancy}
        maxOccupancy={maxOccupancy}
        setMinOccupancy={setMinOccupancy}
        setMaxOccupancy={setMaxOccupancy}
      />
      <PriceRange
        title="Revenue This Month"
        minVal={minRevenue}
        maxVal={maxRevenue}
        setMinVal={setMinRevenue}
        setMaxVal={setMaxRevenue}
      />
      <PriceRange
        title="Expense Threshold"
        minVal={minExpense}
        maxVal={maxExpense}
        setMinVal={setMinExpense}
        setMaxVal={setMaxExpense}
      />
      <ToggleComponent
        title="Open Maintenance Requests"
        toggle={maintenance}
        setToggle={setMaintenance}
      />
      <ToggleComponent
        title="Compliance Alerts"
        toggle={compliance}
        setToggle={setCompliance}
      />
    </div>
  );
};

export default Filter;
