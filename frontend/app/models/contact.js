var Contact = Ember.Object.extend({
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
export default Contact.create({
  displayName: 'Ian Newman',
  jobTitle: 'Sales Manager',
  companyName: 'Widegt.io',
  createdAt: 'Feb 13, 2018',
  lastContacted: '2018-08-20',
  openDealsCount: 2,
  wonDealsCount: 1,
  lostDealCount: 1,
  totalDealsCount: 4,
  leadScore: 46,
  leadQuality: 'Warm',
  leadScoreInformation:{
    didLeadScoreIncrease: true,
    percentageOfLeadScoreFluctuation: 5,
    bucketName:'warm',
    factors: [
      {impactType:'positive', displayText:'Contact details updated'},
      {impactType:'negative', displayText:'Email clicked: Welcome to Freshsales'},
      {impactType:'positive', displayText: 'Employee count < 100'}
    ],
  },
  owner:{
    displayName: 'Arun Murugan'
  }
});
