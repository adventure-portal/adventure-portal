import { Template } from 'meteor/templating';
import { Activities } from '/imports/api/activity/ActivityCollection';
import { Interests } from '/imports/api/interests/InterestsCollection';

/* eslint-disable object-shorthand, no-unused-vars */

Template.Adventures_Page.onRendered(function onRendered() {
  this.$('.ui.dropdown').dropdown();
});

Template.Adventures_Page.onCreated(function onCreated() {
  this.subscribe(Interests.getPublicationName());
  this.subscribe(Activities.getPublicationName());
});

Template.Adventures_Page.helpers({
  activities() {
    return Activities.find({}, { sort: { title: 1 } });
  },
});

Template.Adventures_Page.events({
  /* Favorite event on clicking heart */
  'click .heart': function (event) {
    event.preventDefault();
    console.log('Clicked Heart');
  },

});

