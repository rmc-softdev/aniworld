import React, { useEffect, useState } from "react";
import "./SingleAnime.css";

const SingleAnime = (props) => {
  const id = props.location.pathname.split("/")[2];
  const [singleAnimeData, setSingleAnimeData] = useState(null);
  //setSingleAnimeData(props.location.state.animeData) we can also use the current state if we need to!
  const renderContent = (props) => {
    if (singleAnimeData) {
      const coverImage = singleAnimeData?.attributes?.coverImage?.original;
      const posterImage = singleAnimeData?.attributes?.posterImage?.original;
      const title =
        singleAnimeData.attributes.titles.en ||
        singleAnimeData.attributes.titles.en_jp;
      const startDate = singleAnimeData.attributes.startDate;
      const averageRating = singleAnimeData.attributes.averageRating;
      const synopsis = singleAnimeData.attributes.synopsis;
      const youtubeId = singleAnimeData.attributes.youtubeVideoId;

      //anime extra details

      const ageRating = singleAnimeData.attributes.ageRatingGuide;
      const numberOfEpisodes = singleAnimeData.attributes.episodeCount;
      const aired = startDate; //need to refactor it to look at just the year;
      const engTitle = singleAnimeData.attributes.titles.en;
      const jpTitle = singleAnimeData.attributes.titles.en_jp;
      const niponTitle = singleAnimeData.attributes.titles.ja_jp;
      const status = singleAnimeData.attributes.status;

      return (
        <div className="global-container">
          <div
            className="background-cover"
            style={{
              backgroundImage: `url(${coverImage || posterImage})`,
            }}
          >
            <div className="background overlay"></div>
          </div>
          <div className="content menu-container">
            <div className="content menu-items">
              <li>Summary</li>
              <li>Episodes</li>
              <li>Characters</li>
              <li>Reactions</li>
              <li>Franchise</li>
            </div>
          </div>
          <div className="content-container">
            <div className="image col">
              <div className="image-container">
                <img src={posterImage} alt={`poster for ${title}`} />
              </div>
              <div className="library info">
                <p>Add to Library</p>
                <div className="library btns">
                  <button className="completed watch">Completed</button>
                  <button className="want watch">Want to Watch</button>
                  <button className="start watch">Started Watching</button>
                </div>
              </div>
            </div>
            <div className="info col">
              <h3 className="anime title">
                {title} <h5 className="start date">{startDate} </h5>
              </h3>
              <h5 class="approval">
                {`${averageRating}% Community Approval`}{" "}
              </h5>
              <p>{synopsis} </p>
            </div>
            <div className="extras col">
              <div className="trailer">
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "300px",
                    height: "70px",
                  }}
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  frameBorder="0"
                />
              </div>
              <div className="extras content">
                <div className="anime details">
                  <h4 className="content slogan">Anime Details</h4>
                  <li>
                    <strong> English</strong> <span> {engTitle} </span>
                  </li>
                  <li>
                    <strong> Japanese</strong> <span> {jpTitle}</span>
                  </li>
                  <li>
                    <strong> Japanese (Romaji)</strong>{" "}
                    <span> {niponTitle}</span>
                  </li>
                  <li>
                    <strong> Age Rating</strong> {ageRating}
                  </li>
                  <li>
                    <strong> Episodes released</strong>{" "}
                    <span> {numberOfEpisodes}</span>
                  </li>
                  <li>
                    <strong> Start date</strong> <span> {aired}</span>
                  </li>
                  <li>
                    <strong> Status</strong> {status}
                  </li>
                </div>
                <div className="characters">
                  <h4 className="content slogan"> Characters</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const [charactersId, setCharactersId] = useState({});
  // const [charactersData, setCharactersData] = useState("");
  useEffect(() => {
    /*
    const charLink = singleAnimeData.relationships.characters.links.self;
    fetch(`https://kitsu.io/api/edge/${charLink}`)
      .then((res) => res.json())
      .then((newData) => {
        setCharactersId(newData.data.slice(0, 8));
      });
      */
    fetch(`https://kitsu.io/api/edge/anime/${id}`)
      .then((res) => res.json())
      .then((newData) => {
        setSingleAnimeData(newData.data);
      });
  }, [id]);
  return <>{renderContent(props)}</>;
};

export default SingleAnime;
