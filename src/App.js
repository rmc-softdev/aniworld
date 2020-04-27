import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./components/store";

//components
import Header from "./components/Header";
import "./App.css";
import SingleAnime from "./components/animeshowcase/SingleAnime";
import Categories from "./components/Categories";
import AnimeCategorized from "./components/animeshowcase/AnimeCategorized";
import ExpandedContent from "./components/animeshowcase/ExpandedContent";
import Home from "./components/Home";

function App() {
  //const [term, setTerm] = useState(""); we're temporarily also storing the searched term here
  // const [isLoading, setIsLoading] = useState(true);  to be used in the future

  return (
    <Provider store={store}>
      <div className="main container">
        <Router>
          <Header />
          <div className="main content">
            <Route path="/" exact component={Home} />
            <Route path="/:id" exact component={SingleAnime} />
          </div>
          <Route path="/category/:genre" exact component={AnimeCategorized} />
          <Route path="/expanded/:title" exact component={ExpandedContent} />
          <Route path="/" exact component={Categories} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
