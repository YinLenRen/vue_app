<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item, index) in carouselChart" :key="index">
                <img :src="item.img" alt="">
            </mt-swipe-item>

        </mt-swipe> 
        <h3>home</h3>
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
</style>