import { extend} from 'vee-validate';
import * as presetRules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/zh_CN.json';


// vee-validate 预置的rules https://logaretm.github.io/vee-validate/guide/rules.html#importing-the-rules
Object.keys(presetRules).forEach(rule => {
	extend(rule, {
		...presetRules[rule], // copies rule configuration
		message: messages[rule] // assign message
	});
});

// 自己配置的rules
extend('password', {
	validate(value){
		let pattern = /^(?=.*[a-z])(?=.*\d)(?=.*[#@!~%^&*;:])[a-z\d#@!~%^&*;:]{8,16}$/i;
		return pattern.test(value);
	},
	message:  '{_field_} 必须由8-16位数字，字母和特殊字符组成'
});

