import { IoGridOutline } from "react-icons/io5";
import "../styles/PropertiesNavbar.css";
import { FaList } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

const PropertiesNavbar = ({
  grid,
  setGrid,
  input,
  setInput,
  filterOpen,
  setFilterOpen,
}: {
  grid: boolean;
  setGrid: React.Dispatch<React.SetStateAction<boolean>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  filterOpen: boolean;
  setFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="properties_header">
      <div className="properties_header_content">
        <p className="properties_title">Properties</p>
        <div className="properties_view_toggle">
          <IoGridOutline
            size={20}
            className={grid ? "active" : ""}
            onClick={() => setGrid(true)}
          />
          <FaList
            size={20}
            className={!grid ? "active" : ""}
            onClick={() => setGrid(false)}
          />
        </div>
        <div className="properties_filter">
          <button
            className="filter_button"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            Filters
          </button>
        </div>
      </div>
      <div className="properties_search">
        <input
          type="text"
          placeholder="Search"
          className="properties_search_input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <FiSearch color="#282828" />
      </div>
    </div>
  );
};

export default PropertiesNavbar;
