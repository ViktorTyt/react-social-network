import axios from "axios";
import { ActionsTypes } from "./context/AuthActions";
const URL = "http://localhost:8800/api/";

export const BASE_URL = axios.create({
  baseURL: URL,
  withCredentials: true,
});

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: ActionsTypes.LoginStart });

  try {
    const res = await axios.post(`${URL}auth/login`, userCredentials);
    dispatch({ type: ActionsTypes.LoginSuccess, payload: res.data });
  } catch (error) {
    dispatch({ type: ActionsTypes.LoginFailure, payload: error });
  }
};
