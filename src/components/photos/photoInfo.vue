<template>
    <div class="photot-container">
        <h3 class="title">{{photoInfo.title}}</h3>
        <p class="info">
            <span>发表时间：{{photoInfo.add_time|dateFormate}}</span>
            <span>点击次数：{{photoInfo.click}}</span>
        </p>
        <!--缩略图-->
        <div class="thumb-list">
            <vue-preview :slides="photoList"></vue-preview>
        </div>

        <div class="content" v-html="photoInfo.content" @close="handleClose"></div>

        <!--评论子组件-->
        <comment :commentId="id"></comment>

    </div>
</template>

<script>

import comment from '../publicComponents/comment.vue'
//import mui from '../../../lib/mui/js/mui.js'
//import '../../../lib/mui/js/mui.zoom.js'
//import '../../../lib/mui/js/mui.previewimage.js'

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
            if(data.status === 0) {
                data.message.forEach(item => {
                    item.w = 600;
                    item.h = 400;
                    item.msrc = item.src;
                });
                this.photoList = data.message;
            }
        },
        handleClose () {
        console.log('close event')
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
.thumb-list {
    /deep/ .my-gallery{   //deep深层作用选择器
    display: flex;
    flex-wrap:wrap;//默认换行
    figure{
        width: 30%;
        margin: 5px;
        img{
            width: 100%;
            box-shadow: 0 0 6px #999;
            border-radius: 5px;
            }
        }
    }
}
</style>