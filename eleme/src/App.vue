<template>
  <div id="app">
    <heads :listt="headlist"></heads>
    <router-view :datalist="datalist" v-on:selectfoods="selectfoods" />
    <foots :selectfoodsdata="selectfoodsdata" :allprice="allprice"  v-on:chageprice="chageprice"></foots>

  </div>
</template>

<script>
import heads from '@/components/top'
import foots from '@/components/foot'
import '@/assets/font/iconfont.css'
export default {
  name: 'App',
  data(){
    return{
      headlist:{},
      datalist:{},
      selectfoodsdata:[],
      allprice:0
    }
  },
  components:{
    heads,
    foots
  },
  methods:{
    selectfoods(childValue) {
        
        // this.name = childValue
        console.log(childValue);
        this.selectfoodsdata=childValue;
         
        var num = 0;
        for(var i =0 ;i<childValue.length;i++){
           num+=childValue[i].price*childValue[i].count;
        }
          
        this.allprice= num;
        
      },
      chageprice(n) {
        this.allprice= n;
      }
  },
  created(){
        this.axios.get('https://easy-mock.com/mock/5c64c15c19caca77fc9b2fce/example/my-eleme-data')
            .then( (response) => {
                console.log(response.data);
                console.log(response.data.seller);
                this.headlist=response.data.seller;
                this.datalist = response.data;
            })
            .catch(function (error) {
                // handle error
                // console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
}

</script>

<style>

</style>
