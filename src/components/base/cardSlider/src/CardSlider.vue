<template>
<div class="card-slider">

	<!-- slide control button -->
	<div 
		@click="slide('prev')"
		class="control prev">
		<button class="btn-icon">
			<fa-icon :icon="['fas', 'angle-left']" size="lg" mask="circle" fixd-width></fa-icon>
		</button>
	</div>
	<div 
		@click="slide('next')"
		class="control next">
		<button class="btn-icon">
			<fa-icon :icon="['fas', 'angle-right']" size="lg" mask="circle" fixd-width></fa-icon>
		</button>
	</div>

	<!-- slider content-->
	<div class="slider-content" :style="{overflowX: isSliding ? 'hidden' : ''}">
		<!-- slide-items -->
		<div v-for="(item, index) in items" 
				 :style="{ 
						width: itemWidth + '%', 
						left: slidedLength + '%', 
						visibility: isSliding || itemsVisible[index] ? 'visible' : 'hidden',
				 }"
				 class="slide-item">
			<slot :item="item"></slot>
		</div>
	</div>

</div>
</template>

<script>
export default {
	name: "cardSlider",
	props: {
		items: {
			type: Array,
			required: true
		},
		showCount: {
			type: Number,
			default: 3
		},
		interval: {
			type: Number,
			default: 1000 // 默认滑动间隔1s
		},
		startItemIndex: {
			type: Number,
			default: 0 // 默认显示第一个item
		}
	},
	data(){
		return {
			startShowIndex: 0,
			slidedLength: 0,
			isSliding: false,
		}
	},
	computed: {
		itemWidth: function(){
			return 100 / this.showCount;
		},
		slideableLength: function(){
			return (this.items.length - this.showCount) * this.itemWidth;
		},
		itemsVisible: function(){
			return new Array(this.items.length).fill(false).map((current, index) =>(index >= this.startShowIndex)  && (index < this.startShowIndex + this.showCount));
		}
	},
	methods: {
		async slide(direction="next"){
			// 计算滑动距离
			let s = 0;
			if(direction == "prev"){
				if(this.startShowIndex > 0){
					s = this.itemWidth;
					this.startShowIndex -= 1;
				}
			}else {
				if(this.startShowIndex < (this.items.length - this.showCount)){
					s = - this.itemWidth;
					this.startShowIndex += 1;
				}
			}

			this.isSliding = true;
			let res = await this.startMove(s);
			this.isSliding = false;
			
		},
		startMove: function(s){
			// 计算速度
			let t = this.interval;
			let v = s * 30 / t;

			let task = new Promise((resolve, reject) => {
				let intervalTimer = setInterval(() => {
					if(Math.abs(s) > Math.abs(v)){
						s -= v;
						this.slidedLength += v;
					}else{
						this.slidedLength += s;
						clearInterval(intervalTimer);
						resolve();
					}
				}, 30);
			})
			
			return task;
		}
	}
}
</script>

<style lang="scss" scoped>
.card-slider {
	width: 100%;
	height: 100%;
	position: relative;
	overflow-x: hidden;
	.control {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
		z-index: 100;
		button {
			border: none;
			outline: none;
			font-size: 24px;
			color: #333;
			background: transparent;
			opacity: 0.3;
		}
		&.prev {
			left: 0;
		}
		&.next { 
			right: 0;
		}
	}
	
	.slider-content {
		margin: 0 auto;
		@include flex-box($justify: flex-start);
	}

	.slide-item {
		flex-shrink: 0;
		position: relative;
		overflow: hidden;
	}
}
</style>
