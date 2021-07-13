<template>
    <div class="photot-container">
        <h3 class="title">{{photoInfo.title}}</h3>
        <p class="info">
            <span>发表时间：{{photoInfo.add_time|dateFormate}}</span>
            <span>点击次数：{{photoInfo.click}}</span>
        </p>
        <!--缩略图-->
        <div class="thumb-list">
            <img :src="item.src" v-for="(item, i) in photoList" :key= "i">
        </div>


        <div class="content" v-html="photoInfo.content"></div>

        <!--评论子组件-->
        <comment :commentId="id"></comment>

    </div>
</template>

<script>

import comment from '../publicComponents/comment.vue'

export default{
    data(){
        return{
            photoInfo:[],
            photoList:[]//缩略图
        };
    },
    created(){
        this.getPhotoInfo();
        this.getThumbImag();
    },
    methods:{
        async getPhotoInfo(){
            const {data} = await this.$http.get("api/getimageInfo/" + this.id);
            if(data.status === 0) this.photoInfo = data.message[0];
        },
        async getThumbImag(){
            //缩略图数据
            const {data} = await this.$http.get("api/getthumimages/" + this.id);
            if(data.status === 0) this.photoList = data.message;
         //   console.log(this.photList);
        }
    },
    props:["id"],
    components:{
        comment
    }
}
</script>

<style lang="scss" scoped>
.photot-container{
    padding: 3px;
}
.title{
    font-size: 15px;
    text-align: center;
    margin: 10px 0px;
    color: #26a2ff;
}
.info{
        font-size: 13px;
        display: flex;
        justify-content: space-between;
}
.content{
    font-size: 13px;
    line-height: 30px;
    text-indent: 2em;
}
.thumb-list{
    img{
        width:100px;
    }
}
</style>