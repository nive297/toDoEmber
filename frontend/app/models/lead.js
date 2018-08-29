 var Lead = Ember.Object.extend({
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
export default Lead.create({
  createdAt: 'Jan 13, 2018',
  displayName: 'Ian Newman',
  jobTitle: 'Sales Manager',
  leadScore: 63,
  leadQuality:'Cold',
  lastContacted: '2018-08-27',
  companyName: 'Widget.io',
  leadStage:{
    name: 'New'
  },
  leadScoreInformation:{
    didLeadScoreIncrease: false,
    percentageOfLeadScoreFluctuation: 3,
    bucketName:'cold',
    factors: [
      {impactType:'positive', displayText:'Email opened: Are my emails reaching you?'},
      {impactType:'negative', displayText:'Email clicked: Welcome to Freshsales'},
      {impactType:'positive', displayText: 'Employee count < 100'}
    ],
  },
  owner:{
    displayName: 'Arun Murugan'
  }

});