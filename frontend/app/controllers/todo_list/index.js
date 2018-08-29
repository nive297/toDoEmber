import Controller from '@ember/controller';
import lead from 'frontend/models/lead';
import contact from 'frontend/models/contact';
import account from 'frontend/models/account';

export default Controller.extend({
    lead,
    contact,
    account,
    actions: {
      deleteAfterConfirm: function(id) {
          if (confirm("Want to delete?")) {
              let game = this.get('model').findBy('id', id);
              game.destroyRecord();
          }
      }
    }
  });
