<template>
  <div class="container mx-auto flex flex-col items-center bg-gray-100 p-4">
    <div class="container">
      <add-ticker
        :disabled="tickerExist"
        :ticker-exist="tickerExist"
        @add-ticker="add"
        @input-value="inputValidation"
      />
      <template v-if="tickers.length>0">
        <hr class="w-full border-t border-gray-600 my-4"/>  
          <button 
            class="my-4 mx-2 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            @click="page = page-1"
            v-if="page>1"
            >Назад
          </button> 
          <button
              class="my-4 mx-2 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              @click="page = page+1"
              v-if="hasNextPage"
              >Вперед
          </button> 
          <div>Фильтр:<input v-model="filter" class="p-1"/> 
        </div>
        <hr class="w-full border-t border-gray-600 my-4" />
        <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <single-ticker
            v-for="(item, idx) in paginatedTickers"
            :key="idx"
            :item = 'item'
            :idx="idx"
            :tickers="tickers"
            @remove-ticker="remove"
            @click="select(item)"
            :class="{
              'border-4': selected === item
            }"     
          />
        </dl>
        <hr class="w-full border-t border-gray-600 my-4" />
      </template>
      <update-graph
        :barWidth="barWidth"
        :selected="selected"
        v-if="selected" 
        :normalizedGraph="normalizedGraph"
        @calculate-graph-width="calculateMaxGraphElements"
        @close-graph="selected=null"
      />
    </div>
  </div>
</template>

<script>

import {subscribeToTicker, unsubscribeFromTicker} from './api' ;
import AddTicker from './components/AddTicker.vue';
import SingleTicker from './components/SingleTicker.vue'
import UpdateGraph from './components/UpdateGraph.vue'

export default {
  name: 'App',

  components:{
    AddTicker,
    SingleTicker,
    UpdateGraph

  },
  data(){
    return {
      filter:"",
      tickers: [],
      selected: null,
      tickerExist: false,
      graph: [],
      page: 1,
      maxGraphElements:1,
      barWidth:40,
    };
  },


  created(){
    const tickersData = localStorage.getItem('cryptocurrency');
    if(tickersData){
      this.tickers=JSON.parse(tickersData)
      this.tickers.forEach(ticker => {
        subscribeToTicker(ticker.name, (newPrice)=> this.updateTicker(ticker.name, newPrice));
      });
    }
  },

  computed:{

    startIndex(){
      return (this.page-1) * 6;
    },

    endIndex(){
      return this.page * 6;
    },

    filteredTickers(){
      return this.tickers.filter((ticker)=> ticker.name.includes(this.filter.toUpperCase()))
    },

    paginatedTickers(){
      return this.filteredTickers.slice(this.startIndex, this.endIndex);
    },

    hasNextPage(){
      return this.filteredTickers.length > this.endIndex;
    },

    normalizedGraph(){
      const maxValue = Math.max(...this.graph);
      const minValue = Math.min(...this.graph);

      if(maxValue === minValue){
        return this.graph.map(()=> 50) 
      }
      return this.graph.map((price)=> 5 + ((price-minValue) * 95) / (maxValue - minValue))
    },

  },


  methods:{
    updateTicker(tickerName, price){

      if(price === undefined){
        this.tickers.forEach(t=> t.name === tickerName? t.isActive=false : null)
        return;
      }
    
      const filteredTickers = this.tickers.filter(t =>t.name === tickerName)
      
      filteredTickers.forEach(t => {
          if(t === this.selected){
            this.graph.push(price);

            if(this.graph.length > this.maxGraphElements){
              this.graph.splice(0,this.graph.length-this.maxGraphElements);
            }
          } 
          
          t.price = price
        })
    },

    add(ticker){
      if(ticker.trim() == '' || this.tickerExist) return

      this.filter = ""

      const currentTicker = {
        name: ticker.toUpperCase(), 
        price:'-',
        isActive: true,
      };

      this.tickers.push(currentTicker); 

      localStorage.setItem('cryptocurrency', JSON.stringify(this.tickers));

      subscribeToTicker(currentTicker.name, (newPrice)=> this.updateTicker(currentTicker.name, newPrice));
    },

    remove(tickerToRemove){
      this.selected=null
      unsubscribeFromTicker(tickerToRemove.name)
      localStorage.setItem('cryptocurrency', JSON.stringify(this.tickers));
    },

    calculateMaxGraphElements(graphWidth){
   
      this.maxGraphElements = graphWidth / this.barWidth;
    },

    inputValidation(currentTicker){
      for (let i = 0; i < this.tickers.length; i++) {
        const ticker = this.tickers[i];

        if(ticker.name.toLowerCase() === currentTicker.toLowerCase()){
          this.tickerExist = true
          return
        }

        this.tickerExist = false        
      }
    },

    select(ticker){
      if(!ticker.isActive) return;
      this.selected = ticker;
    },
   
  },

  watch:{
   

    paginatedTickers(){
      if(this.paginatedTickers.length === 0 &&  this.page>1){
        this.page -= 1
      }
    },
    
    selected(){
      this.graph = [];
    },

    filter(){
      this.page = 1
    },
  }

}
</script>
