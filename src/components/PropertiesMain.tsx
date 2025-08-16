import Filter from "./Filter";
import "../styles/PropertiesMain.css";
import Properties from "./Properties";
import { useEffect, useState } from "react";
import propertiesData from "../data/mock.json";

const PropertiesMain = () => {
  const propertyTypes = [
    "Single Family",
    "Apartment Building",
    "HOA",
    "Commercial",
  ];

  //   const cityData = [
  //     { value: "santa_ana", label: "Santa Ana" },
  //     { value: "fullerton", label: "Fullerton" },
  //     { value: "los_angeles", label: "Los Angeles" },
  //     { value: "irvine", label: "Irvine" },
  //     { value: "new_york", label: "New York" },
  //     { value: "austin", label: "Austin" },
  //     { value: "chicago", label: "Chicago" },
  //     { value: "miami", label: "Miami" },
  //     { value: "denver", label: "Denver" },
  //     { value: "seattle", label: "Seattle" },
  //   ];

  //   const stateData = [
  //     { value: "CA", label: "California" },
  //     { value: "NY", label: "New York" },
  //     { value: "TX", label: "Texas" },
  //     { value: "IL", label: "Illinois" },
  //     { value: "FL", label: "Florida" },
  //     { value: "CO", label: "Colorado" },
  //     { value: "WA", label: "Washington" },
  //   ];

  const locationData = [
    {
      value: "CA",
      label: "California",
      cities: [
        { value: "santa_ana", label: "Santa Ana" },
        { value: "fullerton", label: "Fullerton" },
        { value: "los_angeles", label: "Los Angeles" },
        { value: "irvine", label: "Irvine" },
      ],
    },
    {
      value: "NY",
      label: "New York",
      cities: [{ value: "new_york", label: "New York" }],
    },
    {
      value: "TX",
      label: "Texas",
      cities: [{ value: "austin", label: "Austin" }],
    },
    {
      value: "IL",
      label: "Illinois",
      cities: [{ value: "chicago", label: "Chicago" }],
    },
    {
      value: "FL",
      label: "Florida",
      cities: [{ value: "miami", label: "Miami" }],
    },
    {
      value: "CO",
      label: "Colorado",
      cities: [{ value: "denver", label: "Denver" }],
    },
    {
      value: "WA",
      label: "Washington",
      cities: [{ value: "seattle", label: "Seattle" }],
    },
  ];

  const managers = [
    { label: "John Smith", value: "john_smith" },
    { label: "Alice Johnson", value: "alice_johnson" },
    { label: "Bob Williams", value: "bob_williams" },
    { label: "Emily Davis", value: "emily_davis" },
    { label: "David Lee", value: "david_lee" },
    { label: "Sarah Brown", value: "sarah_brown" },
    { label: "Michael Wilson", value: "michael_wilson" },
    { label: "Linda Garcia", value: "linda_garcia" },
    { label: "Richard Rodriguez", value: "richard_rodriguez" },
    { label: "Jennifer Martinez", value: "jennifer_martinez" },
  ];

  const [state, setState] = useState<{
    value: string;
    label: string;
    cities: { value: string; label: string }[];
  } | null>(null);
  const [city, setCity] = useState<{ value: string; label: string } | null>(
    null
  );
  const [manager, setManager] = useState<string | null>(null);
  const [propertyTypesArr, setPropertyTypesArr] = useState<string[]>([]);
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);

  const [minOccupancy, setMinOccupancy] = useState<number>(0);
  const [maxOccupancy, setMaxOccupancy] = useState<number>(100);

  const [minRevenue, setMinRevenue] = useState<number>(0);
  const [maxRevenue, setMaxRevenue] = useState<number>(0);
  const [minExpense, setMinExpense] = useState<number>(0);
  const [maxExpense, setMaxExpense] = useState<number>(0);

  const [maintenance, setMaintenance] = useState<boolean>(false);
  const [compliance, setCompliance] = useState<boolean>(false);

  const [input, setInput] = useState<string>("");

  useEffect(() => {
    let filtered = propertiesData;

    if (state) {
      filtered = filtered.filter((property) => property.state === state.value);
    }

    if (state && city) {
      filtered = filtered.filter(
        (property) =>
          property.state === state.value && property.city === city.label
      );
    }

    if (manager) {
      filtered = filtered.filter(
        (property) => property.assignedManager === manager
      );
    }

    if (minOccupancy) {
      filtered = filtered.filter(
        (property) => property.occupancy >= minOccupancy
      );
    }

    if (maxOccupancy) {
      filtered = filtered.filter(
        (property) => property.occupancy <= maxOccupancy
      );
    }

    if (propertyTypesArr.length > 0) {
      filtered = filtered.filter((property) =>
        propertyTypesArr.includes(property.propertyType)
      );
    }

    if (minRevenue) {
      filtered = filtered.filter(
        (property) => property.rentCollected >= minRevenue
      );
    }

    if (maxRevenue) {
      filtered = filtered.filter(
        (property) => property.rentCollected <= maxRevenue
      );
    }

    if (minExpense) {
      filtered = filtered.filter((property) => property.expenses >= minExpense);
    }

    if (maxExpense) {
      filtered = filtered.filter((property) => property.expenses <= maxExpense);
    }

    if (maintenance) {
      filtered = filtered.filter(
        (property) => property.openMaintenanceRequests === true
      );
    }

    if (compliance) {
      filtered = filtered.filter(
        (property) => property.complianceAlerts === true
      );
    }

    if (input) {
      const searchTerm = input.toLowerCase();
      filtered = filtered.filter((property) => {
        return (
          property.name.toLowerCase().includes(searchTerm) ||
          property.address.toLowerCase().includes(searchTerm) ||
          property.propertyType.toLowerCase().includes(searchTerm) ||
          property.state.toLowerCase().includes(searchTerm) ||
          property.city.toLowerCase().includes(searchTerm) ||
          property.occupancy.toString().includes(searchTerm) ||
          property.rentCollected.toString().includes(searchTerm) ||
          property.expenses.toString().includes(searchTerm) ||
          property.assignedManager.toLowerCase().includes(searchTerm)
        );
      });
    }

    setFilteredProperties(filtered);
  }, [
    input,
    state,
    city,
    manager,
    propertyTypesArr,
    minOccupancy,
    maxOccupancy,
    minRevenue,
    maxRevenue,
    minExpense,
    maxExpense,
    maintenance,
    compliance,
  ]);

  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="properties_main_container">
      {filterOpen && <div className="filter_overlay" onClick={() => setFilterOpen(false)}></div>}
      <div className={`filter_section ${filterOpen ? "open" : ""}`}>
        <Filter
          state={state}
          setState={setState}
          filterOpen={filterOpen}
          setFilterOpen={setFilterOpen}
          setCity={setCity}
          setManager={setManager}
          propertyTypesArr={propertyTypesArr}
          setPropertyTypesArr={setPropertyTypesArr}
          propertyTypes={propertyTypes}
          locationData={locationData}
          managers={managers}
          minOccupancy={minOccupancy}
          maxOccupancy={maxOccupancy}
          setMinOccupancy={setMinOccupancy}
          setMaxOccupancy={setMaxOccupancy}
          minRevenue={minRevenue}
          maxRevenue={maxRevenue}
          setMinRevenue={setMinRevenue}
          setMaxRevenue={setMaxRevenue}
          minExpense={minExpense}
          maxExpense={maxExpense}
          setMinExpense={setMinExpense}
          setMaxExpense={setMaxExpense}
          maintenance={maintenance}
          setMaintenance={setMaintenance}
          compliance={compliance}
          setCompliance={setCompliance}
        />
      </div>
      <div className="separator" />
      <Properties
        filterOpen={filterOpen}
        setFilterOpen={setFilterOpen}
        input={input}
        setInput={setInput}
        filteredProperties={filteredProperties}
      />
    </div>
  );
};

export default PropertiesMain;
