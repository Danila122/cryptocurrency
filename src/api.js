
const API_KEY = 'cd260eb77da9f20abed7a2265fc4daa7edf0cf088431dddac3394dedaa041020';

export const loadTicker = (tickerName) =>  fetch(`https://min-api.cryptocompare.com/data/price?fsym=${tickerName}&tsyms=USD&&api_key=${API_KEY}`)
  .then((response)=> response.json())
