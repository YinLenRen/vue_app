<template>
    <div>
        <h4>发表评论~~~~{{commentId}}</h4>
        <hr>
        <textarea placeholder="请输入要BB的内容(不超过120字)" maxlength="120" v-model="message"></textarea>
        <mt-button type="primary" size="large" @click="sendMessage">发表评论</mt-button>

        <div class="cmt-list" >
            <div class="cmt-item" v-for="(item, index) in commentList" :key="index">
                <div class="cmt-item-title">第{{index + 1}}楼&nbsp;用户：{{item.user_name}}&nbsp;发表时间：{{item.add_time|dateFormate}}</div>
                <div class="cmt-item-body">{{item.content}}</div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="loadMore">加载更多</mt-button>
    </div>
    
</template>

<script>

import {Toast} from 'mint-ui'

export default{
    data(){
        return{
            page:1,
            commentList:[],
            message:''
        };
    },
    created(){
        this.getCommentsOfPage();
    },
    methods:{
        async getCommentsOfPage(){
            const {data} = await this.$http.get("api/getcomments/" + this.commentId + "?pageindex=" + this.page);
            if(data.status === 0) this.commentList = this.commentList.concat(data.message);
        },
        loadMore(){
            this.page++;
            this.getCommentsOfPage();
        },
        sendMessage(){
            //trim()用于删除头尾字符串的空白字符
           if(this.message.trim().length <= 0) return Toast("评论内容不能为空！");
           //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
           this.commentList.unshift({
               user_name:'匿名用户',
               add_time:new Date(),
               content:this.message.trim()
           });

        }
    },
    props:["commentId"]
}

</script>

<style lang="scss" scoped>
textarea{
    font-size: 14px;
    margin: 0;
}
.cmt-list{
    margin-top: 4px;
    .cmt-item{
        line-height: 30px;
        .cmt-item-title{
            font-size: 14px;
            background-color: #ddd;
        }
        .cmt-item-body{
            font-size: 13px;
            text-indent: 2em; //缩进
        }
    }
}
</style>