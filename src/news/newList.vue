<template>
    <div newList-container>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/newList/' + item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
								<span>{{item.add_time|dateFormate}}</span>
								<span>{{item.click}}</span>
							</p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>

<script>

export default{
	data(){
		return{
			newsList:[]
		};
	},
	created(){
		this.getNewList();
	},
	methods:{
		async getNewList(){
			const {data} = await this.$http.get("api/getnewslist");
			if(data.status === 0) this.newsList = data.message;
		}
	}
}

</script>

<style lang="scss" scoped>
.newList-container{
	padding: 3px;
}
h1{
	font-size: 15px;
}
.mui-ellipsis{
	color: #26a2ff;
	display: flex;
	font-size: 12px;
	justify-content: space-between;
}
</style>