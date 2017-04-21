import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Users } from '/imports/api/users/UsersCollection';
import './my-profile.html';

const displaySuccessMessage = 'displaySuccessMessage';
const displayErrorMessages = 'displayErrorMessages';

Template.My_Profile_Page.onCreated(function onCreated() {
  this.subscribe(Users.getPublicationName());
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displaySuccessMessage, false);
  this.messageFlags.set(displayErrorMessages, false);
  this.context = Users.getSchema().namedContext('My_Profile_Page');
});

Template.My_Profile_Page.helpers({
  successClass() {
    return Template.instance().messageFlags.get(displaySuccessMessage) ? 'success' : '';
  },
  displaySuccessMessage() {
    return Template.instance().messageFlags.get(displaySuccessMessage);
  },
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  fieldError(fieldName) {
    const invalidKeys = Template.instance().context.invalidKeys();
    const errorObject = _.find(invalidKeys, (keyObj) => keyObj.name === fieldName);
    return errorObject && Template.instance().context.keyErrorMessage(errorObject.name);
  },
  profile() {
    return Users.findDoc(FlowRouter.getParam('username'));
  },
  activities() {
    const userProfile = Users.findDoc(FlowRouter.getParam('username'));
    const userActivities = userProfile.pinnedActivities;
    return userProfile && _.map(Activities.findAll(),
            function makeInterestObject(activity) {
              return { label: activity.name, selected: _.contains(pinnedActivities, Activity.name) };
            });
  },
  name() {
    const userProfile = Users.findDoc(FlowRouter.getParam('username'));
    return `${userProfile.firstName} ${userProfile.lastName}`;
  },
  interests() {
    const profile = Profiles.findDoc(FlowRouter.getParam('username'));
    const selectedInterests = profile.interests;
    return profile && _.map(Interests.findAll(),
            function makeInterestObject(interest) {
              return { label: interest.name, selected: _.contains(selectedInterests, interest.name) };
            });
  },
});


