import "../styles/LocationFilter.css";
import Dropdown from "./Dropdown";

interface LocationFilterProps {
  locationData: {
    value: string;
    label: string;
    cities: { value: string; label: string }[];
  }[];
  state: { value: string; label: string, cities: { value: string; label: string }[] } | null;
  setState: (value: { value: string; label: string, cities: { value: string; label: string }[] } | null) => void;
  setCity: (value: { value: string; label: string } | null) => void;
}

const LocationFilter = ({ locationData, state, setState, setCity }: LocationFilterProps) => {
  return (
    <div className="location_filter">
      <p className="location_filter_title">Location</p>
      <div className="state_filter">
        <p className="state_filter_label">State</p>
        <Dropdown options={locationData.map(obj => ({ value: obj.value, label: obj.label, cities: obj.cities }))} onChange={(value: { value: string; label: string, cities: { value: string; label: string }[] } | null) => setState(value)} />
      </div>
      <div className="city_filter">
        <p className="city_filter_label">City</p>
        <Dropdown options={state ? state?.cities.map(city => ({ value: city.value, label: city.label })) : []} onChange={(value: { value: string; label: string } | null) => setCity(value)} />
      </div>
    </div>
  );
};

export default LocationFilter;
