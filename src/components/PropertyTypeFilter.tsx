import '../styles/PropertyTypeFilter.css'

interface PropertyTypeFilterProps {
  propertyTypes: string[];
  propertyTypesArr: string[];
  setPropertyTypesArr: (value: string[]) => void;
}

const PropertyTypeFilter = ({ propertyTypes, propertyTypesArr, setPropertyTypesArr }: PropertyTypeFilterProps) => {
  return (
    <div className="property_type">
        <p className="property_type_title">Property Type</p>
        <div className="property_type_options">
          {propertyTypes.map((type) => (
            <label key={type} className="property_type_option">
              <input
                type="checkbox"
                className="property_type_checkbox"
                checked={propertyTypesArr.includes(type)}
                onChange={() => {
                  if (propertyTypesArr.includes(type)) {
                    setPropertyTypesArr(propertyTypesArr.filter((t) => t !== type));
                  } else {
                    setPropertyTypesArr([...propertyTypesArr, type]);
                  }
                }}
              />
              <p className="property_type_text">{type}</p>
            </label>
          ))}
        </div>
      </div>
  )
}

export default PropertyTypeFilter