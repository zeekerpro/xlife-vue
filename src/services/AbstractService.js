import request from '@/network/http';

class AbstractService {

	async send(params){
		let res = await request(params);
		return res;
	}

	postJson(data, url) {
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
	post({data, to}) {
		return request({
			url: to,
			method: 'post',
			data: data
		})
	}

	// get(from, query)
  get(query, from){
    return request({
			url: url,
			method: 'get',
			params: query 
		})
  }

	// delete({from: '/url', params: {}})
	delete({from, params}){
    return request({
			url: from,
			method: 'delete',
			params, params
		})
	}

	// 上传文件
	// upload({file: formData})
	upload({file, to = "/upload"}){
		return request({
			url: to,
			method: 'post',
			headers: {
				'Content-Type': 'multipart/form-data;charset=UTF-8'
			},
			data: file 
		});
	}

	// 下载附件
	// download({fileName: 'xxx.xlsx', from:'/download', query: {}})
	async getFileUrl({fileName = "download", from = '/download', query}){
		const fileUrl = await this.getFileUrl({from = '/download', query}) 
		const link = document.createElement("a");
		link.href = fileUrl;
		link.setAttribute("download", fileName);
		document.body.appendChild(link);
		link.click();
		link.parentNode.removeChild(link);
	}

	// 获取文件流url
	// getFileUrl({from:'/download', query: {}})
	async download({from = '/download', query}){
		let ret = await request({
			url: url,
			method: 'get',
			responseType: 'blob',
			params: query 
		});
		const fileUrl = window.URL.createObjectURL(new Blob([ret]));
		return fileUrl;
	}

}

export default AbstractService;
