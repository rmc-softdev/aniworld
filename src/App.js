import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AnimeCard from "./components/animeshowcase/AnimeCard";
import AnimeSearch from "./components/AnimeSearch";
import Header from "./components/Header";
import "./App.css";
import SingleAnime from "./components/animeshowcase/SingleAnime";
import InitialContent from "./components/animeshowcase/InitialContent";
import Categories from "./components/Categories";

function App() {
  const [searchedAnime, setSearchedAnime] = useState([]);
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true); // to be used

  const useEffect =
    (() => {
      const fetchSearchedAnime = () => {
        if (term !== "") {
          fetch(
            `https://kitsu.io/api/edge/anime?filter[text]=${term}?&sort=-averageRating`
          )
            .then((res) => res.json())
            .then((newData) => setSearchedAnime(newData.data));
        }
      };

      fetchSearchedAnime();
    },
    [term]);

  return (
    <div className="main container">
      <Router>
        <Header />
        <div className="main content">
          <AnimeSearch searchedText={(text) => setTerm(text)} />
          <Switch>
            <Route path="/" exact component={InitialContent} />
            <Route path="/anime/:id" component={SingleAnime} />
          </Switch>
        </div>
        <Route path="/" exact component={Categories} />
      </Router>
    </div>
  );
}

export default App;
