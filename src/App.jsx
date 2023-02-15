import { createRoot } from "react-dom/client";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";

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
