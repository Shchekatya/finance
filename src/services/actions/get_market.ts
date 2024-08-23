const checkResponse = (res: Response) => {
  if (res.ok) {
    console.log('все ок')
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`)
}


export const getMarket = () => {
  fetch(`https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token=toR3HRLOctW4VurkdPhZq6ePFWvWAlCv6Pn9Ns0j`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(checkResponse)
    .then((res) => console.log(res.data)
    )
    .catch((err) => {
      console.log(err)
    });
};
