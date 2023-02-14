const Header = () => {
  return (
    <header className="header">
      <div className="header__event">
        <div className="header__event-logo"></div>
        <div className="header__event-info">
          <h1>RainFocus Summit</h1>
          <span>December 15th</span>
          <span>Lehi, Utah</span>
        </div>
        <button className="header__btn-edit" type="button">
          Edit event
        </button>
      </div>
      <div className="header__instructions">
        <h2>Event setup guide</h2>
        <p>
          See the available list of modules below. We suggest that you start
          with the attendee module.
        </p>
      </div>
    </header>
  );
};

export default Header;
