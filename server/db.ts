import { User, Gender } from '../proto/users_pb';

export function userToClass({ id, name, age, gender }: User.AsObject) {
  const user = new User();
  user.setId(id);
  user.setName(name);
  user.setAge(age);
  user.setGender(gender);
  return user;
}

export const users: User[] = [
  { id: 1, name: 'Roy Kathurima', age: 28, gender: Gender.MALE },
  { id: 2, name: 'Anne Wanjiku', age: 26, gender: Gender.FEMAILE },
].map(userToClass);