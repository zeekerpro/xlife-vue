class StringUtil {

	/**
	 * 单个字符串首字母大写
	 */
	static capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('')
}

export default StringUtil;
