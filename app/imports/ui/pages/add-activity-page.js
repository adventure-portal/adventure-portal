/* eslint-disable object-shorthand, no-unused-vars */
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Users } from '/imports/api/users/UsersCollection';
import { Activities } from '/imports/api/activity/ActivityCollection';
import { Interests } from '/imports/api/interests/InterestsCollection';
import '/imports/ui/components/form-controls';

const displaySuccessMessage = 'displaySuccessMessage';
const displayErrorMessages = 'displayErrorMessages';

Template.Add_Activity_Page.onCreated(function onCreated() {
  this.subscribe(Activities.getPublicationName());
  this.subscribe(Interests.getPublicationName());
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displaySuccessMessage, false);
  this.messageFlags.set(displayErrorMessages, false);
  this.context = Activities.getSchema().namedContext('Add_Activity_Page');
});

Template.Add_Activity_Page.helpers({
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
  interests() {
    const selectedInterests = Interests;
    return  _.map(Interests.findAll(),function makeInterestObject(interest) {return { label: interest.name, selected: _.contains(selectedInterests, interest.name) };
            });
  },
});

Template.Add_Activity_Page.events({
  'submit .activity-data-form'(event, instance) {
    event.preventDefault();
    const title = event.target.Title.value;
    const location = event.target.Location.value;
    const hours = event.target.Hours.value; // schema requires username.
    const cost = event.target.Cost.value; // schema requires username.
    const rating = event.target.Rating.value; // schema requires username.
    const picture = event.target.Picture.value;
    const description = event.target.Description.value;
    const selectedInterests = _.filter(event.target.Interests.selectedOptions, (option) => option.selected);
    const interests = _.map(selectedInterests, (option) => option.value);

    const newActivity = { title, location, hours, cost, rating, picture, description, interests};
    //const newActivity = { title, location, hours, cost, rating, picture, description, interests};
    console.log(newActivity);

    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that updatedProfileData reflects what will be inserted.
    Activities.getSchema().clean(newActivity);
    // Determine validity.
    instance.context.validate(newActivity);

    if (instance.context.isValid()) {
      Activities.define(newActivity);

      instance.messageFlags.set(displayErrorMessages, false);
    } else {
      instance.messageFlags.set(displaySuccessMessage, false);
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});


/**
 * After successful addition of a new Stuff document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
