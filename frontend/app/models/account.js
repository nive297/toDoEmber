var Account = Ember.Object.extend({
  lastContactedTime: Ember.computed('lastContacted', {
   get() {
     var todayDate = new Date();
     var lastContactedDate = new Date(this.get('lastContacted'));
     var timeDiff = Math.abs(todayDate.getTime() - lastContactedDate.getTime());
     var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
     return diffDays;
   }
  })
});

export default Account.create({
  displayName: 'Widgetz.io',
  city: 'New Haven',
  state: 'Connecticut',
  country: 'United States',
  website: 'www.widgets.com',
  totalDealsCount: 4,
  totalContactsCount: 2,
  owner:{
    displayName: 'Arun Murugan'
  },
  lastContacted: '2018-08-21',
});