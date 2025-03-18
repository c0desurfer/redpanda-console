// @generated by protoc-gen-connect-query v1.4.0 with parameter "target=ts,import_extension=,js_import_style=legacy_commonjs"
// @generated from file redpanda/api/console/v1alpha1/debug_bundle.proto (package redpanda.api.console.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind } from "@bufbuild/protobuf";
import { CancelDebugBundleProcessRequest, CancelDebugBundleProcessResponse, CreateDebugBundleRequest, CreateDebugBundleResponse, DeleteDebugBundleFileRequest, DeleteDebugBundleFileResponse, GetClusterHealthRequest, GetClusterHealthResponse, GetDebugBundleStatusRequest, GetDebugBundleStatusResponse } from "./debug_bundle_pb";

/**
 * @generated from rpc redpanda.api.console.v1alpha1.DebugBundleService.GetClusterHealth
 */
export const getClusterHealth = {
  localName: "getClusterHealth",
  name: "GetClusterHealth",
  kind: MethodKind.Unary,
  I: GetClusterHealthRequest,
  O: GetClusterHealthResponse,
  service: {
    typeName: "redpanda.api.console.v1alpha1.DebugBundleService"
  }
} as const;

/**
 * @generated from rpc redpanda.api.console.v1alpha1.DebugBundleService.CreateDebugBundle
 */
export const createDebugBundle = {
  localName: "createDebugBundle",
  name: "CreateDebugBundle",
  kind: MethodKind.Unary,
  I: CreateDebugBundleRequest,
  O: CreateDebugBundleResponse,
  service: {
    typeName: "redpanda.api.console.v1alpha1.DebugBundleService"
  }
} as const;

/**
 * @generated from rpc redpanda.api.console.v1alpha1.DebugBundleService.GetDebugBundleStatus
 */
export const getDebugBundleStatus = {
  localName: "getDebugBundleStatus",
  name: "GetDebugBundleStatus",
  kind: MethodKind.Unary,
  I: GetDebugBundleStatusRequest,
  O: GetDebugBundleStatusResponse,
  service: {
    typeName: "redpanda.api.console.v1alpha1.DebugBundleService"
  }
} as const;

/**
 * @generated from rpc redpanda.api.console.v1alpha1.DebugBundleService.CancelDebugBundleProcess
 */
export const cancelDebugBundleProcess = {
  localName: "cancelDebugBundleProcess",
  name: "CancelDebugBundleProcess",
  kind: MethodKind.Unary,
  I: CancelDebugBundleProcessRequest,
  O: CancelDebugBundleProcessResponse,
  service: {
    typeName: "redpanda.api.console.v1alpha1.DebugBundleService"
  }
} as const;

/**
 * @generated from rpc redpanda.api.console.v1alpha1.DebugBundleService.DeleteDebugBundleFile
 */
export const deleteDebugBundleFile = {
  localName: "deleteDebugBundleFile",
  name: "DeleteDebugBundleFile",
  kind: MethodKind.Unary,
  I: DeleteDebugBundleFileRequest,
  O: DeleteDebugBundleFileResponse,
  service: {
    typeName: "redpanda.api.console.v1alpha1.DebugBundleService"
  }
} as const;
