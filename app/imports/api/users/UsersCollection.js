import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import BaseCollection from '/imports/api/base/BaseCollection';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

/** @module Users */

/**
 * Users provides information for a user.
 * @extends module:Base~BaseCollection
 */
class UsersCollection extends BaseCollection {

  /**
   * Creates the Users collection.
   */
  constructor() {
    super('Users', new SimpleSchema({
      username: { type: String },
      firstName: { type: String, optional: true },
      lastName: { type: String, optional: true },
      email: { type: String, optional: true },
      bio: { type: String, optional: true },
      interests: { type: [String], optional: true },
      currentActivities: { type: [String], optional: true },
      picture: { type: SimpleSchema.RegEx.Url, optional: true },
    }));
  }

  /**
   * Defines a new User.
   * @example
   * Users.define({ firstName: 'John',
   *                lastName: 'Doe',
   *                username: 'jdoe',
   *                email: 'jdoe@example.com',
   *                bio: 'Born and raised on Oahu. Love hiking and surfing.',
   *                interests: ['Surfing', 'Hiking', 'Camping'],
   *                currentActivities: ['Kuliouou Ridge Trail', 'Diamond Head Hike', 'Surfing at White Plains'],
   *                picture: 'http://johndoe.com/profile.png'});
   * @param { Object } description Object with required key hours.
   * The rest of the keys are optional.
   * Username must be unique for all users. It should be the UH cost account.
   * Interests is an array of defined interest names.
   * @throws { Meteor.Error } If a user with the supplied hours already exists.
   * @returns The newly created docID.
   */
  define({ firstName = '', lastName = '', username, email = '', bio = '', interests, currentActivities,
      picture = '' }) {
    const checkPattern = {
      firstName: String,
      lastName: String,
      username: String,
      email: String,
      bio: String,
      picture: String,
    };
    check({ firstName, lastName, username, email, bio, picture }, checkPattern);

    if (this.find({ username }).count() > 0) {
      throw new Meteor.Error(`${username} is previously defined.`);
    }
    return this._collection.insert({ firstName, lastName, username, email, bio, interests,
      currentActivities, picture });
  }

  /**
   * Returns an object representing the User docID in a format acceptable to define().
   * @param docID The docID of a User.
   * @returns { Object }
   */
  dumpOne(docId) {
    const doc = this.findDoc(docId);
    const firstName = doc.firstName;
    const lastName = doc.lastName;
    const username = doc.username;
    const email = doc.email;
    const bio = doc.bio;
    const interests = doc.interests;
    const currentActivities = doc.currentActivities;
    const picture = doc.picture;
    return { firstName, lastName, username, email, bio, interests, currentActivities, picture };
  }
}

/**
 * Provides the single instance of this class to all other entities.
 */

export const Users = new UsersCollection();
