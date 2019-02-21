<template>
  <!-- <div class="purchase">
    <span class="s1"><i>￥</i>{{item1.price}}</span>
    <span class="s2"><i v-if="item1.oldPrice!=''">￥</i>{{item1.oldPrice}}</span>
    <span class="fr iconfont icon-jia" @click="add(item1)"></span>
    <span class="fr">{{item1.count}}</span>
    <span class="fr iconfont icon-iconjian" ></span>
  </div> -->
  <div class="purchase">
    <span class="fr iconfont icon-jia" @click.stop="addCart"></span>
    <span class="fr" v-if="food.count>0">{{food.count}}</span>
    <span class="fr iconfont icon-iconjian" v-if="food.count>0" @click.stop="decreaseCart"></span>
  </div>
</template>
<script>

export default {
    props: {
			food:{
				type: Object,

			}
    },
    data(){
      return{
          selectfood:{}
      }
    },
    methods:{
        addCart(event){ 
				if(!this.food.count){
					this.$set(this.food, 'count', 1);
				}
				else{
					this.food.count ++;
         }
         
          this.selectfood= this.food;
          this.$emit('selectfoodValue', this.selectfood) 
        },
        decreaseCart(event){
				if(this.food.count){
					this.food.count --;
        }
        this.selectfood= this.food;
        this.$emit('selectfoodValue', this.selectfood)
		}
    },
    components:{
        
    }
}
</script>

<style scoped>
  .purchase{
    display: inline;
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
   .purchase span:nth-child(1),.purchase span:nth-child(3){
     display: inline-block;
     width:0.4rem;
     height:0.4rem;
     border-radius: 50%;
     text-align: center;
     line-height: 0.4rem;
     margin-top:-0.1rem;
   }
   .purchase span:nth-child(1){
     background: #00A0DC;
     color:white;
     
   }
   .purchase span:nth-child(3){
     background: white;
     border:0.04rem solid #00A0DC;
     color:#00A0DC;
     line-height:0.3rem;
   }
   .purchase span:nth-child(2){
       display: inline-block;
       width:0.48rem;
       font-size: 0.2rem;
       color: rgb(147, 153, 159);
      text-align: center;
   }
</style>