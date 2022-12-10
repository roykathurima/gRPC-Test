import { Server, ServerCredentials } from "@grpc/grpc-js";
import { UsersService } from "../proto/users_grpc_pb";
import { UsersServer } from "./services";

const server = new Server();
// @ts-ignore
server.addService(UsersService, new UsersServer());
server.bindAsync('localhost:4003', ServerCredentials.createInsecure(), (err, pNo) => {
  if (err) throw err;
  console.log('running on port', pNo);
  server.start();
});
