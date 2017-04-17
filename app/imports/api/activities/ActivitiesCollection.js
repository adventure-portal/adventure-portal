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
class ActivitiesCollection extends BaseCollection {

  /**
   * Creates the Activities collection.
   */
  constructor() {
    super('Activities', new SimpleSchema({
      name: { type: String },
      location: { type: String, optional: true },
      hours: { type: String, optional: true },
      cost: { type: String, optional: true },
      rating: { type: String, optional: true },
      picture: { type: SimpleSchema.RegEx.Url, optional: true },
      description: { type: String, optional: true },
    }));
  }

  /**
   * Defines a new Activities.
   * @example
   * .define({ name: 'Software Engineering',
   *                    description: 'Methods for group development of large, high quality software systems' });
   * @param { Object } description Object with keys name and description.
   * Name must be previously undefined. Description is optional.
   * Creates a "slug" for this name and stores it in the slug field.
   * @throws {Meteor.Error} If the Activities definition includes a defined name.
   * @returns The newly created docID.
   */
  define({ name, location, hours, cost, rating, picture, description }) {
    const checkPattern = {
      name: String,
      location: String,
      hours: String,
      cost: String,
      rating: String,
      picture: String,
      description: String,
    };
    check({ name, location, hours, cost, rating, picture, description }, checkPattern);

    if (this.find({ name }).count() > 0) {
      throw new Meteor.Error(`${name} is previously defined.`);
    }
    return this._collection.insert({ name, location, hours, cost, rating, picture, description });
  }

  /**
   * Returns an object representing the activity docID in a format acceptable to define().
   * @param docID The docID of an activity.
   * @returns { Object } An object representing the definition of docID.
   */
  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const name = doc.name;
    const location = doc.location;
    const hours = doc.hours;
    const cost = doc.cost;
    const rating = doc.rating;
    const picture = doc.picture;
    const description = doc.description;
    return { name, location, hours, cost, rating, picture, description };
  }
}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const Activities = new ActivitiesCollection();
