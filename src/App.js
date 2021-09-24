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
  useEffect(() => {
    console.log("AS", algo, cleanPath, clearWalls);
    if (algo === "") {
      setAllGood(false);
    }
    else {
      setshowModel(false);
      setAllGood(true);
    }
  }, [cleanPath, algo, isWalls, isSetNode, clearWalls, RandomWalls])
  return (
    <React.Fragment>
      <Header AllGood={AllGood} setalgo={setalgo}></Header>
      <Switch>
        <Route path="/theory" render={() => <Theory algo={algo} />} />
        <Route path="/" render={() => <div className="app">
          <SideBar setshowModel={setshowModel} algo={algo} RandomWalls={RandomWalls} setRandomWalls={setRandomWalls} StartVisualize={StartVisualize} setStartVisualize={setStartVisualize} clearWalls={clearWalls} setclearWalls={setclearWalls} setnode={setisSetNode} setWalls={setisWalls} speedVal={speedVal} setspeedVal={setspeedVal} cleanPath={setcleanPath}></SideBar>
          <Body RandomWalls={RandomWalls} setStartVisualize={setStartVisualize} StartVisualize={StartVisualize} setStartNodeCol={setStartNodeCol} StartNodeCol={StartNodeCol} FinishNodeRow={FinishNodeRow} setFinishNodeCol={setFinishNodeCol} FinishNodeCol={FinishNodeCol} setStartNodeRow={setStartNodeRow} StartNodeRow={StartNodeRow} setFinishNodeRow={setFinishNodeRow} Grid={Grid} setGrid={setGrid} cleanPath={cleanPath} clearWalls={clearWalls} isSetNode={isSetNode} algo={algo} speedVal={speedVal} isWalls={isWalls} ></Body>
          <Model show={showModel}>Please Select  ALgorithm First</Model>
        </div>}>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
