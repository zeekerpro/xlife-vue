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
						<Validator v-slot="{ errors }" :rules="rules" class="flex-fill" ref="validator" :name="label">
							<label for="" class="x-label position-absolute t-0 r-auto" 
								:class="isActive || value ? 'scaleup' : ''"
								v-if="label">{{label}}</label>
							<input :type="type" 
								class="w-100" 
								@focus="onfocus" 
								@blur="onblur" 
								v-focus="autofocus" 
								:value="value"
								@input="onInput"
								:placeholder="placeholder"
								>
						</Validator>
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
		placeholder: {
			type: String,
			default: ""
		},
		autofocus: {
			type: Boolean,
			default: false
		},
		type: {
			type: String,
			default: 'text'
		},
		rules: {
			type: Array,
			default: () => {
				return [];
			}
		},
		value: {
			type: String,
			default: ''
		},
	},
	components: {
		XInput: () => import('./XInput')
	},
	data() {
		return {
			isActive: false,
			messages: []
		}
	},
	methods: {
		onfocus(){
			this.isActive = true;
		},
		async onblur(){
			this.isActive = false;
		},
		async onInput(e){
			this.$emit('input', e.target.value);
		},
	}
}
</script>
