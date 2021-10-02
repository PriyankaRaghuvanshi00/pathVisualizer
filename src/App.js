import { useEffect, useState } from 'react';
import './App.css';
import Body from './components/body/body';
import Header from './components/header/header';
import Model from './components/model/model';
import React from 'react';
import SideBar from './components/sidebar/sidebar';
import { Route, Switch } from 'react-router';
import Theory from './components/theory/theory';
import { getInitialGrid } from "./components/body/initialGridFunct";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SplashScreen from './components/splashScreen/splashScreen';


function App() {
  const [speedVal, setspeedVal] = useState(10)  //speed val
  const [cleanPath, setcleanPath] = useState(false)
  const [algo, setalgo] = useState("") //selected algorithm
  const [AllGood, setAllGood] = useState(false)
  const [showModel, setshowModel] = useState(false)
  const [isWalls, setisWalls] = useState(false)
  const [isSetNode, setisSetNode] = useState(false)
  const [clearWalls, setclearWalls] = useState(false)
  const [Grid, setGrid] = useState(getInitialGrid())
  const [StartVisualize, setStartVisualize] = useState(false)
  var init_start_row = 4, init_start_col = 5, init_fin_row = 10, init_fin_col = 10;
  const [StartNodeRow, setStartNodeRow] = useState(init_start_row)
  const [StartNodeCol, setStartNodeCol] = useState(init_start_col)
  const [FinishNodeRow, setFinishNodeRow] = useState(init_fin_row)
  const [FinishNodeCol, setFinishNodeCol] = useState(init_fin_col)
  const [RandomWalls, setRandomWalls] = useState(false)
  const [shortesPathSpeed, setshortesPathSpeed] = useState(10)
  const [showHint, setshowHint] = useState(false)
  const [stopVisualize, setstopVisualize] = useState(false)
  setTimeout(function () {
    document.getElementById("SA").style.display = "none";
    if (document.getElementById("hints"))
      document.getElementById("hints").style.display = "flex";
  }, 2600)


  useEffect(() => {
    console.log("variable", cleanPath, clearWalls, StartVisualize, stopVisualize);

    if (algo === "") {
      setAllGood(false);
    }
    else {
      setshowModel(false);
      setAllGood(true);
    }
  }, [cleanPath, algo, stopVisualize, shortesPathSpeed, isWalls, isSetNode, clearWalls, RandomWalls, StartVisualize])
  return (
    <>
      <SplashScreen />
      <React.Fragment>
        <Header AllGood={AllGood} setalgo={setalgo}></Header>
        <Switch>
          <Route path="/theory" render={() => <Theory algo={algo} />} />
          <Route path="/" render={() => <div className="app">
            <SideBar setalgo={setalgo} setstopVisualize={setstopVisualize} shortesPathSpeed={shortesPathSpeed} setshortesPathSpeed={setshortesPathSpeed} setshowModel={setshowModel} algo={algo} RandomWalls={RandomWalls} setRandomWalls={setRandomWalls} StartVisualize={StartVisualize} setStartVisualize={setStartVisualize} clearWalls={clearWalls} setclearWalls={setclearWalls} setnode={setisSetNode} setWalls={setisWalls} speedVal={speedVal} setspeedVal={setspeedVal} cleanPath={setcleanPath}></SideBar>
            <Body stopVisualize={stopVisualize} shortesPathSpeed={shortesPathSpeed} RandomWalls={RandomWalls} setStartVisualize={setStartVisualize} StartVisualize={StartVisualize} setStartNodeCol={setStartNodeCol} StartNodeCol={StartNodeCol} FinishNodeRow={FinishNodeRow} setFinishNodeCol={setFinishNodeCol} FinishNodeCol={FinishNodeCol} setStartNodeRow={setStartNodeRow} StartNodeRow={StartNodeRow} setFinishNodeRow={setFinishNodeRow} Grid={Grid} setGrid={setGrid} cleanPath={cleanPath} clearWalls={clearWalls} isSetNode={isSetNode} algo={algo} speedVal={speedVal} isWalls={isWalls} ></Body>
            <Model show={showModel}>Please Select  ALgorithm First</Model>
            <div id="hints" className="hints">
              <h1 onClick={() => { setshowHint(!showHint) }}><ExpandMoreIcon /> </h1>
              {showHint ? <div className="hints-info" id="hint-info">
                <div className="hints-text">
                  <h2>Set Walls- </h2>
                  <p>Click on any cell to set it as a wall <div className="hints-block black" style={{ backgroundColor: 'black' }}></div></p>
                </div>
                <div className="hints-text">
                  <h2>Set Nodes- </h2>
                  <p>Click on any cell to set it as a Source/Destination node </p>
                </div>
                <div className="hints-text">
                  <h2>Clear Walls- </h2>
                  <p>Clear all walls </p>
                </div>
                <div className="hints-text">
                  <h2>Clear Path- </h2>
                  <p>Clear everything path </p>
                </div>
                <div className="hints-text">
                  <h2>Refresh - </h2>
                  <p>To Reset everything </p>
                </div>
                <div className="hints-text">
                  <h2>Note - </h2>
                  <p>After Visualization Clear Path First then set nodes or walls </p>
                </div>
                <p><div className="hints-block" style={{ backgroundColor: 'green' }}></div>Source Node</p>
                <p><div className="hints-block" style={{ backgroundColor: 'red' }}></div>Destination Node</p>
                <p><div className="hints-block" style={{ backgroundColor: 'rgb(253, 140, 178)' }}></div> <div className="hints-block" style={{ backgroundColor: 'rgb(157, 157, 248)' }}></div>Visited Nodes</p>
                <p><div className="hints-block" style={{ backgroundColor: 'rgb(255, 230, 0)' }}></div> <div className="hints-block" style={{ backgroundColor: 'rgb(241, 99, 4)' }}></div>ShortesPath Nodes</p>
              </div>
                : null} </div>
          </div>}>
          </Route>
        </Switch>
      </React.Fragment>
    </>
  );
}

export default App;
