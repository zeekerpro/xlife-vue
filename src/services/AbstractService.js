import request from '@/network/http';

class AbstractService {

	async send(params){
		let res = await request(params);
		return res;
	}

}

export default AbstractService;
