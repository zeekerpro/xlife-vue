<template>
		<x-input :messages="messages">

			<template v-slot:prepend v-if="$slots.prepend"> <slot name="prepend"></slot> </template>

			<template v-slot:default>
				<div class="x-input-prepend-inner" v-if="$slots.prependInner">
					<slot name="prependInner" ></slot>
				</div>

				<div class="x-text-field flex-fill"
						:class="isActive ? 'active' : ''"
					>
					<label for="" class="x-label position-absolute t-0 r-auto" 
						v-if="label">{{label}}</label>
					<input :type="type" 
						class="w-100" 
						@focus="onfocus" 
						@blur="onblur" 
						v-focus="autofocus" 
						:value="value"
						@input="onInput"
						>
				</div>

				<div class="x-input-append-inner" v-if="$slots.appendInner">
					<slot name="appendInner" ></slot>
				</div>
			</template>

			<template v-slot:append v-if="$slots.append"> <slot name="append"></slot> </template>

		</x-input>
</template>

<script>
export default {
	name: "XTextField",
	props: {
		label: {
			type: String,
			default: ""
		},
		messages: {
			type: [String, Array],
			default: () => {
				return []
			}
		},
		autofocus: {
			type: Boolean,
			default: false
		},
		type: {
			type: String,
			default: 'text'
		},
		value: {
			type: String,
			default: ''
		},
		required: {
			type: Boolean,
			default: false
		},
		rules: {
			type: Array,
			default: []
		}
	},
	components: {
		XInput: () => import('./XInput')
	},
	data() {
		return {
			isActive: false
		}
	},
	methods: {
		onfocus(){
			this.isActive = true;
		},
		onblur(){
			this.isActive = false;
		},
		onInput(e){
			this.$emit('input', e.target.value);
		}
	}
}
</script>
