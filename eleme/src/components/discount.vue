<template>
  <div id="discount" v-show="ifshow">
    <header>{{list.name}}</header>
    <div class="score">
        <span>
            <img src="@/assets/img/star36_off@2x.png" alt="" v-if="list.score<=0.3">
            <img src="@/assets/img/star48_half@2x.png" alt="" v-if="list.score>0.3&&list.scre<0.8">
            <img src="@/assets/img/star36_on@2x.png" alt="" v-if="list.score>=0.8">
        </span>
        <span>
            <img src="@/assets/img/star36_off@2x.png" alt="" v-if="list.score<=1.3">
            <img src="@/assets/img/star48_half@2x.png" alt="" v-if="list.score>1.3&&list.scre<1.8">
            <img src="@/assets/img/star36_on@2x.png" alt="" v-if="list.score>=1.8">
        </span>
        <span>
            <img src="@/assets/img/star36_off@2x.png" alt="" v-if="list.score<=2.3">
            <img src="@/assets/img/star48_half@2x.png" alt="" v-if="list.score>2.3&&list.scre<2.8">
            <img src="@/assets/img/star36_on@2x.png" alt="" v-if="list.score>=2.8">
        </span>
        <span>
            <img src="@/assets/img/star36_off@2x.png" alt="" v-if="list.score<=3.3">
            <img src="@/assets/img/star48_half@2x.png" alt="" v-if="list.score>3.3&&list.scre<3.8">
            <img src="@/assets/img/star36_on@2x.png" alt="" v-if="list.score>=3.8">
        </span>
        <span>
            <img src="@/assets/img/star36_off@2x.png" alt="" v-if="list.score<=4.3">
            <img src="@/assets/img/star48_half@2x.png" alt="" v-if="list.score>4.3&&list.scre<4.8">
            <img src="@/assets/img/star36_on@2x.png" alt="" v-if="list.score>=4.8">
        </span>
    </div>
    <div class="title">优惠信息</div>
    <div class="discountContent" v-for="item,index in list.supports">
        <img src="@/assets/img/decrease_1@2x.png" alt="" v-if="item.type==0">
        <img src="@/assets/img/discount_1@2x.png" alt="" v-if="item.type==1">
        <img src="@/assets/img/guarantee_1@2x.png" alt="" v-if="item.type==4">
        <img src="@/assets/img/invoice_3@2x.png" alt="" v-if="item.type==3">
        <img src="@/assets/img/special_1@2x.png" alt="" v-if="item.type==2">
    <span>{{item.description}}</span></div>
    <div class="close" @click="ifshow=!ifshow">×</div>
    <div class="title">商家公告</div>
    <p>{{list.bulletin}}</p>
  </div>
</template>
<script>
export default {
    props:{
        list:{
            type:Object
        }
    },
    data(){
        return {
            ifshow:false
        }
    },
    methods:{
       
    }
}
</script>

<style scoped>
    #discount{
        position:fixed;
        top: 0;
        left: 0;
        right:0;
        bottom: 0;
        background-color: rgba(7, 17, 27, 0.8);
        z-index: 100;
         /* filter: blur(0.1rem); */
    }
    #discount>header{
        margin-top:1.28rem;
        text-align: center;
        line-height: 0.32rem;
        font-size: 0.32rem;
        color: white;
    }
     #discount>.score{
         margin-top:0.32rem;
         height:0.48rem;
         text-align: center;
         color: yellow;
     }
     #discount>.score img{
         width: 0.4rem;
     }
     #discount>.title{
         position: relative;
         margin: 0.56rem 0.72rem;
         font-size: 0.3rem;
         color: white;
         text-align: center;
         
     }
    #discount>.title:before{
        position: absolute;
        content:"";
        width:2.24rem;
        top:0.2rem;
        left:0;
        border-top:1px solid rgba(255, 255, 255, 0.5)
    } 
    #discount>.title:after{
        position: absolute;
        content:"";
        width:2.24rem;
        top:0.2rem;
        right:0;
        border-top:1px solid rgba(255, 255, 255, 0.5)
    }
    .discountContent{
        height:0.32rem;
        font-size: 0.24rem;
        padding-left:1rem;
        margin-top:0.48rem;
        line-height: 0.24rem;
        color:white;
        line-height: 0.24rem;
        color:white;

    }
    .discountContent>img{
        width: 0.32rem;
        vertical-align:middle;
    }
    .discountContent>span{
        vertical-align:middle;
    }
    #discount>p{
        margin-left: 0.96rem;
        margin-top:0.48rem;
        margin-right: 0.96rem;
        font-size: 0.24rem;
        color:white;
    }

    .close{
        position: absolute;
        width:100%;
        bottom: 0.64rem;
        font-size: 0.64rem;
        font-weight: 700;
        text-align: center;
        color:rgba(255, 255, 255, 0.5)
    }
    
</style>