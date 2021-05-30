<template>
    <div>
        <div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<span :class="['mui-control-item', item.id === 0 ? 'mui-active':'']" v-for="item in category" :key="item.id">
						{{item.title}}
					</span>
				</div>
			</div>
		</div>
        <ul class="lazyUI"> 
			<li v-for="item in photoList" :key="item.id">
				<img v-lazy="item.img_url">
				<div class="info">
					<h1 class="info-title">{{item.title}}</h1>
					<div class="info-content">{{item.seo_description}}</div>
				</div>
			</li>
		</ul>
    </div>
</template>

<script>

export default{
    data(){
        return{
			category:[],
			photoList:[]
		};
    }, 
	created(){
		this.getPhotoCategory();
		this.getPhotoByCategory(0);
	},
    methods:{
		async getPhotoCategory(){
			const {data} = await this.$http.get("api/getimgcategory");
			if(data.status === 0) {
				data.message.unshift({title:"全部", id:0});
				this.category = data.message;
			}
		},
		async getPhotoByCategory(id){
			const {data} = await this.$http.get("api/getimages/" + id);
			if(data.status === 0){
				this.photoList = data.message;
			}
		}
	},
	mounted(){
		mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});	
	}
};

</script>

<style lang="scss" scoped>
.mui-slider{
	touch-action: pan-x;
}
.lazyUI{
	margin: 0;
	padding: 10px;
	li{
		background-color: #ccc;
		text-align: center;
		position: relative;
		& + li{
			margin-top: 10px;
		}
		img{
			width: 100%;
			vertical-align: middle;
		}
		img[lazy=loading] {
			width: 40px;
			height: 300px;
			margin: auto;
		}
	}
}
.info{
	position:absolute;
	bottom: 0;
	color: #fff;
	background-color: rgba(0, 0, 0, 0.5);
	max-height: 86px;
	overflow: hidden;
	.info-title{
		font-size: 14px;
	}
	.info-content{
		text-align: left;
		font-size: 13px;
		text-indent: 2em;
	}
}

</style>