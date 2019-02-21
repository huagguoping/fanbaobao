<template>
  <div id="foot">
      <div class="gwcar iconfont icon-gouwuche" @click="ordershow">
          
      </div>
      <div class="totalPrice">
         <i v-if="allprice>=0">￥</i> {{allprice}}
      </div>
      <div class="psfei">
        另需配送费￥4元
      </div>
      <div class="qsjg" v-if="allprice==0">
          ￥20元起送
      </div>
      <div class="qsjg" v-if="allprice>0&&allprice<20">
          还差{{20-allprice}}元起送
      </div>
      <div class="qsjg" v-if="allprice>=20" style="color:white;background:red">
          立即购买
      </div>
      <order ref="orderifshow" :list="selectfoodsdata" v-on:getallprice="getallprice"></order>
  </div>
</template>
<script>
//导入订单组件
import order from '@/components/order'

export default {
    props:{
        selectfoodsdata:{
            type:Array
        },
        allprice:{
            type:Number
        }
    },
    data(){
        return {allprice1:0}
    },
    methods:{
        ordershow(){
            this.$refs.orderifshow.ifshow=!this.$refs.orderifshow.ifshow;
            console.log(this.selectfoodsdata.length);
        },
        getallprice(childValue) {
            this.allprice1=childValue;
           this.$emit('chageprice', this.allprice1)
        
        }
        
    },
    
    components:{
        order
    }
}
</script>

<style scoped>
    #foot{
        position:fixed;
        width:100%;
        left:0;
        bottom: 0;
        height:0.95rem;
        background: #141D27;
        
    }
    .gwcar{
        position: absolute;
        left: 0.24rem;
        bottom: 0.16rem;
        border:0.12rem solid #131D26;
        border-radius: 50%;
        width:1.12rem;
        height:1.12rem;
        line-height: 0.88rem;
        text-align: center;
        font-size: 0.48rem;
        color:rgba(255, 255, 255, 0.4);
        background:#2C353E;
        z-index: 50;
    }
    .totalPrice{
        float: left;
        border-right:1px solid rgba(255, 255, 255, 0.1);
        margin-left: 1.36rem;
        margin-top:0.24rem;
        width:0.95rem;
        height:0.47rem;
        font-size:0.32rem;
        color:rgba(255, 255, 255, 0.4);
        font-weight: 700;
        line-height:0.47rem;
    }
    .psfei{
        float: left;
        width:2.03rem;
        height:0.95rem;
        line-height:0.95rem;
        text-align: center;
        font-size:0.22rem;
        color:rgba(255, 255, 255, 0.4);
    }
    .qsjg{
        float:right;
        width: 2.1rem;
        height:0.95rem;
        line-height: 0.95rem;
        text-align: center;
        font-size:0.24rem;
        color:rgba(255, 255, 255, 0.4);
        font-weight: 700;
        background-color: #2B343B;
    }
</style>
