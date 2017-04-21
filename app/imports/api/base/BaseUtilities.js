import { Users } from '/imports/api/activity/ActivityCollection';
import { Activities } from '/imports/api/users/UsersCollection';

export function removeAllEntities() {
  Users.removeAll();
  Activities.removeAll();
}
