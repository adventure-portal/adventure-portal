import { Users } from '/imports/api/users/UsersCollection';
import { Activities } from '/imports/api/activity/ActivitiesCollection';

export function removeAllEntities() {
  Users.removeAll();
  Activities.removeAll();
}
