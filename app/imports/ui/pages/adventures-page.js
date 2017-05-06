import { Template } from 'meteor/templating';
import { Activities } from '/imports/api/activity/ActivityCollection';
import { Interests } from '/imports/api/interests/InterestsCollection';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';

const selectedInterestsKey = 'selectedInterests';

Template.Adventures_Page.onCreated(function onCreated() {
  this.subscribe(Interests.getPublicationName());
  this.subscribe(Activities.getPublicationName());
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(selectedInterestsKey, undefined);
});

Template.Adventures_Page.onRendered(function onRendered() {
  this.$('.ui.dropdown').dropdown();
});

Template.Adventures_Page.helpers({
  activities() {
    // Initialize selectedInterests to all of them if messageFlags is undefined.
    if (!Template.instance().messageFlags.get(selectedInterestsKey)) {
      Template.instance().messageFlags.set(selectedInterestsKey, _.map(Interests.findAll(), interest => interest.name));
    }
    // Find all Activities with the currently selected interests.
    const allActivities = Activities.findAll();
    const selectedInterests = Template.instance().messageFlags.get(selectedInterestsKey);

    return _.filter(allActivities, activity => _.intersection(activity.interests, selectedInterests).length > 0);
  },
  interests() {
    return _.map(Interests.findAll(),
        function makeInterestObject(interest) {
          return {
            label: interest.name,
            selected: _.contains(Template.instance().messageFlags.get(selectedInterestsKey), interest.name),
          };
        });
  },
});

Template.Adventures_Page.events({
  'submit .filter-data-form'(event, instance) {
    event.preventDefault();
    const selectedOptions = _.filter(event.target.Interests.selectedOptions, (option) => option.selected);
    instance.messageFlags.set(selectedInterestsKey, _.map(selectedOptions, (option) => option.value));
  },
});

