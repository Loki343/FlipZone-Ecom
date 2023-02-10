import axios, { AxiosResponse } from "axios";
import { LoginData } from "../../Utiles/types";

export const userLoginAPI = async (payload: LoginData) => {
  try {
    let res: AxiosResponse<{ token: string }> = await axios.post(
      "https://reqres.in/api/login",
      payload
    );
    return res.data.token;
  } catch (error) {
    console.log(error);
  }
};
