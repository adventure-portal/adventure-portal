// import { AutoForm } from 'meteor/aldeed:autoform';
// import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Activity } from '/imports/api/activities/ActivitiesCollection';
//  import './dashboard-page.html';

/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful addition of a new Stuff document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */

Template.Dashboard_Page.onCreated(function onCreated() {
  this.subscribe(Activity.getPublicationName());
});

Template.Dashboard_Page.helpers({

  /**
   * Returns a cursor to profiles, sorted by last name.
   */
  activity() {
    console.log(Activity.find().fetch());
    return Activity.find({}, { sort: { title: 1 } });
  },


});
