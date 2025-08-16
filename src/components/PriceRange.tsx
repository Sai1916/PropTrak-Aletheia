import PriceInput from "./PriceInput";
import "../styles/PriceRange.css";
const PriceRange = ({ title, minVal, maxVal, setMinVal, setMaxVal }: { title: string, minVal: number, maxVal: number, setMinVal: (val: number) => void, setMaxVal: (val: number) => void }) => {

  return (
    <div className="price_range">
      <label className="price_range_label">{title}</label>
      <div className="price_range_inputs">
        <PriceInput
          value={minVal}
          onChange={setMinVal}
        />
        <span className="middle_sign" />
        <PriceInput
          value={maxVal}
          onChange={setMaxVal}
        />
      </div>
    </div>
  );
};

export default PriceRange;
