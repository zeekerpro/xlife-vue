/**
 * 右侧内容窗口显示控制
 *
 */
const state = {
	isShowViewer: false
}

const mutations = {
	showViewer(state, args){
		state.isShowViewer = true;
	},
	hideViewer(state, args){
		state.isShowViewer = false;
	}
}

export default {
	namespaced: true,
	state,
	mutations
}
