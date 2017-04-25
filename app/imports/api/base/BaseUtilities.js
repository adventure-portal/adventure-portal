import { Users } from '/imports/api/users/UsersCollection';
import { Activity } from '/imports/api/activities/ActivitiesCollection';

export function removeAllEntities() {
  Users.removeAll();
  Activity.removeAll();
}
