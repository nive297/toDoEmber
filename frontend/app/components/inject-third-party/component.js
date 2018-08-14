import Component from '@ember/component';
import config from 'frontend/config/environment'
import survey from 'frontend/utils/survey';

export default Component.extend({

  didInsertElement() {
    survey(config);
  }

});