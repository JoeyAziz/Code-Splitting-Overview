import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Title } from "./title";
import { slowImport } from "./helpers";
// import Description from './description'
import Loadable from 'react-loadable';

const Loading = ()=> 
  <h1>
    Loading..
  </h1>


const Description = Loadable({
  loader: ()=> slowImport( import('./description'), 1000) ,
  loading: Loading
})


const App = () => {
  const [carInfo, setCarInfo] = useState(false);

  const showInfo = () => {
    setCarInfo(!carInfo);
  };

  return (
      <main>
        <Title />
        <img src={require("./hummer.png")} width="700" height="500" />

        <button onClick={showInfo}> Show Info </button>
        {
          carInfo &&
          <Description />
        
        }
      </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
