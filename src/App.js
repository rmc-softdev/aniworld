import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./components/store";

//components
import AnimeSearch from "./components/AnimeSearch";
import Header from "./components/Header";
import "./App.css";
import SingleAnime from "./components/animeshowcase/SingleAnime";
import InitialContent from "./components/animeshowcase/InitialContent";
import Categories from "./components/Categories";
import AnimeCategorized from "./components/animeshowcase/AnimeCategorized";
import ExpandedInitialContent from "./components/animeshowcase/ExpandedInitialContent";

function App() {
  //const [term, setTerm] = useState(""); we're temporarily also storing the searched term here
  // const [isLoading, setIsLoading] = useState(true);  to be used in the future

  return (
    <Provider store={store}>
      <div className="main container">
        <Router>
          <Header />
          <div className="main content">
            <Route path="/" exact component={AnimeSearch} />
            <Route path="/" exact component={InitialContent} />
            <Route path="/:id" exact component={SingleAnime} />
          </div>
          <Route path="/" exact component={Categories} />
          <Route path="/category/:genre" exact component={AnimeCategorized} />
          <Route
            path="/expanded/:title"
            exact
            component={ExpandedInitialContent}
          />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
