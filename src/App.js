import { useEffect, useState } from 'react';
import './App.css';
import Body from './components/body/body';
import Header from './components/header/header';
import Model from './components/model/model';
import React from 'react';
import SideBar from './components/sidebar/sidebar';
import { Route ,Switch} from 'react-router';
import Theory from './components/theory/theory';

function App() {
  const [speedVal, setspeedVal] = useState(10)  //speed val
  const [cleanPath, setcleanPath] = useState(false)
  const [algo, setalgo] = useState("") //selected algorithm
  const [AllGood, setAllGood] = useState(false)
  const [isWalls, setisWalls] = useState(false)
  const [isSetNode, setisSetNode] = useState(false)
  const [clearWalls, setclearWalls] = useState(false)

  useEffect(() => {
    console.log("AS", algo, cleanPath, clearWalls);
    if (algo === "") {
      setAllGood(false);
    }
    else {
      setAllGood(true);
    }
  }, [cleanPath, algo, isWalls, isSetNode, clearWalls])
  return (
    <React.Fragment>
      <Header AllGood={AllGood} setalgo={setalgo}></Header>
     <Switch>
       <Route path="/theory" render={()=><Theory algo={algo}/>}/>
       <Route path="/" render={()=> <div className="app">
        <SideBar clearWalls={clearWalls} setclearWalls={setclearWalls} setnode={setisSetNode} setWalls={setisWalls} speedVal={speedVal} setspeedVal={setspeedVal} cleanPath={setcleanPath}></SideBar>
        {
          AllGood ? <Body cleanPath={cleanPath} clearWalls={clearWalls} isSetNode={isSetNode} algo={algo} speedVal={speedVal} isWalls={isWalls} ></Body> :
            <Model>Please Select An Algorithm First</Model>
        }
      </div>}>
       </Route>
     </Switch>
    </React.Fragment>
  );
}

export default App;
