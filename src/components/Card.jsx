const Card = (props) => {
  return (
    <div className="card">
      <span className="tile__title">{props.title}</span>
      {props.description}
    </div>
  );
};

export default Card;
