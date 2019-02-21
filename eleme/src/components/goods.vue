<template>
  <div id="goods">
    <!-- 商品菜单 -->
    <div class="nav" id="myid">
      <!-- <div class="title">{{datalist.goods}}</div> -->
      <a class="title" v-for="item,index in datalist.goods" :href="`#a${index}`" :class="{gl:index==num}" @click="gl(index)"><span><img src="@/assets/img/special_1@2x.png" alt="" v-if="index==1"><i>{{item.name}}</i></span></a>

    </div>
    <!-- 商品 -->
    <div class="content">
      <div v-for="item,index in  datalist.goods" :id="`a${index}`">
        <div class="top">{{item.name}}</div>
        <div class="goodsMode"  v-for="item1,index1 in  item.foods">
          <div class="introduce">
            <div class="imgbox"><img :src="item1.image" alt=""></div>
            <div class="content">
              <div class="title">{{item1.name}}</div>
              <div class="name" v-if="item1.description!=''">{{item1.description}}</div>
              <div class="state"><span>月售{{item1.sellCount}}份</span><span class="s2">好评率{{item1.rating}}%</span></div>
              <div class="purchase">
                <span class="s1"><i>￥</i>{{item1.price}}</span>
                <span class="s2"><i v-if="item1.oldPrice!=''">￥</i>{{item1.oldPrice}}</span>
                <purchase :food="item1"  v-on:selectfoodValue="selectfoodValue"></purchase>
              </div> 
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '@/assets/js/jquery-3.3.1.min.js'
import purchase from '@/components/purchase'


export default {
  props:{
    datalist:{
      type:Object
    }
  },
  data(){
   return {
          foods:[],
          num:0
        }
  },
  methods:{
    gl(i){
      this.num=i;
    },
    //  cartDiv(e){ 
		// 		this.$refs.shopcart.cart(e);
    //   },
      selectfoodValue(childValue) {
        
        // this.name = childValue
        // console.log(childValue.name);
        var fl = false;
        for(var i = 0;i<this.foods.length;i++){
          if(this.foods[i].name==childValue.name){
            if(childValue.count==0){
              this.foods.splice(i,1);
            }else{
              this.foods[i]=childValue;
              fl=true;
            }
          }
        }
        if(!fl){
          if(childValue.count!=0){
            this.foods[this.foods.length]=childValue;
          }
        }
        this.$emit('selectfoods', this.foods)
      }
  },
  components:{
    purchase
  },
}

</script>

<style sccoped>
    .fr{
      float:right;
    }
    .gl{
      background: white;
      font-weight: 700;
    }
    #goods{
         border-top:0.02rem solid rgba(7, 17, 27, 0.1);
        height: 9.72rem;
        /* background: cyan; */
    }
    #goods>.nav{
      float: left;
      width:1.6rem;
      height:8.95rem;
      overflow-y: scroll;
      background:#F3F5F7;
    }
    #goods>.nav>.title{
      display:inline-block;
      height:1.08rem;
      text-align: center;
      line-height: 1.08rem;
      font-size: 0.24rem;
      font-weight: 200;
      color:rgb(0,0,0);
      vertical-align:bottom;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      border-left:0.24rem solid rgba(0,0,0,0);
      border-right:0.24rem solid rgba(0,0,0,0);
    }
    #goods>.nav>.title>span{
      display:inline-block;
      width:1.12rem;
      line-height:0.28rem;
      vertical-align:middle;
    }
    #goods>.nav>.title>span>img{
      width:0.25rem;
      height:0.25rem;
      vertical-align:middle;
    }
    #goods>.nav>.title>span>i{
      vertical-align:middle;
    }
    #goods>.content{
      width:5.9rem;
      float:right;
      height:8.95rem;
      overflow-y: scroll;
    }
    .content .top{
      border-left:0.02rem solid rgba(7, 17, 27, 0.1);
      padding-left:0.28rem;
      font-size:0.24rem;
      color: rgb(147, 153, 159);
      height:0.52rem;
      line-height: 0.52rem;
      font-weight: bold;
      background: #F3F5F7;
    }
    .introduce{
      padding: 0.36rem 0 ;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      border-right:0.36rem solid rgba(0,0,0,0);
      border-left:0.36rem solid rgba(0,0,0,0);
      overflow: hidden;
    }
   .introduce>.imgbox{
     float: left;
     width:1.15rem;
     height: 1.15rem;
   }
   .introduce>.imgbox>img{
     width:100%;
     height:100%;
   }
   .introduce>.content{
     float:right;
     width:3.83rem;
     padding-top:0.04rem;
   }
   .introduce>.content>.title{
     font-size: 0.28rem;
     color:rgb(7, 17, 27)
   }
   .introduce>.content>.name{
     padding:0.16rem 0 0;
     font-size: 0.2rem;
     color:rgb(147, 153, 159);
     line-height:0.2rem;
   }
   .state{
     margin-top:0.16rem;
     font-size: 0.2rem;
     color:rgb(147, 153, 159);
     line-height:0.2rem;
   }
   .introduce>.content .s2{
     margin-left: 0.24rem;
     
   }
   .purchase{
     margin-top:0.16rem;
   }
   .purchase>span{
     vertical-align:middle;
   }
   .purchase>.s1{
     color:rgb(240, 20, 20);
     font-weight: 700;
     font-size:0.28rem;
   }
   .purchase>.s1>i{
     font-size: 0.2rem;
     font-weight: normal;
   }
   .purchase>.s2{
     color:rgb(147, 153, 159);
     font-weight: 700;
     font-size:0.2rem;
     text-decoration: line-through;
   }
   /* .purchase span:nth-child(3),.purchase span:nth-child(5){
     display: inline-block;
     width:0.4rem;
     height:0.4rem;
     border-radius: 50%;
     text-align: center;
     line-height: 0.4rem;
   }
   .purchase span:nth-child(3){
     background: #00A0DC;
     color:white;
   }
   .purchase span:nth-child(5){
     background: white;
     border:0.04rem solid #00A0DC;
     color:#00A0DC;
     line-height:0.3rem;
   } */
</style>