/**
 * 引入assets下的所有图片，base64 转码并导出为一个对象
 *
 * 例如：
 *  图片有： 1. @/assets/images/logo.png, 2. @/assets/images/home/banner.jpg
 *  导出的对象IMAGES 为: 
 *  {
 *		logoPng: 图片1的base64,
 *		homeBannerJpg: 图片 2 的base64
 *  }
 */
import StringUtil from '@/utils/StringUtil';

const PATH = require('path');

// 导入所有图片，并做base64编码
const FILES = require.context('@/assets/images', true, /\.(png|jpg|jpeg|gif)$/);
const IMAGES = {}

/**
 * './copy/logo.png' -> 'copyLogoPng'
 * './logo.jpg'			 -> 'logoJpg'
 * '/bing/sume.png'	 -> 'bingSumePng'
 */
const path2camel = (path) => {
	// './copy/logo.png' -> ['.', 'copy', 'logo.png'] 
	let pathSepArray = path.split(PATH.sep);

	// ['.', 'copy', 'logo.png'] -> ['copy', 'logo', 'png'] 
	let validStrArr = []
	pathSepArray.forEach(item => {
		if(item != "."){ 
			validStrArr =  validStrArr.concat(item.split('.'));
		}
	})

	//['copy', 'logo', 'png'] -> 'copyLogoPng' 
	let reducer = (accumulator, currentValue) => {
		if(accumulator && accumulator != '.'){
			return accumulator + StringUtil.capitalize(currentValue);
		}else{
			return currentValue;
		}
	}
	let key = validStrArr.reduce(reducer);

	return key;
}

FILES.keys().forEach(key => {
	let name = path2camel(key);
  IMAGES[name] = FILES(key).default || FILES(key);
})

export default IMAGES;
