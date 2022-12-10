import { sendUnaryData, ServerReadableStream, ServerUnaryCall, ServerWritableStream, UntypedHandleCall } from "@grpc/grpc-js";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { IUsersServer } from "../proto/users_grpc_pb";
import { User, UserRequest } from "../proto/users_pb";
import { users } from "./db";


export class UsersServer implements IUsersServer {
  getUser (call: ServerUnaryCall<UserRequest, User>, callback: sendUnaryData<User>) {
    const userId = call.request.getId();
    const respectiveUser = users.find(user => user.getId() === userId);

    if (!respectiveUser) {
      const error = new Error('User not Found');
      callback(error, null);
      return;
    }
    console.log('Successfully got the user. Returning them');
    callback(null, respectiveUser);
  }

  getUsers (call: ServerWritableStream<Empty, User>) {
    for (const user of users) call.write(user);
    call.end();
  }

  createUser (call: ServerReadableStream<User, Empty>, callback: sendUnaryData<Empty>) {
    call.on('data', user => {
      users.push(user);
    })

    call.on('end', () => {
      callback(null, new Empty());
    })
  }
}