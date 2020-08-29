class TypeUtil {

	static isEmpty(val){
		// null or undefined, undefined == null -> true
		if(val == null) return true;

		// boolean value is not empty
		if(typeof val == 'boolean') return false;

		// 0 is empty, other number is not
		if(typeof val == 'number') return !val;

		// error without message is empty
		if(val instanceof Error) return val.message === '';
		switch (Object.prototype.toString.call(val)) {
			// String or Array
			case '[object String]':
			case '[object Array]':
				return !val.length;

			// Map or Set or File
			case '[object File]':
			case '[object Map]':
			case '[object Set]': {
				return !val.size;
			}

			// Plain Object
			case '[object Object]': {
				return !Object.keys(val).length;
			}
		}
	}

	static isString(obj){
		return Object.prototype.toString.call(obj) === '[object String]';
	}

	static isObject(obj) {
		return Object.prototype.toString.call(obj) === '[object Object]';
	}

	static isHtmlElement(node) {
		return node && node.nodeType === Node.ELEMENT_NODE;
	}

	static isFunction = (functionToCheck) => {
		var getType = {};
		return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	};

	static isUndefined = (val)=> {
		return val === void 0;
	};

	static isDefined = (val) => {
		return val !== undefined && val !== null;
	};

}

export default TypeUtil;
