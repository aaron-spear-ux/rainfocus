const Card = (props) => {
  return (
    <div className="main__steps-card">
      <span className="main__steps-card-title">{props.title}</span>
      {props.description}
    </div>
  );
};

export default Card;
