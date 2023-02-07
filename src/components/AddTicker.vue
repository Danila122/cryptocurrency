<template>
  <section>
    <div class="flex">
      <div class="max-w-xs">
        <label for="wallet" class="block text-sm font-medium text-gray-700">Тикер{{ticker}}</label>
        <div class="mt-1 relative rounded-md shadow-md">
          <input
            v-model="ticker"
            @input="this.$emit('input-value', $event.target.value)"
            @keydown.enter="add"
            type="text"
            name="wallet"
            id="wallet"
            class="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
            placeholder="Например DOGE"
          />
        </div>
        <div class="flex bg-white shadow-md p-1 rounded-md shadow-md flex-wrap">
          <span>
          </span>
        </div>
        <div 
          v-if="tickerExist" 
          class="text-sm text-red-600"
        >Такой тикер уже добавлен
      </div>
      </div>
    </div>
    <add-button
      :disabled="disabled"
      @:click="add"
      type="button"
      class="my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    />
  </section>
</template>

<script>
  import AddButton from './AddButton.vue'

  export default {

    props:{
      'tickerExist':{
        type: Boolean,
        require: false,
        default: false
      },
      
      disabled:{
        type: Boolean,
        require: false,
        default: false
      }
    },

    emits:{
      'add-ticker':{
        type: String
      },
      'input-value':null,
    },

    components:{
      AddButton,
    },

    data(){
      return{
        ticker: "",
      }
    },

    methods:{
      add(){
        if(this.disabled){
          return
        }
        
        this.$emit('add-ticker', this.ticker)
        this.ticker='';
      },
    }
  }

</script>