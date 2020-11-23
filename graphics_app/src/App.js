import './App.css';
import Graph from "./Components/Graph/Graph";
import Container from "@material-ui/core/Container";
import BuildGraphBtn from "./Components/build_graph_btn/BuildGraphBtn";
import DateField from "./Components/DateField/DateField";
import React from "react";
import SearchUrl from "./Components/SearchUrl/SearchUrl";

function App() {


  return (
    <div className="App">
      <Container maxWidth="lg" className='main_container'>
          <h1>Статистика URL запросов</h1>
          <Graph />
          <div className='main_row'>
            <SearchUrl />
            <DateField isStartDate={true} />
            <DateField  />
            <BuildGraphBtn />
          </div>
      </Container>
    </div>
  );
}

export default App;
