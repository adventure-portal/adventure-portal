import { Template } from 'meteor/templating';
import { Activities } from '/imports/api/activity/ActivityCollection';

/* eslint-disable object-shorthand, no-unused-vars */

Template.Dashboard_Page.onCreated(function onCreated() {
  this.subscribe(Activities.getPublicationName());
});

Template.Dashboard_Page.helpers({

  /**
   * Returns a cursor to activities, sorted by activity name.
   */
  activities() {
    return Activities.find({}, { sort: { title: 1 } });
  },
});
