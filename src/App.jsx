//import React from 'react'
//import One from "./one"
// import Two from "./Two"
// import Three from "./Three"
//import Four from "./Four"
//import Six from "./Six"
// import Five from "./Five"
// import Seven from "./Seven"
//import Eight from "./Eight"
// import Nine from "./Nine"
// import Ten from "./Ten"
// import Eleven from "./Eleven"
//import Twelve from "./Twelve"
//import Thirteen from "./Thirteen"
//import Fourteen from "./Fourteen"
//import Fifteen from "./Fifteen"
//import Sixteen from "./Sixteen"
//import Seventeen from "./Seventeen"
//import Eighteen from "./Eighteen"

import Nineteen from "./Nineteen";
import { ThemeProvider } from "./ThemeContext";
import NineteenComp from "./NineteenComp";

function App() {
  //const items=['Team1','Item1','Team2','Item2','Another Team','Another Item']
  return (
    <div>
      {/* <One/> */}
      {/* <Two/> */}
      {/* <Three/> */}
      {/* <Four/> */}
      {/* <Five/> */}
      {/* <Six/> */}
      {/* <Seven/> */}
      {/* <Eight/> */}
      {/* <Nine/> */}
      {/* <Ten/> */}
      {/* <Eleven/> */}
      {/* <Twelve/> */}
      {/* <Thirteen/> */}
      {/* <Fourteen/> */}
      {/* <Fifteen items={items}/> */}
      {/* <Sixteen items={items} itemsPerPage={2}/> */}
      {/* <Seventeen/> */}
      {/* <Eighteen/> */}
      <ThemeProvider>
        <div className='App'>
        <Nineteen/>
      <NineteenComp/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
