<template>
    <div class="newsInfo-container">
        <h3 class="title">{{newsInfo.title}}</h3>
		<p class="info">
			<span>发表事件:{{newsInfo.add_time|dateFormate}}</span>
			<span>点击{{newsInfo.click}}次</span>
		</p>
		<hr>
		<div class="content" v-html="newsInfo.content"></div>
    </div>
</template>

<script>

export default{
	data(){
		return{
			newsInfo:{}
		};
	},
	created(){
		this.getNewsInfo();
	},
	methods:{
		async getNewsInfo(){
            const {data} = await this.$http.get("api/getnew/" + this.id);
            if(data.status === 0)  this.newsInfo = data.message[0];
        }
	},
    props:['id']
}

</script>

<style lang="scss" scoped>
.newsInfo-container{
	padding: 3px;
	.title{
		color: red;
		font-size: 15px;
		text-align: center;
		margin: 10px 0px;
	}
	.info{
		display: flex;
		justify-content: space-between;
		color: #26a2ff;
	}
	
}
</style>