/* Radial Progress Component
 * Takes percent and displays the animated circular/radial progress bar.
 * tagName: cannot be over-ridden
 */

import Ember from 'ember';

const {
  Component,
  computed,
  get
} = Ember;

export default Component.extend({
  /*
   * Properties
   */
  classNames: ['radial-progress'],
  classNameBindings: ['radialProgressType'],

  percent: 0,

  radialProgressType: computed('type', {
    get() {
      let klass = `bg-leadscore--${(get(this, 'type'))}`;
      if(get(this, 'type') != 'account')
        klass+= ' radial-progress-sm' ;
      return klass;
    }
  })
});
