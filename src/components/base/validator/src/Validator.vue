<template>
		<ValidationProvider mode="lazy" v-slot="{ validate, errors }" :rules="validRules"  :name="label">
			<slot :errors="errors"></slot>
		</ValidationProvider>
</template>

<script>
import { ValidationProvider, extend} from 'vee-validate';
import './rules.js';

export default {
	name: "Validator",
	props: {
		rules: {
			type: Array,
			default: () => {
				return [];
			},
			//rule must be functions or string
			validator: (rules) => {
				return rules.length > 0 || rules.every((rule, index) => {
					return (typeof rule) == 'function' || (typeof rule) == 'string';
				});
			}
		},
		label: {
			type: String,
			default: ''
		},
		validateMode: {
			// https://logaretm.github.io/vee-validate/guide/interaction-and-ux.html#interaction-modes
			type: String,
			default: "aggressive",
			validator: function(value){
				return ['aggressive', 'lazy', 'passive', 'eager'].indexOf(value) != -1;
			}
		}
	},
	components: {
		ValidationProvider
	},
	data(){
		return {
			validRules: null,
			messages: null
		}
	},
	mounted(){
		this.initRules();
	},
	methods: {
		initRules(){
			let validRules = this.rules;
			let ruleNames = [];
			validRules.forEach( (rule, index) => {
				if(typeof rule == 'function'){
					extend(`vr_${this.label}_${index}`, rule); // 根据传入的校验函数生成新的校验规则, vr_${label}_${n} 是规则名
					ruleNames.push(`vr_${this.label}_${index}`);
				}else{
					ruleNames.push(rule);
				}
			});
			this.validRules = ruleNames.join('|');
		},
	}
}

</script>
