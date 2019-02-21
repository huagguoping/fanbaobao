<template>
  <div id="app">
    <discount ref="discountisshow" :list="listt"></discount>
    <!-- <header style="url({{list.seller.avatar }})"> -->
    <header class="head" :style="{backgroundImage:`url(${listt.avatar})`}">
        <div class="zd">
            <div class="imgbox"><img :src="listt.avatar" alt=""></div>
            <div class="rightList">
                <div class="div1">
                    <img src="@/assets/img/brand@2x.png" alt="" class="img1">
                    <div>{{listt.name}}</div>
                </div>
                <div class="div2">
                    <span>{{listt.description}}/</span><span>{{listt.deliveryTime}}分钟送达</span>
                </div>
               <div class="div3">
                   <img src="@/assets/img/decrease_1@2x.png" alt="">
                   <span v-if="listt.supports">{{listt.supports[0].description}}</span>
                   <div v-if="listt.supports" @click="discountshow">{{listt.supports.length}}个 &gt;</div>
                </div>   
            </div>
            <div class="zd1">
                <img src="@/assets/img/bulletin@2x.png" alt="">
                <div class="text">{{listt.bulletin}}</div>
                <div class="btn">&gt;</div>
            </div>
        </div>
    </header>
    <section class="nav">
        <ul>
            <router-link :to="{name:'goods'}" tag="li" exact>商品</router-link>
            <router-link :to="{name:'ratings'}" tag="li">评价</router-link>
            <router-link :to="{name:'seller'}" tag="li">商家</router-link>
            
        </ul>
    </section>
  </div>
</template>
<script>
//导入优惠页面组件
import discount from '@/components/discount'
export default {
    props:{
        listt:{
            type:Object
        }
    },
    data(){
        return {
            
        }
    },
    methods:{
       discountshow(){
           this.$refs.discountisshow.ifshow=true;
       } 
    },
    components:{
        discount
   }
}
</script>
<style scoped>
    .fl{
        float: left;
    }
    .head{
        position: relative;
        height:2.68rem;
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;   
    }
    .head>.zd{
        padding:0.48rem 0 0 0.48rem;
        height:2.68rem;
        background: rgba(7, 17, 27, 0.5)
    }
    .head>.zd>.imgbox{
        float: left;
        width:1.28rem;
        height:1.28rem;
    }
    .head>.zd>.imgbox>img{
        border-radius: 0.05rem;
        width:100%;
        height:100%;
    }
    .rightList{
        float: left;
        padding-top: 0.04rem;
        margin-left: 0.32rem;
        width:5.42rem;
        
    }
    .rightList>.div1{
        overflow: hidden;
    }
    .rightList>.div1 .img1{
        float: left;
        vertical-align: top;
        width:0.52rem;
        margin-right:0.12rem;
    }
    .rightList>.div1>div{
        float: left;
        font-size: 0.32rem;
        font-weight: bold;
        color:white;
        line-height: 0.36rem;

    }
    .rightList>.div2{
        margin-top: 0.16rem;
    }
    .rightList>.div2>span,.rightList>.div3>span,.rightList>.div3>div{
        font-size: 0.24rem;
        color: white;
        font-weight: 200;
        line-height: 0.24rem;
    }
    .rightList>.div3{
        margin-top:0.2rem;
    }
    .rightList>.div3>img{
        vertical-align: top;
        width: 0.24rem;
    }
    .rightList>.div3>div{
        float:right;
        margin-top:-0.15rem;
        border-radius: 0.14rem;
        margin-right: 0.24rem;
        text-align: center;
        line-height: 0.48rem;
        width: 0.88rem;
        height: 0.48rem;
        background-color: rgba(7, 17, 27, 0.2);
        
    }
    .head .zd1{
        position:absolute;
        left:0;
        bottom: 0;
        width:100%;
        height:0.56rem;
        line-height: 0.56rem;
        background: rgba(7, 17, 27, 0.2);
        
    }
    .head .zd1 img{
        float: left;
        margin-left: 0.24rem;
        margin-top: 0.16rem;
        margin-right: 0.08rem;
        width:0.45rem;
        /* vertical-align:middle; */
    }
    .head .zd1 .text{
        float: left;
        width:6.24rem;
        font-size: 0.24rem;
        color: white;
        font-weight: 200;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    .head .zd1 .btn{
        float: right;
        margin-right:0.24rem;
        font-size: 0.24rem;
        color: white;
        font-weight: 200;
    }
    .nav{
        height:0.8rem;
        background: #fff;
    }
    .nav>ul{
        list-style: none;
        overflow: hidden;
    }
    .nav>ul>li{
        float: left;
        width:2.5rem;
        height:0.8rem;
        line-height:0.8rem;
        text-align: center;
        font-size: 0.28rem;
        color: rgb(77, 85, 93)
    }
    .nav>ul>.cur{
        color: red;
    }
</style>

