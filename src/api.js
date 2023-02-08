
const API_KEY = 'cd260eb77da9f20abed7a2265fc4daa7edf0cf088431dddac3394dedaa041020';

const tickersHandlers = new Map();
const socket = new WebSocket(`wss://streamer.cryptocompare.com/v2?api_key=${API_KEY}`);

const AGGREGATE_INDEX = '5';

socket.addEventListener('message', (e)=> {

  const {TYPE: type, MESSAGE: message, PARAMETER: parameter,FROMSYMBOL: currency, PRICE: newPrice} = JSON.parse(e.data);
  
  if(message==='INVALID_SUB'){
    const currency = parameter.split('~')[2];
    updateTickerPrice(currency, newPrice)
  }

  if(type !== AGGREGATE_INDEX || newPrice === undefined) {
    return;
  }

  updateTickerPrice(currency, newPrice)
})


function updateTickerPrice(currency, newPrice){
  const handlers = tickersHandlers.get(currency) ?? [];
  handlers.forEach(fn => fn(newPrice)); 
}


function sendToWebSocket(message){
  const stringifiedMessage = JSON.stringify(message);

  //если открыт, шлем собщение
  if(socket.readyState === WebSocket.OPEN){
    socket.send(stringifiedMessage);
    return;
  }
  socket.addEventListener('open', ()=>{
    socket.send(stringifiedMessage)
  }, {once:true});
}

function subscribeToTickerOnWs(ticker){
  sendToWebSocket({
    "action": "SubAdd",
    "subs": [`5~CCCAGG~${ticker}~USD`]
  });
}

function unsubscribeFromTickerOnWs(ticker){
  sendToWebSocket({
    "action": "SubRemove",
    "subs": [`5~CCCAGG~${ticker}~USD`]
  });
}



export const subscribeToTicker = (ticker, cb) =>{
  
  const subscribers = tickersHandlers.get(ticker) || [];
  tickersHandlers.set(ticker, [...subscribers,cb]);
  subscribeToTickerOnWs(ticker);
}

export const unsubscribeFromTicker = (ticker) =>{
  tickersHandlers.delete(ticker);  
  unsubscribeFromTickerOnWs(ticker);
}

