/* tslint:disable */
/* eslint-disable */
/**
 * Docker Engine API
 * The Engine API is an HTTP API served by Docker Engine. It is the API the Docker client uses to communicate with the Engine, so everything the Docker client can do can be done with the API.  Most of the client\'s commands map directly to API endpoints (e.g. `docker ps` is `GET /containers/json`). The notable exception is running containers, which consists of several API calls.  # Errors  The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be JSON in the following format:  ``` {   \"message\": \"page not found\" } ```  # Versioning  The API is usually changed in each release, so API calls are versioned to ensure that clients don\'t break. To lock to a specific version of the API, you prefix the URL with its version, for example, call `/v1.30/info` to use the v1.30 version of the `/info` endpoint. If the API version specified in the URL is not supported by the daemon, a HTTP `400 Bad Request` error message is returned.  If you omit the version-prefix, the current version of the API (v1.41) is used. For example, calling `/info` is the same as calling `/v1.41/info`. Using the API without a version-prefix is deprecated and will be removed in a future release.  Engine releases in the near future should support this version of the API, so your client will continue to work even if it is talking to a newer Engine.  The API uses an open schema model, which means server may add extra properties to responses. Likewise, the server will ignore any extra query parameters and request body properties. When you write clients, you need to ignore additional properties in responses to ensure they do not break when talking to newer daemons.   # Authentication  Authentication for registries is handled client side. The client has to send authentication details to various endpoints that need to communicate with registries, such as `POST /images/(name)/push`. These are sent as `X-Registry-Auth` header as a [base64url encoded](https://tools.ietf.org/html/rfc4648#section-5) (JSON) string with the following structure:  ``` {   \"username\": \"string\",   \"password\": \"string\",   \"email\": \"string\",   \"serveraddress\": \"string\" } ```  The `serveraddress` is a domain/IP without a protocol. Throughout this structure, double quotes are required.  If you have already got an identity token from the [`/auth` endpoint](#operation/SystemAuth), you can just pass this instead of credentials:  ``` {   \"identitytoken\": \"9cbaf023786cd7...\" } ``` 
 *
 * The version of the OpenAPI document: 1.41
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { ErrorResponse } from '../models';
// @ts-ignore
import type { Node } from '../models';
// @ts-ignore
import type { NodeSpec } from '../models';
/**
 * NodeApi - axios parameter creator
 * @export
 */
export const NodeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete a node
         * @param {string} id The ID or name of the node
         * @param {boolean} [force] Force remove a node from the swarm
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodeDelete: async (id: string, force?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('nodeDelete', 'id', id)
            const localVarPath = `/nodes/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (force !== undefined) {
                localVarQueryParameter['force'] = force;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Inspect a node
         * @param {string} id The ID or name of the node
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodeInspect: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('nodeInspect', 'id', id)
            const localVarPath = `/nodes/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List nodes
         * @param {string} [filters] Filters to process on the nodes list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;id&#x3D;&lt;node id&gt;&#x60; - &#x60;label&#x3D;&lt;engine label&gt;&#x60; - &#x60;membership&#x3D;&#x60;(&#x60;accepted&#x60;|&#x60;pending&#x60;)&#x60; - &#x60;name&#x3D;&lt;node name&gt;&#x60; - &#x60;node.label&#x3D;&lt;node label&gt;&#x60; - &#x60;role&#x3D;&#x60;(&#x60;manager&#x60;|&#x60;worker&#x60;)&#x60; 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodeList: async (filters?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/nodes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (filters !== undefined) {
                localVarQueryParameter['filters'] = filters;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update a node
         * @param {string} id The ID of the node
         * @param {number} version The version number of the node object being updated. This is required to avoid conflicting writes. 
         * @param {NodeSpec} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodeUpdate: async (id: string, version: number, body?: NodeSpec, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('nodeUpdate', 'id', id)
            // verify required parameter 'version' is not null or undefined
            assertParamExists('nodeUpdate', 'version', version)
            const localVarPath = `/nodes/{id}/update`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (version !== undefined) {
                localVarQueryParameter['version'] = version;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NodeApi - functional programming interface
 * @export
 */
export const NodeApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = NodeApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Delete a node
         * @param {string} id The ID or name of the node
         * @param {boolean} [force] Force remove a node from the swarm
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nodeDelete(id: string, force?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.nodeDelete(id, force, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NodeApi.nodeDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Inspect a node
         * @param {string} id The ID or name of the node
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nodeInspect(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Node>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.nodeInspect(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NodeApi.nodeInspect']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List nodes
         * @param {string} [filters] Filters to process on the nodes list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;id&#x3D;&lt;node id&gt;&#x60; - &#x60;label&#x3D;&lt;engine label&gt;&#x60; - &#x60;membership&#x3D;&#x60;(&#x60;accepted&#x60;|&#x60;pending&#x60;)&#x60; - &#x60;name&#x3D;&lt;node name&gt;&#x60; - &#x60;node.label&#x3D;&lt;node label&gt;&#x60; - &#x60;role&#x3D;&#x60;(&#x60;manager&#x60;|&#x60;worker&#x60;)&#x60; 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nodeList(filters?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Node>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.nodeList(filters, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NodeApi.nodeList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update a node
         * @param {string} id The ID of the node
         * @param {number} version The version number of the node object being updated. This is required to avoid conflicting writes. 
         * @param {NodeSpec} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nodeUpdate(id: string, version: number, body?: NodeSpec, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.nodeUpdate(id, version, body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NodeApi.nodeUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * NodeApi - factory interface
 * @export
 */
export const NodeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = NodeApiFp(configuration)
    return {
        /**
         * 
         * @summary Delete a node
         * @param {string} id The ID or name of the node
         * @param {boolean} [force] Force remove a node from the swarm
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodeDelete(id: string, force?: boolean, options?: any): AxiosPromise<void> {
            return localVarFp.nodeDelete(id, force, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Inspect a node
         * @param {string} id The ID or name of the node
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodeInspect(id: string, options?: any): AxiosPromise<Node> {
            return localVarFp.nodeInspect(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List nodes
         * @param {string} [filters] Filters to process on the nodes list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;id&#x3D;&lt;node id&gt;&#x60; - &#x60;label&#x3D;&lt;engine label&gt;&#x60; - &#x60;membership&#x3D;&#x60;(&#x60;accepted&#x60;|&#x60;pending&#x60;)&#x60; - &#x60;name&#x3D;&lt;node name&gt;&#x60; - &#x60;node.label&#x3D;&lt;node label&gt;&#x60; - &#x60;role&#x3D;&#x60;(&#x60;manager&#x60;|&#x60;worker&#x60;)&#x60; 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodeList(filters?: string, options?: any): AxiosPromise<Array<Node>> {
            return localVarFp.nodeList(filters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a node
         * @param {string} id The ID of the node
         * @param {number} version The version number of the node object being updated. This is required to avoid conflicting writes. 
         * @param {NodeSpec} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodeUpdate(id: string, version: number, body?: NodeSpec, options?: any): AxiosPromise<void> {
            return localVarFp.nodeUpdate(id, version, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * NodeApi - object-oriented interface
 * @export
 * @class NodeApi
 * @extends {BaseAPI}
 */
export class NodeApi extends BaseAPI {
    /**
     * 
     * @summary Delete a node
     * @param {string} id The ID or name of the node
     * @param {boolean} [force] Force remove a node from the swarm
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NodeApi
     */
    public nodeDelete(id: string, force?: boolean, options?: RawAxiosRequestConfig) {
        return NodeApiFp(this.configuration).nodeDelete(id, force, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Inspect a node
     * @param {string} id The ID or name of the node
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NodeApi
     */
    public nodeInspect(id: string, options?: RawAxiosRequestConfig) {
        return NodeApiFp(this.configuration).nodeInspect(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List nodes
     * @param {string} [filters] Filters to process on the nodes list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;id&#x3D;&lt;node id&gt;&#x60; - &#x60;label&#x3D;&lt;engine label&gt;&#x60; - &#x60;membership&#x3D;&#x60;(&#x60;accepted&#x60;|&#x60;pending&#x60;)&#x60; - &#x60;name&#x3D;&lt;node name&gt;&#x60; - &#x60;node.label&#x3D;&lt;node label&gt;&#x60; - &#x60;role&#x3D;&#x60;(&#x60;manager&#x60;|&#x60;worker&#x60;)&#x60; 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NodeApi
     */
    public nodeList(filters?: string, options?: RawAxiosRequestConfig) {
        return NodeApiFp(this.configuration).nodeList(filters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update a node
     * @param {string} id The ID of the node
     * @param {number} version The version number of the node object being updated. This is required to avoid conflicting writes. 
     * @param {NodeSpec} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NodeApi
     */
    public nodeUpdate(id: string, version: number, body?: NodeSpec, options?: RawAxiosRequestConfig) {
        return NodeApiFp(this.configuration).nodeUpdate(id, version, body, options).then((request) => request(this.axios, this.basePath));
    }
}

