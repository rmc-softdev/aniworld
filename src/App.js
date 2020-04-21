import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AnimeCard from "./components/animeshowcase/AnimeCard";
import AnimeSearch from "./components/AnimeSearch";
import Header from "./components/Header";
import "./App.css";
import SingleAnime from "./components/animeshowcase/SingleAnime";
import InitialContent from "./components/animeshowcase/InitialContent";
import Categories from "./components/Categories";

function App() {
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true); // to be used

  return (
    <div className="main container">
      <Router>
        <Header />
        <div className="main content">
          <Route path="/" exact component={AnimeSearch} />
          <Route path="/" exact component={InitialContent} />
          <Route path="/anime/:id" component={SingleAnime} />
        </div>
        <Route path="/" exact component={Categories} />
      </Router>
    </div>
  );
}

export default App;
