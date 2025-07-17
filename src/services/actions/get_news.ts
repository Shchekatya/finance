import { Dispatch } from "redux";
import { GET_NEWS } from "../toolkit/newsSlice";


const checkResponse = (res: Response) => {
  if (res.ok) {
    console.log('все ок')
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`)
}

export function getNews() {
  return function (dispatch: Dispatch) {
    fetch(`https://api.stockdata.org/v1/news/all?symbols=TSLA%2CAMZN%2CMSFT&filter_entities=true&language=en&limit=3&api_token=toR3HRLOctW4VurkdPhZq6ePFWvWAlCv6Pn9Ns0j`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkResponse)
      .then((res) => {
        dispatch(GET_NEWS(res.data));
        console.log(res.data)
      })
      //.then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err)
      });
  }
};