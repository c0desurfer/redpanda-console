// @generated by protoc-gen-connect-es v1.2.0 with parameter "target=ts,import_extension="
// @generated from file redpanda/api/dataplane/v1alpha2/user.proto (package redpanda.api.dataplane.v1alpha2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateUserRequest, CreateUserResponse, DeleteUserRequest, DeleteUserResponse, ListUsersRequest, ListUsersResponse, UpdateUserRequest, UpdateUserResponse } from "./user_pb";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service redpanda.api.dataplane.v1alpha2.UserService
 */
export const UserService = {
  typeName: "redpanda.api.dataplane.v1alpha2.UserService",
  methods: {
    /**
     * @generated from rpc redpanda.api.dataplane.v1alpha2.UserService.CreateUser
     */
    createUser: {
      name: "CreateUser",
      I: CreateUserRequest,
      O: CreateUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc redpanda.api.dataplane.v1alpha2.UserService.UpdateUser
     */
    updateUser: {
      name: "UpdateUser",
      I: UpdateUserRequest,
      O: UpdateUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc redpanda.api.dataplane.v1alpha2.UserService.ListUsers
     */
    listUsers: {
      name: "ListUsers",
      I: ListUsersRequest,
      O: ListUsersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc redpanda.api.dataplane.v1alpha2.UserService.DeleteUser
     */
    deleteUser: {
      name: "DeleteUser",
      I: DeleteUserRequest,
      O: DeleteUserResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

