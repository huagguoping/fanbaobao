<template>
  <div id="seller" v-if="datalist.seller">
    <div style="background:white">
      <header>
        <div>{{datalist.seller.name}}</div>
        <div class="score">
          <span>
                <img src="@/assets/img/star36_off@2x.png" alt="" v-if="datalist.seller.score<=0.3">
                <img src="@/assets/img/star48_half@2x.png" alt="" v-if="datalist.seller.score>0.3&&datalist.seller.score<0.8">
                <img src="@/assets/img/star36_on@2x.png" alt="" v-if="datalist.seller.score>=0.8">
            </span>
            <span>
                <img src="@/assets/img/star36_off@2x.png" alt="" v-if="datalist.seller.score<=1.3">
                <img src="@/assets/img/star48_half@2x.png" alt="" v-if="datalist.seller.score>1.3&&datalist.seller.score<1.8">
                <img src="@/assets/img/star36_on@2x.png" alt="" v-if="datalist.seller.score>=1.8">
            </span>
            <span>
                <img src="@/assets/img/star36_off@2x.png" alt="" v-if="datalist.seller.score<=2.3">
                <img src="@/assets/img/star48_half@2x.png" alt="" v-if="datalist.seller.score>2.3&&datalist.seller.score<2.8">
                <img src="@/assets/img/star36_on@2x.png" alt="" v-if="datalist.seller.score>=2.8">
            </span>
            <span>
                <img src="@/assets/img/star36_off@2x.png" alt="" v-if="datalist.seller.score<=3.3">
                <img src="@/assets/img/star48_half@2x.png" alt="" v-if="datalist.seller.score>3.3&&datalist.seller.score<3.8">
                <img src="@/assets/img/star36_on@2x.png" alt="" v-if="datalist.seller.score>=3.8">
            </span>
            <span>
                <img src="@/assets/img/star36_off@2x.png" alt="" v-if="datalist.seller.score<=4.3">
                <img src="@/assets/img/star48_half@2x.png" alt="" v-if="datalist.seller.score>4.3&&datalist.seller.score<4.8">
                <img src="@/assets/img/star36_on@2x.png" alt="" v-if="datalist.seller.score>=4.8">
            </span>
            <span class="s1">(611)</span>
            <span class="s2">月售690单</span>
          </div>
          <div class="sc">
            <div class="iconfont icon-xin-1" ></div>
            <div>已收藏</div>
          </div>
      </header>
    </div>
    <div class="peis">
      <div>
        <div class="div1">起送价</div>
        <div><span class="s1">20</span><span class="s2">元</span></div>
      </div>
      <div>
        <div class="div1">商家配送</div>
        <div><span class="s1">4</span><span class="s2">元</span></div>
      </div>
      <div>
        <div class="div1">平均配送时间</div>
        <div><span class="s1">39</span><span class="s2">元</span></div>
      </div>
    </div>
    <div class="activity">
      <div class="title">公告与活动</div>
      <p class="p1">{{datalist.seller.bulletin}}</p>
      <div class="activityContent" v-for="item,index in datalist.seller.supports">
        <img src="@/assets/img/decrease_1@2x.png" alt="" v-if="item.type==0">
        <img src="@/assets/img/discount_1@2x.png" alt="" v-if="item.type==1">
        <img src="@/assets/img/guarantee_1@2x.png" alt="" v-if="item.type==4">
        <img src="@/assets/img/invoice_3@2x.png" alt="" v-if="item.type==3">
        <img src="@/assets/img/special_1@2x.png" alt="" v-if="item.type==2">
    <span>{{item.description}}</span></div>
    </div>
    <div class="Interior">
      <div class="title">商家实景</div>
      <div class="imgBox">
        <div v-for="item,index in datalist.seller.pics">
          <img :src="item" alt="">
        </div>
      </div>
    </div>
    <div class="introduce">
      <div class="title">商家信息</div>
      <div class="introduceContent" v-for="item,index in datalist.seller.infos">{{item}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    datalist:{
      type:Object
    }
  },
}
</script>

<style scoped>
    #seller{
        border-top:0.02rem solid rgba(7, 17, 27, 0.1);
        height: 8.9rem;
        background: #F3F5F7;
        
        overflow-y: scroll;
        
    }
    header{
      position: relative;
      margin:0 0.36rem;
      padding: 0.36rem 0;
      border-bottom:1px solid rgba(7, 17, 27, 0.1);
    }
    header div:nth-child(1){
      font-size: 0.28rem;
      color:rgba(7, 17, 27);
      line-height:0.28rem;
    }
    header div:nth-child(2){
      margin-top:0.16rem;
    }
    header div:nth-child(2) img{
      width:0.36rem;
      vertical-align:middle;
    }
    header div:nth-child(2) .s1{
      margin-left:0.16rem;
    }
    header div:nth-child(2) .s1，header div:nth-child(2) .s2{
      font-size:0.2rem;
      color: rgb(77, 85, 93);
      vertical-align:middle;
      line-height: 0.36rem;
    }
    header div:nth-child(2) .s2{
      margin-left: 0.24rem;
    }
    header .sc{
      position:absolute;
      right:0.36rem;
      top:0.3rem;
    }
    header .sc div:nth-child(1){
      font-size:0.48rem;
      color: rgb(240, 20, 20);
      line-height: 0.48rem;
    }
    header .sc div:nth-child(2){
      margin-top:0.08rem;
      font-size:0.2rem;
      color: rgb(77, 85, 93);
      line-height: 0.2rem;
    }
    .peis{
      display: flex;
      padding:0.36rem 0;
      background: white;
    }
    .peis div{
      width:2.5rem;
      text-align: center;
    }
    .peis .div1{
      font-size: 0.2rem;
      color:rgb(147, 153, 159);
      line-height:0.2rem;
      margin-bottom: 0.08rem;
    }
    .peis  span{
      color:rgb(7, 17, 27);
      font-weight: 200;
      line-height:0.48rem;
    }
    .peis  .s1{
      font-size: 0.48rem;
    }
    .peis .s2{
      font-size: 0.2rem;
    }
    .activity{
      margin-top:0.3rem;
      background: white;
      padding:0.36rem 0.36rem 0;
      border-bottom: 2px solid rgba(7, 17, 27, 0.1);
    }
    .activity .title,.Interior .title,.introduce .title{
      font-size: 0.28rem;
      color:rgb(7, 17, 27);
      line-height:0.28rem;
    }
    .activity  .p1{
      margin:0  0.24rem 0.32rem;
      margin-top:0.16rem;
      font-size: 0.24rem;
      font-weight: 200;
      color:rgb(240, 20, 20);
      line-height: 0.48rem;
    }
    .activityContent{
      padding: 0.32rem 0.24rem;
      border-top:1px solid rgba(7, 17, 27, 0.1);
    }
    .activityContent img{
      width:0.33rem;
      vertical-align:middle;
    }
    .activityContent span{
      font-size: 0.24rem;
      font-weight: 200;
      line-height:0.32rem;
      color:rgb(7, 17, 27);
      vertical-align:middle;
    }
    .Interior{
      margin-top:0.32rem;
      padding: 0.36rem 0 0.36rem 0.36rem;   
      border-top:1px solid rgba(7, 17, 27, 0.1);
      border-bottom:2px solid rgba(7, 17, 27, 0.1);
      background: white;
      }
      .Interior .imgBox{
        margin-top:0.24rem;
        width:7.14rem;
        overflow-x: scroll;
        display:flex;
      }
      .Interior .imgBox>div{
        margin-right: 0.12rem;
      }
      .Interior .imgBox img{
        width:2.4rem;
        height:1.8rem;
      }
      .introduce{
        margin-top:0.32rem;
        padding: 0.36rem;
        background: white;
      }
      .introduce .title{
        margin-bottom: 0.24rem;
      }
      .introduceContent{
        padding: 0.32rem 0.24rem;
        border-top:1px solid rgba(7, 17, 27, 0.1);
        font-size: 0.24rem;
        font-weight: 200;
        line-height:0.32rem;
        color:rgb(7, 17, 27);
      }
</style>
