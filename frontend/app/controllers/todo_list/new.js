import Controller from '@ember/controller';

export default Ember.Controller.extend({
  model() {
    return this.store.createRecord('todo_list');
  },
  actions: {
    createToDoList() {
      let title = this.get('title');
      let description = this.get('description');
      let newRecord = this.store.createRecord('todo_list', {
        title: title,
        description:description
      });
      newRecord.save().then(() => this.transitionToRoute('todo_list'));
    }
  }
  });
