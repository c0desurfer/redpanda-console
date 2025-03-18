// @generated by protoc-gen-connect-query v1.4.0 with parameter "target=ts,import_extension=,js_import_style=legacy_commonjs"
// @generated from file redpanda/api/console/v1alpha1/cluster_status.proto (package redpanda.api.console.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind } from "@bufbuild/protobuf";
import { GetConsoleInfoRequest, GetConsoleInfoResponse, GetKafkaAuthorizerInfoRequest, GetKafkaAuthorizerInfoResponse, GetKafkaConnectInfoRequest, GetKafkaConnectInfoResponse, GetKafkaInfoRequest, GetKafkaInfoResponse, GetRedpandaInfoRequest, GetRedpandaInfoResponse, GetRedpandaPartitionBalancerStatusRequest, GetRedpandaPartitionBalancerStatusResponse, GetSchemaRegistryInfoRequest, GetSchemaRegistryInfoResponse } from "./cluster_status_pb";

/**
 * GetKafkaInfo returns general Kafka cluster information that can be
 * retrieved via the Kafka API.
 *
 * @generated from rpc redpanda.api.console.v1alpha1.ClusterStatusService.GetKafkaInfo
 */
export const getKafkaInfo = {
  localName: "getKafkaInfo",
  name: "GetKafkaInfo",
  kind: MethodKind.Unary,
  I: GetKafkaInfoRequest,
  O: GetKafkaInfoResponse,
  service: {
    typeName: "redpanda.api.console.v1alpha1.ClusterStatusService"
  }
} as const;

/**
 * GetKafkaAuthorizerInfo returns information about Kafka's authorizer.
 * If the authorizer cannot be queried (for example due to permission errors),
 * this RPC should return a gRPC error.
 *
 * @generated from rpc redpanda.api.console.v1alpha1.ClusterStatusService.GetKafkaAuthorizerInfo
 */
export const getKafkaAuthorizerInfo = {
  localName: "getKafkaAuthorizerInfo",
  name: "GetKafkaAuthorizerInfo",
  kind: MethodKind.Unary,
  I: GetKafkaAuthorizerInfoRequest,
  O: GetKafkaAuthorizerInfoResponse,
  service: {
    typeName: "redpanda.api.console.v1alpha1.ClusterStatusService"
  }
} as const;

/**
 * GetRedpandaInfo returns information from the Redpanda admin API.
 *
 * @generated from rpc redpanda.api.console.v1alpha1.ClusterStatusService.GetRedpandaInfo
 */
export const getRedpandaInfo = {
  localName: "getRedpandaInfo",
  name: "GetRedpandaInfo",
  kind: MethodKind.Unary,
  I: GetRedpandaInfoRequest,
  O: GetRedpandaInfoResponse,
  service: {
    typeName: "redpanda.api.console.v1alpha1.ClusterStatusService"
  }
} as const;

/**
 * @generated from rpc redpanda.api.console.v1alpha1.ClusterStatusService.GetRedpandaPartitionBalancerStatus
 */
export const getRedpandaPartitionBalancerStatus = {
  localName: "getRedpandaPartitionBalancerStatus",
  name: "GetRedpandaPartitionBalancerStatus",
  kind: MethodKind.Unary,
  I: GetRedpandaPartitionBalancerStatusRequest,
  O: GetRedpandaPartitionBalancerStatusResponse,
  service: {
    typeName: "redpanda.api.console.v1alpha1.ClusterStatusService"
  }
} as const;

/**
 * GetConsoleInfo returns version and build information about the Console.
 *
 * @generated from rpc redpanda.api.console.v1alpha1.ClusterStatusService.GetConsoleInfo
 */
export const getConsoleInfo = {
  localName: "getConsoleInfo",
  name: "GetConsoleInfo",
  kind: MethodKind.Unary,
  I: GetConsoleInfoRequest,
  O: GetConsoleInfoResponse,
  service: {
    typeName: "redpanda.api.console.v1alpha1.ClusterStatusService"
  }
} as const;

/**
 * GetKafkaConnectInfo returns information about the configured Kafka Connect clusters.
 *
 * @generated from rpc redpanda.api.console.v1alpha1.ClusterStatusService.GetKafkaConnectInfo
 */
export const getKafkaConnectInfo = {
  localName: "getKafkaConnectInfo",
  name: "GetKafkaConnectInfo",
  kind: MethodKind.Unary,
  I: GetKafkaConnectInfoRequest,
  O: GetKafkaConnectInfoResponse,
  service: {
    typeName: "redpanda.api.console.v1alpha1.ClusterStatusService"
  }
} as const;

/**
 * GetSchemaRegistryInfo returns information about the Schema Registry.
 *
 * @generated from rpc redpanda.api.console.v1alpha1.ClusterStatusService.GetSchemaRegistryInfo
 */
export const getSchemaRegistryInfo = {
  localName: "getSchemaRegistryInfo",
  name: "GetSchemaRegistryInfo",
  kind: MethodKind.Unary,
  I: GetSchemaRegistryInfoRequest,
  O: GetSchemaRegistryInfoResponse,
  service: {
    typeName: "redpanda.api.console.v1alpha1.ClusterStatusService"
  }
} as const;
