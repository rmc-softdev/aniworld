import {
  FETCH_TRENDING,
  FETCH_TRENDINGMANGA,
  FETCH_RATED,
  FETCH_AIRING,
  FETCH_GENRES,
} from "./types"; // By assigning the types constante names we avoid typos issues

// Note that this component is responsable for handling fetching not required by the user;
// for those, I chose to use component level state with hooks instead of Redux;

// This will handle all the fetch associated with the initial content on the showcase
export const fetchInitialContent = () => (dispatch) => {
  fetch("https://kitsu.io/api/edge/trending/anime?limit=20?")
    .then((res) => res.json())
    .then((anime) => {
      dispatch({
        type: FETCH_TRENDING,
        payload: anime.data,
      });
    });

  fetch("https://kitsu.io/api/edge/trending/manga?limit=20?")
    .then((res) => res.json())
    .then((anime) =>
      dispatch({
        type: FETCH_TRENDINGMANGA,
        payload: anime.data,
      })
    );

  fetch(
    "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=5&sort=-averageRating"
  )
    .then((res) => res.json())
    .then((anime) =>
      dispatch({
        type: FETCH_RATED,
        payload: anime.data,
      })
    );

  fetch(
    `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0&sort=-startDate&sort=-averageRating`
  )
    .then((res) => res.json())
    .then((anime) =>
      dispatch({
        type: FETCH_AIRING,
        payload: anime.data,
      })
    );
};

// This one will handle the labeling section, vide the Categories component

export const fetchGenres = () => (dispatch) => {
  fetch(
    "https://kitsu.io/api/edge/genres?page%5Blimit%5D=20&page%5Boffset%5D=0"
  )
    .then((res) => res.json())
    .then((anime) => {
      dispatch({
        type: FETCH_GENRES,
        payload: anime.data,
      });
    });
};
