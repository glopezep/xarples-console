// package: refresh_token
// file: refresh_token.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class RefreshTokenRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getClientId(): string;
    setClientId(value: string): void;

    getUserId(): string;
    setUserId(value: string): void;

    getToken(): string;
    setToken(value: string): void;

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
    toObject(includeInstance?: boolean): RefreshTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RefreshTokenRequest): RefreshTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RefreshTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RefreshTokenRequest;
    static deserializeBinaryFromReader(message: RefreshTokenRequest, reader: jspb.BinaryReader): RefreshTokenRequest;
}

export namespace RefreshTokenRequest {
    export type AsObject = {
        id: string,
        clientId: string,
        userId: string,
        token: string,
        scope: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class RefreshTokenListRequest extends jspb.Message { 
    clearRefreshTokensList(): void;
    getRefreshTokensList(): Array<RefreshTokenRequest>;
    setRefreshTokensList(value: Array<RefreshTokenRequest>): void;
    addRefreshTokens(value?: RefreshTokenRequest, index?: number): RefreshTokenRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RefreshTokenListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RefreshTokenListRequest): RefreshTokenListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RefreshTokenListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RefreshTokenListRequest;
    static deserializeBinaryFromReader(message: RefreshTokenListRequest, reader: jspb.BinaryReader): RefreshTokenListRequest;
}

export namespace RefreshTokenListRequest {
    export type AsObject = {
        refreshTokensList: Array<RefreshTokenRequest.AsObject>,
    }
}
