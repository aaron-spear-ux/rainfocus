const Main = () => {
  return (
    <main className="main">
      <div className="main__heading">
        <div className="main__heading-icon"></div>
        <h3>Attendee</h3>
      </div>
      <div className="main__steps">
        <div className="main__step main__steps-base">
          <div className="main__steps-label">
            <span>Step 1:</span> Base settings.
          </div>
          <div className="main__steps-tile">
            <div className="main__steps-card">
              <span className="main__steps-card-title">General</span>
              Define Attendee types & attributes.
            </div>
            <div className="main__steps-card">
              <span className="main__steps-card-title">Title</span>
              Description that explains the value goes here. Description that
              explains the value goes here.
            </div>
            <div className="main__steps-card">
              <span className="main__steps-card-title">Title</span>
              Description that explains the value goes here. Description that
              explains the value goes here.
            </div>
            <div className="main__steps-card hidden"></div>
          </div>
        </div>
        <div className="main__step">
          <div className="main__steps-label">
            <span>Step 2:</span> Build registration workflows.
          </div>
          <div className="main__steps-build">
            <div className="main__steps-tile">
              <span className="main__steps-tile-title">
                <span className="main__steps-tile-icon"></span>
                Attendee Registration
              </span>
              Start by creating a general registration workflow.
            </div>
            <div className="main__steps-tile">
              <span className="main__steps-tile-title">
                <span className="main__steps-tile-icon"></span>
                Attendee Registration
              </span>
              Start by creating a general registration workflow.
            </div>
            <div className="main__steps-tile">
              <span className="main__steps-tile-title">
                <span className="main__steps-tile-icon"></span>
                Attendee Registration
              </span>
              Start by creating a general registration workflow.
            </div>
            <div className="main__steps-tile main__steps-tile-add">
              <div className="main__steps-tile-center">
                <span className="main__steps-tile-icon"></span>
                Add Registration Workflow
              </div>
            </div>
          </div>
        </div>
        <div className="main__step">
          <div className="main__steps-label">
            <span>Step 3:</span> Design post-registration experiences.
          </div>
          <div className="main__steps-design">
            <div className="main__steps-tile">
              <span className="main__steps-tile-title">
                <span className="main__steps-tile-icon"></span>
                Attendee Portal
              </span>
              Manage the portal that attendees will see after they’ve registered
              for your event.
            </div>
            <div className="main__steps-tile hidden"></div>
            <div className="main__steps-tile hidden"></div>
            <div className="main__steps-tile hidden"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
