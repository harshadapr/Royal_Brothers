import React from "react";
import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  SORT_DATA_FAILURE,
  SORT_DATA_REQUEST,
  SORT_DATA_SUCCESS
} from "./actionType";

let initialData = {
  cityData: [],
  isLoading: false,
  isError: false,
};

export default function searchReducer(state = initialData, { type, payload }) {
  switch (type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cityData: payload,
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    // case SORT_DATA_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // case SORT_DATA_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     lowToHigh: payload,
    //   };
    // case SORT_DATA_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: true,
    //   };
    default:
      return state;
  }
}
