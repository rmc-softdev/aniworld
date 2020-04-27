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
import MangaShowCase from "./components/animeshowcase/MangaShowCase";
import ShowCase from "./components/animeshowcase/ShowCase";

function App() {
  //const [term, setTerm] = useState(""); we're temporarily also storing the searched term here
  // const [isLoading, setIsLoading] = useState(true);  to be used in the future

  return (
    <Provider store={store}>
      <Router>
        <div className="main container">
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/category/:genre" exact component={AnimeCategorized} />
          <Route path="/expanded/:title" exact component={ExpandedContent} />
          <Route path="/manga/new" exact component={ShowCase} />
        </div>
        <Route path="/:id" exact component={SingleAnime} />
      </Router>
    </Provider>
  );
}

export default App;
