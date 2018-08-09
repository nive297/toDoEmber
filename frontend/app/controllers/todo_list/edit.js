import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
      save(record) {
        record.save()
          .then(() => this.transitionToRoute('todo_list'));
      },

      willTransition() {
        this._super(...arguments);
        const record = this.controller.get('model');
        record.rollbackAttributes();
      },
    }
  });
