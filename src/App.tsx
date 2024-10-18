import reactLogo from "./assets/react.svg";
import "./App.css";
import { FadeUp } from "./FadeUp";

function App() {

  return (
    <>
      <FadeUp delay={0.6} duration={1.0}>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>React</h1>
      </FadeUp>

      <div className="m-20 space-y-16">
        {Array.from(Array(25).keys()).map((i) => (
          <FadeUp delay={0.25} duration={1} key={i}>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <h1>React+ Framer Motion</h1>
          </FadeUp>
        ))}
      </div>
    </>
  );
}

export default App;
