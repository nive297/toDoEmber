import Ember from 'ember';
import layout from './template';

const {
  computed,
  get
} = Ember;

const CHAR_LIMIT = {
  'salesAccount': 2
};

export default Ember.Component.extend({
  /*
   * Properties
   */
  attributeBindings: ['data-toggle', 'data-placement', 'title'],
  classNames: ['avatar-wrap'],
  layout,
  size: '30',
  tagName: 'span',

  /*
   * Computeds
   */
  avatarText: computed('model.displayName', {
    get() {
      let displayName = get(this, 'model.displayName') || '';
      return displayName.trim().substring(0, get(this, 'charLimit')).capitalize();
    }
  }).readOnly(),
  avatarShape: computed('type', {
    get() {
      return get(this, 'type');
    }
  }).readOnly(),

  charLimit: computed('avatarShape', {
    get() {
      return CHAR_LIMIT[get(this, 'model.modelType')] || 1;
    }
  }).readOnly(),
  avatarCharacterCSSClass: computed('avatarText', {
    get() {
      let avatarText = get(this, 'avatarText') || ' ';
      return Math.abs(avatarText.toUpperCase().charCodeAt(0) - 64);
    }
  }).readOnly(),

  isAvatarInactive: computed('model.isActive', {
    get() {
      let isActive = this.get('model.isActive');
      return (isActive !== undefined) && (isActive === false);
    }
  }).readOnly()
});
