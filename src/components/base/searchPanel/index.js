import SearchPanel from './src/SearchPanel.vue';

SearchPanel.install = function(Vue){
	Vue.component(SearchPanel.name, SearchPanel);
}

export default SearchPanel;
