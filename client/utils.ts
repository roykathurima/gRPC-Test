import { credentials } from "@grpc/grpc-js";
import { UsersClient } from "../proto/users_grpc_pb";


const PORT = 4003;

export const client = new UsersClient(
  `localhost:${PORT}`,
  credentials.createInsecure()
);

export const noop = () => {};