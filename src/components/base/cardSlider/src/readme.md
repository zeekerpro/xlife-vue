使用示例:

```
<template>
	<div>
		<div class="slider">
			<card-slider :items="items" :interval=1000 :showCount=1 :duration=500 :initialIndex=3 :autoplay=true>
				<template v-slot:default="{item}">
					<div class="card">
						{{ item.a }}
					</div>
				</template>
				<template v-slot:prev-controller>
					<div>
						<
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
	padding: 100px;
	font-size: 500px;
	font-weight: bold;
	text-align: center;
	line-height: 500px;
	background: #eee;
	border: 1px solid #ccc;
}

</style>
```
