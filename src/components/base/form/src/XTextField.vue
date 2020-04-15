<template>
		<x-input :messages="messages">
			<template v-slot:prepend> <slot name="prepend"></slot> </template>

			<template v-slot:default>

				<div class="x-input-prepend-inner" v-if="$slots.prependInner">
					<slot name="prependInner" ></slot>
				</div>

				<div class="x-text-field font-lg flex-fill"
						:class="isActive ? 'active' : ''"
					>
					<label for="" class="x-label position-absolute t-0 r-auto" 
						v-if="label">{{label}}</label>
					<input type="text" class="w-100" @focus="onfocus" @blur="onblur" v-focus="autofocus">
				</div>

				<div class="x-input-append-inner" v-if="$slots.appendInner">
					<slot name="appendInner" ></slot>
				</div>
			</template>

			<template v-slot:append> <slot name="append"></slot> </template>
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
		}
	}
}
</script>

<style lang="scss" scoped>

.x-label {
	transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
	transform-origin: top left;
	transform: translate(0, 0);
}

.x-text-field {
	&:before {
    position: absolute;
		bottom: -1px;
    content: "";
    left: 0;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    width: 100%;
		border-style: solid;
    border-width: thin 0 0 0;
		border-color: currentColor;
	}
	&:after {
    content: "";
		border-color: currentColor;
    border-style: solid;
    border-width: thin 0 thin 0;
    transform: scaleX(0);
		bottom: -1px;
    left: 0;
    position: absolute;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    width: 100%;
	}
	&.active { .x-label {
				transform: translateY(-70%) scale(0.7);
		}
		&:after {
			transform: scaleX(1);
		}
	}
}

</style>
