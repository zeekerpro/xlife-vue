<template>
	<div class="x-input text-left mw-100 d-flex align-items-start mt-4 flex-fill">

		<div class="v-input-prepend my-1 mr-4" v-if="$slots.prepend">
			<slot name="prepend"></slot>
		</div>
			
		<div class="x-input-control w-100 flex-fill d-flex flex-column flex-wrap">
			<div class="x-input-slot d-flex align-items-center mb-2 position-relative">
				<slot name="default"></slot>
			</div>
			<div class="x-input-messages text-left" v-show="messages">
				<div v-for="message in messages" class="x-input-message font-sm text-break">{{message}}</div>
			</div>
		</div>

		<div class="v-input-append my-1 ml-4" v-if="$slots.append">
			<slot name="append"></slot>
		</div>

	</div>
</template>

<script>

export default {
	name: "XInput",
	props: {
		messages:  {
			type: [String, Array],
			default: () => {
				return [];
			}
		}
	},
	data(){
		return {}
	}
}

</script>
