import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./components/store";

//components
import Header from "./components/Header";
import "./App.css";
import SingleAnime from "./components/animeshowcase/SingleAnime";
import ShowCaseCategory from "./components/animeshowcase/ShowCaseCategory";
import ViewMoreContent from "./components/animeshowcase/ViewMoreContent";
import Home from "./components/Home";
import ShowCase from "./components/animeshowcase/ShowCase";
import AdvancedSearch from "./components/search mechanism/AdvancedSearch";

function App() {
  //const [term, setTerm] = useState(""); we're temporarily also storing the searched term here
  // const [isLoading, setIsLoading] = useState(true);  to be used in the future

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="main container">
          <Route path="/" exact component={Home} />
          <Route path="/category/:genre" exact component={ShowCaseCategory} />
          <Route path="/expanded/:title" exact component={ViewMoreContent} />
          <Route path="/manga/new" component={ShowCase} />
        </div>
        <Route path="/:slug/:id" exact component={SingleAnime} />
        <Route path="/advanced-search" component={AdvancedSearch} />
      </Router>
    </Provider>
  );
}

export default App;
