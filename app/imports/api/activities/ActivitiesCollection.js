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
      title: { type: String },
      location: { type: String, optional: true },
      hours: { type: String, optional: true },
      cost: { type: String, optional: true },
      rating: { type: String, optional: true },
      interests: { type: [String], optional: true },
      picture: { type: SimpleSchema.RegEx.Url, optional: true },
      description: { type: String, optional: true },
    }));
  }

  /**
   * Defines a new activity.
   * @example
   * Users.define({ title: 'Manoa Falls',
   *                location: 'Manoa',
   *                hours: '8 AM - 5 PM',
   *                cost: '$0',
   *                rating: '4 Stars',
   *                picture: 'http://johndoe.com/profile.png'});
   *                description: 'A fun hike for all ages, best during sunny days in Manoa
   *                since the hike can become extremely muddy during the rainy season';
   * @param { Object } description Object with required key hours.
   * The rest of the keys are optional.
   * Username must be unique for all users. It should be the UH cost account.
   * Interests is an array of defined interest names.
   * @throws { Meteor.Error } If a user with the supplied hours already exists.
   * @returns The newly created docID.
   */

  define({ title, location, hours, cost, rating, interests, picture, description }) {
    const checkPattern = {
      title: String,
      location: String,
      hours: String,
      cost: String,
      rating: String,
      picture: String,
      description: String,
    };
    check({ title, location, hours, cost, rating, interests, picture, description }, checkPattern);

    if (this.find({ title }).count() > 0) {
      throw new Meteor.Error(`${name} is previously defined.`);
    }
    return this._collection.insert({ title, location, hours, cost, rating, picture, description });
  }

  /**
   * Returns an object representing the activity docID in a format acceptable to define().
   * @param docID The docID of an activity.
   * @returns { Object } An object representing the definition of docID.
   */
  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const title = doc.title;
    const location = doc.location;
    const hours = doc.hours;
    const cost = doc.cost;
    const rating = doc.rating;
    const interests = doc.interests;
    const picture = doc.picture;
    const description = doc.description;
    return { title, location, hours, cost, rating, interests, picture, description };
  }
}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const Activities = new ActivitiesCollection();
