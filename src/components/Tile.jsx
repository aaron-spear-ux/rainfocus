const Tile = (props) => {
  return (
    <div className="main__steps-tile">
      <span className="main__steps-tile-title">
        <img src={props.icon} alt="" className="main__steps-tile-icon"></img>
        {props.title}
      </span>
      {props.description}
    </div>
  );
};

export default Tile;
