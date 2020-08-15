import request from '@/network/http';

class AbstractService {

	_baseUrl = "/"

	async send(params){
		let res = await request(params);
		return res;
	}

	// postJson({data: data, to: url})
	postJson({data, to} = {}){
		let url = this._baseUrl + to;
		return request({
			url: url, 
			method: 'post',
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			},
			data: data
		})
	}

	// post({data: data, to: url})
	post({data, to} = {}) {
		let url = this._baseUrl + to;
		return request({
			url: url,
			method: 'post',
			data: data
		})
	}

	// get({from: url, query: params})
  get({from, query} = {}){
		let url = this._baseUrl + from;
    return request({
			url: url,
			method: 'get',
			params: query 
		})
  }

	// delete({from: '/url', params: {}})
	delete({from, params} = {}){
		let url = this._baseUrl + from;
    return request({
			url: url,
			method: 'delete',
			params, params
		})
	}

	// 上传文件
	// upload({file: formData})
	upload({file, to = "/upload"} = {}){
		let url = this._baseUrl + ro;
		return request({
			url: url,
			method: 'post',
			headers: {
				'Content-Type': 'multipart/form-data;charset=UTF-8'
			},
			data: file 
		});
	}

	// 下载附件
	// download({fileName: 'xxx.xlsx', from:'/download', query: {}})
	async download({fileName = "download.file", from = '/download', query} = {}){
		const fileUrl = await this.getFileUrl({from: from, query: query}) 
		const link = document.createElement("a");
		link.href = fileUrl;
		link.setAttribute("download", fileName);
		document.body.appendChild(link);
		link.click();
		link.parentNode.removeChild(link);
	}

	// 获取文件流url
	// getFileUrl({from:'/download', query: {}})
	async getFileUrl({from = '/download', query} = {}){
		let ret = await request({
			url: from,
			method: 'get',
			responseType: 'blob',
			params: query 
		});
		const fileUrl = window.URL.createObjectURL(new Blob([ret]));
		return fileUrl;
	}

}

export default AbstractService;
