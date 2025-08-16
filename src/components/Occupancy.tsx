import { useState } from 'react';
import '../styles/Occupancy.css';

interface OccupancyProps {
  minOccupancy: number;
  maxOccupancy: number;
  setMinOccupancy: (value: number) => void;
  setMaxOccupancy: (value: number) => void;
}

const Occupancy = ({
  minOccupancy,
  maxOccupancy,
  setMinOccupancy,
  setMaxOccupancy,
}: OccupancyProps) => {

  const [min, setMin] = useState(minOccupancy);
  const [max, setMax] = useState(maxOccupancy);

  // Ensure min is always less than max and vice versa
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), max - 1);
    setMin(value);
    setMinOccupancy(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), min + 1);
    setMax(value);
    setMaxOccupancy(value);
  };


  return (
    <div className="occupancy_filter">
      <div className="occupancy_header">
        <p className="occupancy_filter_title">Occupancy</p>
        <p className='occupancy_filter_range'>
          %{min}-{max}
        </p>
      </div>
      <div className="dual_slider">
        <input
          type="range"
          min="0"
          max="100"
          value={min}
          onChange={handleMinChange}
          className="slider"
          id="occupancyMin"
        />
        <input
          type="range"
          min="0"
          max="100"
          value={max}
          onChange={handleMaxChange}
          className="slider"
          id="occupancyMax"
        />
      </div>
    </div>
  );
};

export default Occupancy;
