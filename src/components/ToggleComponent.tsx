import '../styles/ToggleComponent.css';

const ToggleComponent = ({title, toggle, setToggle}: {title: string, toggle: boolean, setToggle: (value: boolean) => void}) => {
  return (
    <div className="toggle_component">
      <p className="toggle_title">{title}</p>
      <div className={`switch ${toggle ? "on" : ""}`} onClick={() => setToggle(!toggle)}>
        <div className="switch_thumb"></div>
      </div>
    </div>
  );
};

export default ToggleComponent;