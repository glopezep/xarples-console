// package: authorization_code
// file: authorization_code.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class AuthorizationCodeRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getClientId(): string;
    setClientId(value: string): void;

    getUserId(): string;
    setUserId(value: string): void;

    getCode(): string;
    setCode(value: string): void;

    getScope(): string;
    setScope(value: string): void;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;


    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthorizationCodeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AuthorizationCodeRequest): AuthorizationCodeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthorizationCodeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthorizationCodeRequest;
    static deserializeBinaryFromReader(message: AuthorizationCodeRequest, reader: jspb.BinaryReader): AuthorizationCodeRequest;
}

export namespace AuthorizationCodeRequest {
    export type AsObject = {
        id: string,
        clientId: string,
        userId: string,
        code: string,
        scope: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class AuthorizationCodeListRequest extends jspb.Message { 
    clearAuthorizationCodesList(): void;
    getAuthorizationCodesList(): Array<AuthorizationCodeRequest>;
    setAuthorizationCodesList(value: Array<AuthorizationCodeRequest>): void;
    addAuthorizationCodes(value?: AuthorizationCodeRequest, index?: number): AuthorizationCodeRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthorizationCodeListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AuthorizationCodeListRequest): AuthorizationCodeListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthorizationCodeListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthorizationCodeListRequest;
    static deserializeBinaryFromReader(message: AuthorizationCodeListRequest, reader: jspb.BinaryReader): AuthorizationCodeListRequest;
}

export namespace AuthorizationCodeListRequest {
    export type AsObject = {
        authorizationCodesList: Array<AuthorizationCodeRequest.AsObject>,
    }
}
