import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Title } from "./title";
import { slowImport } from "./helpers";

const Description = lazy(() => slowImport(import("./description"), 1000));

const App = () => {
  const [carEnabled, setCarEnabled] = useState(false);
  const showImage = () => {
    setCarEnabled(!carEnabled);
  };
  return (
    <main>
      <Title />
      <img src={require("./hummer.png")} width="700" height="500" />
      <button onClick={showImage}>Show Info</button>
      <Suspense fallback={<h1>Loading Description...</h1>}>
        {carEnabled && <Description />}
      </Suspense>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
