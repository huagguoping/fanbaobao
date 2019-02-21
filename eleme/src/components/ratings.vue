<template>
  <div id="ratings">
    <header v-if="datalist.seller">
      <div class="contentLeft">
        <div>{{datalist.seller.score}}</div>
        <div>综合评分</div>
        <div>高于周边商家{{datalist.seller.rankRate}}%</div>
      </div>
      <div class="contentRight">
        <div>
        <span class="s2">服务态度</span>
        <span class="s1">
            <img src="@/assets/img/star36_off@2x.png" alt="" v-if="datalist.seller.serviceScore<=0.3">
            <img src="@/assets/img/star48_half@2x.png" alt="" v-if="datalist.seller.serviceScore>0.3&&datalist.seller.serviceScore<0.8">
            <img src="@/assets/img/star36_on@2x.png" alt="" v-if="datalist.seller.serviceScore>=0.8">
        </span>
        <span>
            <img src="@/assets/img/star36_off@2x.png" alt="" v-if="datalist.seller.serviceScore<=1.3">
            <img src="@/assets/img/star48_half@2x.png" alt="" v-if="datalist.seller.serviceScore>1.3&&datalist.seller.serviceScore<1.8">
            <img src="@/assets/img/star36_on@2x.png" alt="" v-if="datalist.seller.serviceScore>=1.8">
        </span>
        <span>
            <img src="@/assets/img/star36_off@2x.png" alt="" v-if="datalist.seller.serviceScore<=2.3">
            <img src="@/assets/img/star48_half@2x.png" alt="" v-if="datalist.seller.serviceScore>2.3&&datalist.seller.serviceScore<2.8">
            <img src="@/assets/img/star36_on@2x.png" alt="" v-if="datalist.seller.serviceScore>=2.8">
        </span>
        <span>
            <img src="@/assets/img/star36_off@2x.png" alt="" v-if="datalist.seller.serviceScore<=3.3">
            <img src="@/assets/img/star48_half@2x.png" alt="" v-if="datalist.seller.serviceScore>3.3&&datalist.seller.serviceScore<3.8">
            <img src="@/assets/img/star36_on@2x.png" alt="" v-if="datalist.seller.serviceScore>=3.8">
        </span>
        <span>
            <img src="@/assets/img/star36_off@2x.png" alt="" v-if="datalist.seller.serviceScore<=4.3">
            <img src="@/assets/img/star48_half@2x.png" alt="" v-if="datalist.seller.serviceScore>4.3&&datalist.seller.serviceScore<4.8">
            <img src="@/assets/img/star36_on@2x.png" alt="" v-if="datalist.seller.serviceScore>=4.8">
        </span>
        <span class="s3">{{datalist.seller.serviceScore}}</span>
        </div>
        <div>
            <span>口味评价</span>
            <span class="s1">
            <img src="@/assets/img/star36_off@2x.png" alt="" v-if="datalist.seller.foodScore<=0.3">
            <img src="@/assets/img/star48_half@2x.png" alt="" v-if="datalist.seller.foodScore>0.3&&datalist.seller.foodScore<0.8">
            <img src="@/assets/img/star36_on@2x.png" alt="" v-if="datalist.seller.foodScore>=0.8">
        </span>
        <span>
            <img src="@/assets/img/star36_off@2x.png" alt="" v-if="datalist.seller.foodScore<=1.3">
            <img src="@/assets/img/star48_half@2x.png" alt="" v-if="datalist.seller.foodScore>1.3&&datalist.seller.foodScore<1.8">
            <img src="@/assets/img/star36_on@2x.png" alt="" v-if="datalist.seller.foodScore>=1.8">
        </span>
        <span>
            <img src="@/assets/img/star36_off@2x.png" alt="" v-if="datalist.seller.foodScore<=2.3">
            <img src="@/assets/img/star48_half@2x.png" alt="" v-if="datalist.seller.foodScore>2.3&&datalist.seller.foodScore<2.8">
            <img src="@/assets/img/star36_on@2x.png" alt="" v-if="datalist.seller.foodScore>=2.8">
        </span>
        <span>
            <img src="@/assets/img/star36_off@2x.png" alt="" v-if="datalist.seller.foodScore<=3.3">
            <img src="@/assets/img/star48_half@2x.png" alt="" v-if="datalist.seller.foodScore>3.3&&datalist.seller.foodScore<3.8">
            <img src="@/assets/img/star36_on@2x.png" alt="" v-if="datalist.seller.foodScore>=3.8">
        </span>
        <span>
            <img src="@/assets/img/star36_off@2x.png" alt="" v-if="datalist.seller.foodScore<=4.3">
            <img src="@/assets/img/star48_half@2x.png" alt="" v-if="datalist.seller.foodScore>4.3&&datalist.seller.foodScore<4.8">
            <img src="@/assets/img/star36_on@2x.png" alt="" v-if="datalist.seller.foodScore>=4.8">
        </span>
        <span class="s3">{{datalist.seller.foodScore}}</span>
        </div>
        <div>送达时间 <span class="s1" style="color:rgb(147, 153, 159)">{{datalist.seller.deliveryTime}}分钟</span></div>
      </div>
    </header>
    <section class="label">
      <div>全部</div>
      <div>满意</div>
      <div>不满意</div>
    </section>
    <section class="radioBox">
      <div class="radio">
        <input type="checkbox" name=""><span>只看有内容的评价</span>
      </div>
    </section>
    <section class="content1" v-for="item,index in datalist.ratings">
      <div>
        <div class="imgBox">
          <img :src="item.avatar" alt="">
        </div>
        <div class="content1Right">
          <div class="name">{{item.username}}<span class="fr">{{item.rateTime | formatDate}}</span></div>
          <div class="score">
            <span class="s1">
            <img src="@/assets/img/star36_off@2x.png" alt="" v-if="item.score<=0.3">
            <img src="@/assets/img/star48_half@2x.png" alt="" v-if="item.score>0.3&&item.score<0.8">
            <img src="@/assets/img/star36_on@2x.png" alt="" v-if="item.score>=0.8">
        </span>
        <span>
            <img src="@/assets/img/star36_off@2x.png" alt="" v-if="item.score<=1.3">
            <img src="@/assets/img/star48_half@2x.png" alt="" v-if="item.score>1.3&&item.score<1.8">
            <img src="@/assets/img/star36_on@2x.png" alt="" v-if="item.score>=1.8">
        </span>
        <span>
            <img src="@/assets/img/star36_off@2x.png" alt="" v-if="item.score<=2.3">
            <img src="@/assets/img/star48_half@2x.png" alt="" v-if="item.score>2.3&&item.score<2.8">
            <img src="@/assets/img/star36_on@2x.png" alt="" v-if="item.score>=2.8">
        </span>
        <span>
            <img src="@/assets/img/star36_off@2x.png" alt="" v-if="item.score<=3.3">
            <img src="@/assets/img/star48_half@2x.png" alt="" v-if="item.score>3.3&&item.score<3.8">
            <img src="@/assets/img/star36_on@2x.png" alt="" v-if="item.score>=3.8">
        </span>
        <span>
            <img src="@/assets/img/star36_off@2x.png" alt="" v-if="item.score<=4.3">
            <img src="@/assets/img/star48_half@2x.png" alt="" v-if="item.score>4.3&&item.score<4.8">
            <img src="@/assets/img/star36_on@2x.png" alt="" v-if="item.score>=4.8">
        </span>
          </div>
          <div>{{item.text}}</div>
          <div>
            <span class="s1">1</span>
            <span v-for="item1,index1 in item.recommend" v-if="index1<3">{{item1}}</span>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props:{
    datalist:{
      type:Object
    }
  }, 
  filters: {
         formatDate: function (value) {
        let date = new Date(value);
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
      }


    }

}
</script>

<style scoped>
    .fr{
      float: right;
    }
    #ratings{
         border-top:0.02rem solid rgba(7, 17, 27, 0.1);
        height: 8.90rem;
        padding-bottom: 0.5rem;
        overflow-y: scroll;
        background: white;
    }
    header{
      padding:0.36rem 0;
      display:flex;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    }
    header .contentLeft{
      /* float: left; */
      width:2.75rem;
      border-right:1px solid rgba(7, 17, 27, 0.1);
    }
    header .contentLeft div:nth-child(1){
      text-align: center;
      font-size:0.48rem;
      color:rgb(255, 153, 0);
      line-height: 0.56rem;
    }
    header .contentLeft div:nth-child(2){
      margin-top:0.12rem;
      text-align: center;
      font-size:0.24rem;
      color:rgb(7, 17, 27);
      line-height: 0.24rem;
    }
    header .contentLeft div:nth-child(3){
      margin-top:0.16rem;
      text-align: center;
      font-size:0.2rem;
      color:rgb(147, 153, 159);
      line-height: 0.2rem;
    }
    header .contentRight{
      padding:0 0.48rem;
      width:4.75rem;
      height:1rem;
    }
     header .contentRight div:nth-child(1),header .contentRight div:nth-child(2),header .contentRight div:nth-child(3){
       font-size: 0.24rem;
       color:rgb(7, 17, 27);
       line-height: 0.36rem;
     }
     header .contentRight span{
       display:inline-block;
       vertical-align:top;
     }
     header .contentRight .s1{
       margin-left:0.48rem;
     }
      
     header .contentRight img{
       width: 0.30rem;
     }
     header .contentRight .s3{
       margin-left:0.1rem;
       font-size:0.24rem;
       color: rgb(255, 153, 0);
     }
     .label{
       margin:0 0.3rem;
       padding:0.36rem 0;
       border-bottom: 1px solid rgba(7, 17, 27, 0.1);
       display: flex;
     }
     .label>div{
       width:1.2rem;
       height:0.65rem;
       text-align: center;
       line-height:0.65rem;
       margin-right:0.15rem;
       font-size: 0.28rem;
       color:#000;
     }
     .label div:nth-child(1){
       background: #00A0DC;
     }
     .label div:nth-child(2){
       background: #CCECF7;
     }
     .label div:nth-child(3){
       background: #EAEBED;
     }
     .radio input{
       vertical-align:middle;
     }
     .radio span{
       display: inline-block;
       font-size: 0.24rem;
       color:#8B9096;
       vertical-align:middle;
     }
     .radioBox{
       padding: 0.36rem 0.3rem;
       border-bottom: 1px solid rgba(7, 17, 27, 0.1);
     }
     .content1{
       padding:0.36rem 0.36rem 0;
     }
     .content1>div{
        padding-bottom: 0.36rem;
       border-bottom: 1px solid rgba(7, 17, 27, 0.1);
       display:flex;
     }
     .content1 .imgBox{
       width:0.62rem;
       height:0.56rem;
     }
     .content1 .imgBox img{
       width:100%;
       height:100%;
     }
     .content1 .content1Right{
       width:6.78rem;
       padding-left:0.24rem;
     }
     .content1 .content1Right .score img{
       width:0.2rem;
     }
     .content1Right div:nth-child(1){
       font-size: 0.2rem;
       color:rgb(7, 17, 27);
       line-height: 0.24rem;
     }
     .content1Right div:nth-child(1) span{
       color:rgb(147, 153, 159);
       font-weight: 200;
     }
     .content1Right div:nth-child(2){
       margin-top:0.08rem;
     }
     .content1Right div:nth-child(3){
       margin-top:0.12rem;
     }
     .content1Right div:nth-child(4){
       margin-top:0.16rem;
     }
     .content1Right div:nth-child(4) span{
       border:1px solid rgba(7, 17, 27, 0.1);
       padding: 0 0.12rem;
       margin-right:0.16rem;
     }
      .content1Right div:nth-child(4)  .s1{
        border:none;
      }
    </style>