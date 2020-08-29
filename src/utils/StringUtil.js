class StringUtil {

	static capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('')


	static kebabCase = (str) => {
  const hyphenateRE = /([^-])([A-Z])/g;
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase();
	}
}

export default StringUtil;
