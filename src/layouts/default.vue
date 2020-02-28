<template>
	<div>
		default layout
		<router-view>
		</router-view>
		<div class="slider">
			<card-slider :items="items" :interval=1000 :showCount=1>
				<template v-slot:default="{item}">
					<div class="card">
						{{ item.a }}
					</div>
				</template>
			</card-slider>
		</div>
	</div>
</template>

<script>
export default {
	name: "DefaultLayout",
	data(){
		return {
			items: [
				{a: 1},
				{a: 2},
				{a: 3},
				{a: 4},
				{a: 5},
				{a: 6},
				{a: 7},
				{a: 8}
			]
		}
	}
}
</script>

<style lang="scss">


.slider {
	margin: 0 auto;
	width: 1020px;
}

.card {
	height: 500px;
	border: 1px solid #ccc;
	padding: 100px;
	background: red;
	font-size: 500px;
	font-weight: bold;
	text-align: center;
	line-height: 500px;
}

</style>
