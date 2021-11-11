import "./App.css";

import Home from "./Components/Home/Home";
// import Makeup from "./Components/Makeup";
import Tips from "./Components/Tips/Tips"
import TheStyleCard from "./Components/Tutorial/TheStyleCard";
import GiveBack from "./Components/GiveBack/GiveBack";

// import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Tutorial from "./Components/Tutorial/Tutorial";

function App() {
  return (
    <Router>
      <div className="App">

      
      
       
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/StyleCard" exact component={TheStyleCard}/>
        <Route path="/Tips" exact component={Tips}/>
        <Route path="/GiveBack" exact component={GiveBack}/>
        <Route path="/stores-by-zip" />
        
        
        </Switch>

        
      </div>
    </Router>





  );
}

export default App;