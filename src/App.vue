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
      <section v-if="selected" class="relative">
        <h3 class="text-lg leading-6 font-medium text-gray-900 my-8">
          {{ selected.name }} - USD
        </h3>
        <div 
          class="flex items-end border-gray-600 border-b border-l h-64"
          ref="graph"
          >
          <div
            v-for="(bar, idx) in normalizedGraph"
            :key="idx"
            :style="{height: `${bar}%`, width:`${barWidth}px`}"
            class="bg-purple-800 border"
          ></div>
         
        </div>
        <button
        @click="selected=null"
          type="button"
          class="absolute top-0 right-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
            version="1.1"
            width="30"
            height="30"
            x="0"
            y="0"
            viewBox="0 0 511.76 511.76"
            style="enable-background:new 0 0 512 512"
            xml:space="preserve"
          >
            <g>
              <path
                d="M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048    c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z     M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165    c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0    c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z"
                fill="#718096"
                data-original="#000000"
              ></path>
            </g>
          </svg>
        </button>
      </section>
    </div>
</div>
</template>

<script>

import {subscribeToTicker, unsubscribeFromTicker} from './api' ;
import AddTicker from './components/AddTicker.vue';
import SingleTicker from './components/SingleTicker.vue'

export default {
  name: 'App',

  components:{
    AddTicker,
    SingleTicker,


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

  mounted(){
    
    window.addEventListener("resize", this.calculateMaxGraphElements); 
    
  },

  beforeUnmount(){
    window.removeEventListener("resize", this.calculateMaxGraphElements);
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
          if(t === this.selected) this.graph.push(price);
          
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
      unsubscribeFromTicker(tickerToRemove.name)
      localStorage.setItem('cryptocurrency', JSON.stringify(this.tickers));
    },

    calculateMaxGraphElements(){
      if(!this.$refs.graph){
        return;
      } 
      this.maxGraphElements = this.$refs.graph.clientWidth / this.barWidth;
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
      this.$nextTick().then(this.calculateMaxGraphElements)
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
