import { Dispatch } from "redux";
import { GET_MARKET, IS_LOADING, IS_ERROR } from "../toolkit/toolkitSlice";


// const checkResponse = (res: Response) => {
//   if (res.ok) {
//     console.log('все ок')
//     return res.json();
//   }
//   return Promise.reject(`Ошибка ${res.status}`)
// }

export function getMarket() {
  return function (dispatch: Dispatch) {
    dispatch(IS_LOADING(true))
    dispatch(IS_ERROR(false))
    fetch(`https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token=toR3HRLOctW4VurkdPhZq6ePFWvWAlCv6Pn9Ns0j`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res: Response) => {
        dispatch(IS_LOADING(false))
        if (res.ok) {
          console.log('все ок')
          return res.json();
        } else {
          dispatch(IS_ERROR(true))
          return Promise.reject(`Ошибка ${res.status}`)
        }
      })
      .then((res) => {
        dispatch(GET_MARKET(res.data));
      })
      //.then((res) => console.log(res.data))
      .catch((err) => {
        dispatch(IS_ERROR(true))
        console.log(err)
      });
  }
};
