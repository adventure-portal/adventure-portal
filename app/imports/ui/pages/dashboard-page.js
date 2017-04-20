import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Activities } from '/imports/api/activities/ActivitiesCollection';

/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful addition of a new Stuff document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */

Template.Dashboard_Page.onCreated(function onCreated() {
  this.subscribe(Activities.getPublicationName());
});

Template.Dashboard_Page.helpers({

  /**
   * Returns a cursor to profiles, sorted by last name.
   */
  activities() {
    return Activities.find({}, { sort: { title: 1 } });
  },
});
