import streams from "../apis/streams";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (disptach, getState) => {
  const { userId } = getState().auth;

  const resp = await streams.post("/streams", { ...formValues, userId });

  disptach({ type: CREATE_STREAM, payload: resp.data });

  history.push("/");
};

export const fetchStream = (id) => async (dispatch) => {
  const resp = await streams.get(`/streams/${id}`);

  dispatch({
    type: FETCH_STREAM,
    payload: resp.data,
  });
};

export const fetchStreams = () => async (dispatch) => {
  const resp = await streams.get("./streams");

  dispatch({
    type: FETCH_STREAMS,
    payload: resp.data,
  });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const resp = await streams.put(`streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: resp.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
};
