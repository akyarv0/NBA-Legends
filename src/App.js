import React,{ useState } from "react";
import "./App.css";
import { data } from "./helper/data";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
// console.log(data);

const App = () => {
  const name = data.map((item) => item.name);
//   const img = data.map((item) => item.img);
//   const statistics = data.map((item) => item.statistics);
  
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <div>
      <Header name={name} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <CardContainer Data={data} searchTerm={searchTerm}/>
    </div>
  );
};
// name={name} img={img} statistics={statistics}
export default App;
