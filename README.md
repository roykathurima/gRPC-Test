### Initialize a project
yarn init -y

### Add typescript and initialize this as a ts project
yarn add typescript -D
yarn run tsc --init

### Add the gRPC library
yarn add @grpc/grpc-js

### Add the gRPC dependencies -> Tooling required to generate the required JS and TS protobuf stuff required
yarn add ts-node grpc-tools grpc_tools_node_protoc_ts @types/google-protobuf -D