import {
  FETCH_TRENDING,
  FETCH_TRENDINGMANGA,
  FETCH_RATED,
  FETCH_AIRING,
  FETCH_GENRES,
} from "../actions/types";

const initialState = {
  trending: [],
  trendingmanga: [],
  rated: [],
  airing: [],
  genres: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TRENDING:
      return {
        ...state,
        trending: action.payload,
        status: action.status,
      };
    case FETCH_TRENDINGMANGA:
      return {
        ...state,
        trendingmanga: action.payload,
        status: action.status,
      };

    case FETCH_RATED:
      return {
        ...state,
        rated: action.payload,
        status: action.status,
      };
    case FETCH_AIRING:
      return {
        ...state,
        airing: action.payload,
        status: action.status,
      };
    case FETCH_GENRES:
      return {
        ...state,
        genres: action.payload,
        status: action.status,
      };
    default:
      return state;
  }
}
