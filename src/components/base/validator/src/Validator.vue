<template>
<ValidationProvider ref="provider">
	<slot></slot>
</ValidationProvider>
</template>

<script>

import { ValidationProvider, extend} from 'vee-validate';
import * as presetRules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/zh_CN.json';

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
		}
	},
	components: {
		ValidationProvider
	},
	created(){
		Object.keys(presetRules).forEach(rule => {
			extend(rule, {
				...presetRules[rule], // copies rule configuration
				message: messages[rule] // assign message
			});
		});
	},
	data(){
		return {
			validRules: []
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
					extend(`vr_${index}`, rule); // 根据传入的校验函数生成新的校验规则, vr_n 是规则名
					ruleNames.push(`vr_${index}`);
				}else{
					ruleNames.push(rule);
				}
			});
			this. validRules = ruleNames.join('|');
		}
	}
}

</script>
