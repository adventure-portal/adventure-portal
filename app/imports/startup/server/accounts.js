import { Accounts } from 'meteor/accounts-base';
import { Users } from '/imports/api/users/UsersCollection';

// Create a profile document for this user if none exists already. //
Accounts.validateNewUser(function validate(user) {
  if (user) {
    const username = user.services.cas.id;
    if (!Users.isDefined(username)) {
      Users.define({ username });
    }
  }
  // All UH users are valid for AdventurePortal.
  return true;
});
