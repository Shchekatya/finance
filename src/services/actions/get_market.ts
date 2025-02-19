import { Dispatch } from "redux";
import { GET_MARKET } from "../toolkit/toolkitSlice";


const checkResponse = (res: Response) => {
  if (res.ok) {
    console.log('все ок')
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`)
}

export function getMarket() {
  return function (dispatch: Dispatch) {
    fetch(`https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token=toR3HRLOctW4VurkdPhZq6ePFWvWAlCv6Pn9Ns0j`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkResponse)
      .then((res) => {
        dispatch(GET_MARKET(res.data));
      })
      // .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err)
      });
  }
};
