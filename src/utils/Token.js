/**
 * 本地token 管理
 */

export default class Token{

	static #TOKEN_KEY = "x-token";

	static set(token){
		return localStorage.setItem(this.#TOKEN_KEY, token);
	}
	
	static get(){
		return localStorage.getItem(this.#TOKEN_KEY)
	}

	static remove(){
		return localStorage.removeItem(this.#TOKEN_KEY);
	}
}
