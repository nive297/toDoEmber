import { computed, get } from '@ember/object';
import { inject } from '@ember/service';
import Component  from '@ember/component';

export default Component.extend({
   i18n: inject(),
   featureType: computed('type', {
    get() {
      let featureType = get(this, 'type') || '';
      return featureType.capitalize();
    }
  }).readOnly(),
});