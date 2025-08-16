import Dropdown from "./Dropdown";
import "../styles/Manager.css";

const Manager = ({
  manager,
  managers,
  setManager,
}: {
  manager: boolean;
  managers: { label: string; value: string }[];
  setManager: (value: string) => void;
}) => {
  return (
    <div className="manager_filter">
      <p className="manager_filter_title">Assigned Manager</p>
      <div className="manager_filter_dropdown">
        <Dropdown
          manager={manager}
          options={managers}
          onChange={(value: string | null) => {
            if (value !== null) {
              setManager(value);
            } else {
              setManager("");
            }
          }}
        />
      </div>
    </div>
  );
};

export default Manager;
