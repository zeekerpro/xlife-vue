import request from '@/network/http';

class AbstractService {

	async send(params){
		let res = await request(params);
		return res;
	}

	postJson(data, url) {
		return request({
			url: url,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			},
			data: data
		})
	}


	post(data, url) {
		return request({
			url: url,
			method: 'POST',
			data: data
		})
	}

  get(params, url){
    return request({
			url: url,
			method: 'GET',
			params: params
		})
  }

	// 上传文件
	upload(data, url = "/upload"){
		return request({
			url: url,
			method: 'POST',
			headers: {
				'Content-Type': 'multipart/form-data;charset=UTF-8'
			},
			data: data
		});
	}

	// 下载附件
	async download(params, filename, url = '/download'){
		let ret = await request({
			url: url,
			method: 'GET',
			responseType: 'blob',
			params: params
		});
		const downUrl = window.URL.createObjectURL(new Blob([ret]));
		const link = document.createElement("a");
		link.href = downUrl;
		link.setAttribute("download", filename);
		document.body.appendChild(link);
		link.click();
		link.parentNode.removeChild(link);
	}

}

export default AbstractService;
