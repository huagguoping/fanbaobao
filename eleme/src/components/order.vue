<template>
  <div id="order" v-show="ifshow">
    <div class="orderBox">
        <div class="shopcart-list">
				<div class="list-header">
					<h1 class="title">购物车</h1>
					<span class="empty" @click="fun">清空</span>
				</div>
				<div class="list-content" >
					<ul>
						<li class="food" v-for="item,index in list">
							<span class="name">{{item.name}}</span>
							<div class="price">
								<span><i>￥</i>{{item.price}}</span>
							</div>
							<div class="cartcontrol-wrapper" style="padding-top:0.12rem;">
								 <purchase :food="item" v-on:selectfoodValue="selectfoodValue"></purchase>
							</div>
						</li>
					</ul>
                    <div style="text-align:center;line-height:3.6rem" v-if="this.list.length==0">空空如也</div>
				</div>
			</div>

    </div>
  </div>
</template>
<script>
import purchase from '@/components/purchase'
export default {
     props:{
        list:{
            type:Array
        }
    },
    data(){
        return {
            ifshow:false,
            allprice1:0
        }
    },
    methods:{
        fun(){
            this.list.forEach((food)=>{
					food.count = 0;
                })
            this.list.splice(0,this.list.length);
            this.allprice1=0;
            this.$emit('getallprice', this.allprice1)   
        },
         selectfoodValue(childValue) {
         
        for(var i = 0;i<this.list.length;i++){
          if(this.list[i].count==0){
            this.list.splice(i,1);
          } 
        }
        // this.name = childValue
        // console.log(childValue.name);
        var num = 0;
        for(var i =0 ;i<this.list.length;i++){
           num+=this.list[i].price*this.list[i].count;
        }
          
        this.allprice1= num;
        this.$emit('getallprice', this.allprice1)
         }
    },
    components:{
        purchase
    }
}
</script>

<style scoped>
    #order{
        position:fixed;
        top: 0;
        left: 0;
        right:0;
        bottom: 0.95rem;
        background-color: rgba(7, 17, 27, 0.8);
        
         /* filter: blur(0.1rem); */
    }
    .orderBox{
        position:absolute;
        bottom: 0;
        width: 100%;
        height:5.16rem;
        background: white;
    }
    .shopcart-list{
        height:4.6rem;
        overflow-y: scroll;
        
        }
    .shopcart-list .list-header{
        height:0.8rem;
        padding: 0 0.36rem;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    }
    .shopcart-list .list-header h1{
        float: left;
        font-size: 0.28rem;
        font-weight: 200;
        line-height: 0.8rem;
    }
    .shopcart-list .list-header span{
        float:right;
        font-size: 0.24rem;
        color: rgb(0, 160, 220);
        line-height:0.8rem;
    }
    .list-content{
        padding:0 0.36rem;
    }
    .food{
        position: relative;
        height:0.96rem;
        padding: 0.24rem 0;
    }
    .food .name{
        float: left;
        font-size: 0.28rem;
        color: rgb(7,17,27);
        line-height:0.48rem;
    }
    .food .price{
        position: absolute;
        left: 4.6rem;
        color:rgb(240,20,20);
        font-size: 0.28rem;
        font-weight: 700;
        line-height: 0.48rem;
    }
    .food .price i{
        font-size: 0.2rem;
    }
</style>