import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import BaseCollection from '/imports/api/base/BaseCollection';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';

/** @module Interest */

/**
 * Represents a specific interest, such as "Software Engineering".
 * @extends module:Base~BaseCollection
 */
class ActivityCollection extends BaseCollection {

  /**
   * Creates the Activity collection.
   */
  constructor() {
    super('Activity', new SimpleSchema({
      name: { type: String },
      description: { type: String, optional: true },
    }));
  }

  /**
   * Defines a new Activity.
   * @example
   * Activities.define({ name: 'Software Engineering',
   *                    description: 'Methods for group development of large, high quality software systems' });
   * @param { Object } description Object with keys name and description.
   * Name must be previously undefined. Description is optional.
   * Creates a "slug" for this name and stores it in the slug field.
   * @throws {Meteor.Error} If the Activity definition includes a defined name.
   * @returns The newly created docID.
   */
  define({ name, description }) {
    check(name, String);
    check(description, String);
    if (this.find({ name }).count() > 0) {
      throw new Meteor.Error(`${name} is previously defined in another Activity`);
    }
    return this._collection.insert({ name, description });
  }

  /**
   * Returns the Activity name corresponding to the passed Activity docID.
   * @param activityID An activity docID.
   * @returns { String } An activity name.
   * @throws { Meteor.Error} If the activity docID cannot be found.
   */
  findName(activityID) {
    this.assertDefined(activityID);
    return this.findDoc(activityID).name;
  }

  /**
   * Returns a list of activity names corresponding to the passed list of activity docIDs.
   * @param activityIDs A list of activity docIDs.
   * @returns { Array }
   * @throws { Meteor.Error} If any of the instanceIDs cannot be found.
   */
  findNames(activityIDs) {
    return activityIDs.map(activityID => this.findName(activityID));
  }

  /**
   * Throws an error if the passed name is not a defined activity name.
   * @param name The name of an activity.
   */
  assertName(name) {
    this.findDoc(name);
  }

  /**
   * Throws an error if the passed list of names are not all activity names.
   * @param names An array of (hopefully) activity names.
   */
  assertNames(names) {
    _.each(names, name => this.assertName(name));
  }

  /**
   * Returns the docID associated with the passed activity name, or throws an error if it cannot be found.
   * @param { String } name An activity name.
   * @returns { String } The docID associated with the name.
   * @throws { Meteor.Error } If name is not associated with an activity.
   */
  findID(name) {
    return (this.findDoc(name)._id);
  }

  /**
   * Returns the docIDs associated with the array of activity names, or throws an error if any name cannot be found.
   * If nothing is passed, then an empty array is returned.
   * @param { String[] } names An array of activity names.
   * @returns { String[] } The docIDs associated with the names.
   * @throws { Meteor.Error } If any instance is not an activity name.
   */
  findIDs(names) {
    return (names) ? names.map((instance) => this.findID(instance)) : [];
  }

  /**
   * Returns an object representing the activity docID in a format acceptable to define().
   * @param docID The docID of an activity.
   * @returns { Object } An object representing the definition of docID.
   */
  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const name = doc.name;
    const description = doc.description;
    return { name, description };
  }
}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const Activities = new ActivityCollection();
