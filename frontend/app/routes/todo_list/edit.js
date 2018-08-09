import Route from '@ember/routing/route';

export default Route.extend({
	model(params) {
	    var toDoModel = this.store.find('todo_list', params.todo_list_id);
	    return toDoModel;
  	}
});
