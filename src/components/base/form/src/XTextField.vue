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
						<Validator v-slot="validateResult" :rules="rules" class="flex-fill" ref="validator" :label="label" :name="name">
							<var v-show="false">{{ validateMessages = validateResult.errors }}</var>
							<label for="" 
								class="x-label position-absolute t-0 r-auto" 
								:class="isActive || value ? 'scaleup' : ''"
								v-if="label">
								{{ label }}
							</label>
							<input :type="type" 
								:value="value"
								class="w-100" 
								:autocomplete="autocomplete ? 'on' : 'off'"
								@focus="onfocus" 
								@blur="onblur" 
								v-focus="autofocus" 
								@input="onInput"
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
		name: {
			type: String,
			required: true,
			default: ""
		},
		autofocus: {
			type: Boolean,
			default: false
		},
		autocomplete: {
			type: Boolean,
			required: false,
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
		errors: {
			type: Array,
			default: () => {
				return [];
			}
		}
	},
	components: {
		XInput: () => import('./XInput')
	},
	data() {
		return {
			isActive: false,
			validateMessages: []
		}
	},
	computed: {
		messages(){
			return this.errors.concat(this.validateMessages);
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
		},
	}
}
</script>
