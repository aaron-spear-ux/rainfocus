import Card from "./components/Card";
import Tile from "./components/Tile";

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
            <Card
              title="General"
              description="Define Attendee types & attributes."
            />
            <Card
              title="Title"
              description="Description that explains the value goes here. Description that
              explains the value goes here."
            />
            <Card
              title="Title"
              description="Description that explains the value goes here. Description that
              explains the value goes here."
            />
            <div className="main__steps-card hidden"></div>
          </div>
        </div>
        <div className="main__step">
          <div className="main__steps-label">
            <span>Step 2:</span> Build registration workflows.
          </div>
          <div className="main__steps-build">
            <Tile
              icon="./img/icon-logic-arrow.svg"
              title="Attendee Registration"
              description="Start by creating a general registration workflow."
            />
            <Tile
              icon="./img/icon-logic-arrow.svg"
              title="Attendee Registration"
              description="Start by creating a general registration workflow."
            />
            <Tile
              icon="./img/icon-logic-arrow.svg"
              title="Attendee Registration"
              description="Start by creating a general registration workflow."
            />
            <div className="main__steps-tile-add">
              <Tile
                icon="./img/icon-add-circle-outline.svg"
                description="Add Registration Workflow"
              />
            </div>
          </div>
        </div>
        <div className="main__step">
          <div className="main__steps-label">
            <span>Step 3:</span> Design post-registration experiences.
          </div>
          <div className="main__steps-design">
            <Tile
              icon="./img/icon-computer.svg"
              title="Attendee Portal"
              description="Manage the portal that attendees will see after they’ve registered
              for your event."
            />
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
