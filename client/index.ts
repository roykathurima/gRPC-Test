import { Gender, User } from "../proto/users_pb";
import getAllUsers from "./all-users";
import createUser from "./create-user";
import getUser from "./get-user";


async function run() {
  const user = await getUser(1);
  console.log(user.toObject());

  const jim = new User();
  jim.setName('Jim');
  jim.setAge(20);
  jim.setId(30);
  jim.setGender(Gender.MALE);
  createUser([jim]);
  console.log(`\n Created User: ${jim.toString()}`);

  const users = await getAllUsers();
  console.log(`\nListing all ${users.length} users:\n`);
  console.log(users);
  console.log(`\n------------------\n`);
  for (const user of users) {
    console.log(user.toObject());
  }
  
}

run();