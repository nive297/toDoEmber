import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
	location: config.locationType,
	rootURL: config.rootURL
});

Router.map(function() {
	this.route('todo_list',function(){
		this.route('new');
	    this.route('show', {path: ':todo_list_id'});
	    this.route('edit', {path: ':todo_list_id/edit'});
	    this.route('destroy', {path: ':todo_list_id/destroy'});
	});
	this.route('login');
});

export default Router;
