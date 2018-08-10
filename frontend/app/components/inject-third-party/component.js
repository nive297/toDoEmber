import Ember from 'ember';
import survey from 'frontend/utils/survey';

export default Ember.Component.extend({

  didInsertElement() {
    survey();
  }

});