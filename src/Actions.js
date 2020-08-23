import {
  CHANGE_SEARCH_FIELD,
  REQUEST_LISTS_UPDATE,
  REQUEST_LISTS_DELETE,
  REQUEST_LISTS_EDIT,
  REQUEST_LISTS_COMPLETED,
} from "./Constants.js";

export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
};

export const setUpdateLists = (text) => {
  return {
    type: REQUEST_LISTS_UPDATE,
    payload: text,
  };
};

export const setCompletedLists = (index) => {
  return {
    type: REQUEST_LISTS_COMPLETED,
    payload: index,
  };
};

export const setCompletedClear = (value) => {
  return { type: REQUEST_LISTS_DELETE};
};

export const setHandleEdit = (edit) => {
  return { type: REQUEST_LISTS_EDIT,
    payload: edit
  };
};