const Tile = (props) => {
  return (
    <div className="tile">
      <span className="tile__title">
        <img src={props.icon} alt="" className="tile__icon"></img>
        {props.title}
      </span>
      {props.description}
    </div>
  );
};

export default Tile;
