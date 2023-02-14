import { createRoot } from "react-dom/client";
import Nav from "./Nav";
import Header from "./Header";
import Main from "./Main";

const App = () => {
  return (
    <div className="grid-container">
      <Header />
      <Nav />
      <Main />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
