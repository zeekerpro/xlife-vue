/**
 * 右侧内容窗口显示控制
 *
 */
const state = {
	isShowViewer: false,
	viewerComponent: null
}

const mutations = {
	showViewer(state, viewerComponentPath){
		state.isShowViewer = true;
		state.viewerComponent = viewerComponentPath;
	},
	hideViewer(state, args){
		state.isShowViewer = false;
	},
}

export default {
	namespaced: true,
	state,
	mutations
}
