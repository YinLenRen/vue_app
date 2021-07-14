<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item, index) in carouselChart" :key="index">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe> 
         <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                            <router-link to="/home/newList">
		                    <img src="../../images/menu1.png"/>
		                    <div class="mui-media-body">新闻资讯</div>
                            </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoList">
		                    <img src="../../images/menu2.png"/>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodsList">
		                   <img src="../../images/menu3.png"/>
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../images/menu4.png"/>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu5.png"/>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../images/menu6.png"/>
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
    </div>  
</template>

<script>
    export default{
        data(){
            return{
                carouselChart:[]
            };
        },
        created(){
            this.getCarouselChart();
        },
        methods:{
            async getCarouselChart(){
                const {data} = await this.$http.get("api/getlunbo");
                if(data.status === 0) this.carouselChart = data.message;
            }
        }

    };
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 180px; 
    .mint-swipe-item{
        img{
            height: 100%;
            width:100%;
        }
        &:nth-child(1){
            background-color: aqua;
        }
        &:nth-child(2){
            background-color:blue;
        }
        &:nth-child(3){
            background-color: chartreuse;
        }
     }
    }
    .mui-grid-view{
        li{
            img{
                height: 60px;
                width: 60px;
            }
        }
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: none;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border-right: none;
        border-bottom: none;
    }
</style>