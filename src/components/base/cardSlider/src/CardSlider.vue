<template>
<div class="card-slider"
		@mouseover="stopAutodisplay"
		@mouseout="startAutodisplay"
	>

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
	<div class="slider-content" 
		:style="{overflowX: isSliding ? 'hidden' : ''}">
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
		autoplay: {
			type: Boolean,
			default: true
		},
		interval: { // 自动播放间隔时间
			type: Number,
			default: 1000 
		},
		duration: { // 滑动一次持续时间
			type: Number,
			default: 1000
		},
	},
	data(){
		return {
			startShowIndex: 0,
			slidedLength: 0,
			isSliding: false,
			autodisplayTimer: null
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
	mounted: function(){
		this.startAutodisplay();
	},
	methods: {
		async slide(direction="next"){
			if(this.isSliding){
				return;
			}

			this.isSliding = true;
			if (direction == "prev" && this.startShowIndex > 0){
				await this.startMove( this.itemWidth);
				this.startShowIndex -= 1;
			}
			if (direction == "next" && this.startShowIndex < (this.items.length - this.showCount)){
				await this.startMove( -this.itemWidth);
				this.startShowIndex += 1;
			}
			this.isSliding = false;
		},
		autoSlide(){
			let direction = 'next'; 
			this.autodisplayTimer = setInterval( () => {
				// 计算方向
				if (this.startShowIndex == 0) {
					direction = "next";
				}
				if(this.startShowIndex == this.items.length - this.showCount) {
					direction = "prev";
				}
				this.slide(direction);
			}, this.interval + this.duration);
		},
		startMove: function(s){
			let t = this.duration;
			let v = s * 30 / t;

			let task = new Promise((resolve, reject) => {
				let durationTimer = setInterval(() => {
					if(Math.abs(s) > Math.abs(v)){
						s -= v;
						this.slidedLength += v;
					}else{
						this.slidedLength += s;
						clearInterval(durationTimer);
						resolve();
					}
				}, 30);
			})
			
			return task;
		},
		stopAutodisplay(){
			if(this.autodisplayTimer){
				clearInterval(this.autodisplayTimer);
			}
		},
		startAutodisplay(){
			if(this.autoplay){
				this.autoSlide();
			}
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
		z-index: 100;
		button {
			border: none;
			outline: none;
			font-size: 24px;
			color: #333;
			background: transparent;
			opacity: 0.3;
			cursor: pointer;
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