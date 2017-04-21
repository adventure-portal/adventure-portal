import { Template } from 'meteor/templating';
import { Activities } from '/imports/api/activities/ActivitiesCollection';

Template.Adventures_Page.onCreated(function onCreated() {
  this.subscribe(Activities.getPublicationName());
});

Template.Adventures_Page.helpers({

  /**
   * Returns a cursor to profiles, sorted by last name.
   */
  profiles() {
    return Activities.find({}, { sort: { location: 1 } });
  },
});
