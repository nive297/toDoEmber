import { moduleForComponent, test } from 'ember-qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const { getOwner, RSVP } = Ember;

moduleForComponent('hover-cards', 'Integration | Component | hover cards', {
  integration:true,
  beforeEach: function() {
    let store = this.container.lookup('service:store');
    this.todo = store.createRecord('todo_list', { title: "New list", description:"desc" });
  }
});


test('it renders contact', function(assert) {
   const done = assert.async();
   this.model = Ember.Object.create({
     displayName: 'Ian Newman',
     jobTitle: 'Sales Manager',
     companyName: 'Widegt.io',
     createdAt: 'Feb 13, 2018',
     lastContacted: '2018-08-20',
     lastContactedTime: 2,
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

  setTimeout(() => done(), 20000);
  this.render(hbs`{{hover-cards todo=todo model=model type = "contact"}}`);
  assert.equal(this.$('#displayName').text().trim(), 'Ian Newman');
  assert.equal(this.$('#jobDetails').text().trim(), 'Sales Manager, Widegt.io');

});

test('it renders account', function(assert) {
  const done = assert.async();

  let model = Ember.Object.create({
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
    lastContactedTime: 3
  });

  this.set('model', model);

  this.render(hbs`{{hover-cards model=model todo=todo type = "account"}}`);
  setTimeout(() => done(), 20000);


  assert.equal(this.$('#displayName').text().trim(), 'Widgetz.io');
  assert.equal(this.$('#location').text().trim(), 'New Haven, Connecticut, United States');

});
