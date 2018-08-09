import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
      deleteAfterConfirm: function(id) {
          if (confirm("Want to delete?")) {
              let game = this.get('model').findBy('id', id);
              game.destroyRecord();
          }
      }
    }
  });
