/* eslint-disable @typescript-eslint/no-explicit-any */
import "../styles/Dropdown.css";
const Dropdown = ({
  options,
  onChange,
  manager,
}: {
  options: any[];
  onChange: (value: any) => void;
  manager?: boolean;
}) => {
  return (
    <select
      className="filter_dropdown"
      onChange={(e) => {
        const selectedValue = e.target.value;
        onChange(
          selectedValue === ""
            ? null
            : !manager
            ? JSON.parse(selectedValue)
            : selectedValue
        );
      }}
    >
      <option value=""></option>
      {options.map((option: any) => (
        <option
          key={option.value}
          value={manager ? option.label : JSON.stringify(option)}
          className="filter_option"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
