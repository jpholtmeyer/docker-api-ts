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
import type { Task } from '../models';
/**
 * TaskApi - axios parameter creator
 */
export const TaskApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Inspect a task
         * @param {string} id ID of the task
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskInspect: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('taskInspect', 'id', id)
            const localVarPath = `/tasks/{id}`
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
         * @summary List tasks
         * @param {string} [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the tasks list.  Available filters:  - &#x60;desired-state&#x3D;(running | shutdown | accepted)&#x60; - &#x60;id&#x3D;&lt;task id&gt;&#x60; - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; - &#x60;name&#x3D;&lt;task name&gt;&#x60; - &#x60;node&#x3D;&lt;node id or name&gt;&#x60; - &#x60;service&#x3D;&lt;service name&gt;&#x60; 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskList: async (filters?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/tasks`;
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
         * Get `stdout` and `stderr` logs from a task. See also [`/containers/{id}/logs`](#operation/ContainerLogs).  **Note**: This endpoint works only for services with the `local`, `json-file` or `journald` logging drivers. 
         * @summary Get task logs
         * @param {string} id ID of the task
         * @param {boolean} [details] Show task context and extra details provided to logs.
         * @param {boolean} [follow] Keep connection after returning logs.
         * @param {boolean} [stdout] Return logs from &#x60;stdout&#x60;
         * @param {boolean} [stderr] Return logs from &#x60;stderr&#x60;
         * @param {number} [since] Only return logs since this time, as a UNIX timestamp
         * @param {boolean} [timestamps] Add timestamps to every log line
         * @param {string} [tail] Only return this number of log lines from the end of the logs. Specify as an integer or &#x60;all&#x60; to output all log lines. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskLogs: async (id: string, details?: boolean, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, timestamps?: boolean, tail?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('taskLogs', 'id', id)
            const localVarPath = `/tasks/{id}/logs`
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

            if (details !== undefined) {
                localVarQueryParameter['details'] = details;
            }

            if (follow !== undefined) {
                localVarQueryParameter['follow'] = follow;
            }

            if (stdout !== undefined) {
                localVarQueryParameter['stdout'] = stdout;
            }

            if (stderr !== undefined) {
                localVarQueryParameter['stderr'] = stderr;
            }

            if (since !== undefined) {
                localVarQueryParameter['since'] = since;
            }

            if (timestamps !== undefined) {
                localVarQueryParameter['timestamps'] = timestamps;
            }

            if (tail !== undefined) {
                localVarQueryParameter['tail'] = tail;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TaskApi - functional programming interface
 */
export const TaskApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TaskApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Inspect a task
         * @param {string} id ID of the task
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async taskInspect(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Task>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.taskInspect(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TaskApi.taskInspect']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List tasks
         * @param {string} [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the tasks list.  Available filters:  - &#x60;desired-state&#x3D;(running | shutdown | accepted)&#x60; - &#x60;id&#x3D;&lt;task id&gt;&#x60; - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; - &#x60;name&#x3D;&lt;task name&gt;&#x60; - &#x60;node&#x3D;&lt;node id or name&gt;&#x60; - &#x60;service&#x3D;&lt;service name&gt;&#x60; 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async taskList(filters?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Task>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.taskList(filters, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TaskApi.taskList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get `stdout` and `stderr` logs from a task. See also [`/containers/{id}/logs`](#operation/ContainerLogs).  **Note**: This endpoint works only for services with the `local`, `json-file` or `journald` logging drivers. 
         * @summary Get task logs
         * @param {string} id ID of the task
         * @param {boolean} [details] Show task context and extra details provided to logs.
         * @param {boolean} [follow] Keep connection after returning logs.
         * @param {boolean} [stdout] Return logs from &#x60;stdout&#x60;
         * @param {boolean} [stderr] Return logs from &#x60;stderr&#x60;
         * @param {number} [since] Only return logs since this time, as a UNIX timestamp
         * @param {boolean} [timestamps] Add timestamps to every log line
         * @param {string} [tail] Only return this number of log lines from the end of the logs. Specify as an integer or &#x60;all&#x60; to output all log lines. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async taskLogs(id: string, details?: boolean, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, timestamps?: boolean, tail?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<File>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.taskLogs(id, details, follow, stdout, stderr, since, timestamps, tail, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TaskApi.taskLogs']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * TaskApi - factory interface
 */
export const TaskApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TaskApiFp(configuration)
    return {
        /**
         * 
         * @summary Inspect a task
         * @param {string} id ID of the task
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskInspect(id: string, options?: any): AxiosPromise<Task> {
            return localVarFp.taskInspect(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List tasks
         * @param {string} [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the tasks list.  Available filters:  - &#x60;desired-state&#x3D;(running | shutdown | accepted)&#x60; - &#x60;id&#x3D;&lt;task id&gt;&#x60; - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; - &#x60;name&#x3D;&lt;task name&gt;&#x60; - &#x60;node&#x3D;&lt;node id or name&gt;&#x60; - &#x60;service&#x3D;&lt;service name&gt;&#x60; 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskList(filters?: string, options?: any): AxiosPromise<Array<Task>> {
            return localVarFp.taskList(filters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get `stdout` and `stderr` logs from a task. See also [`/containers/{id}/logs`](#operation/ContainerLogs).  **Note**: This endpoint works only for services with the `local`, `json-file` or `journald` logging drivers. 
         * @summary Get task logs
         * @param {string} id ID of the task
         * @param {boolean} [details] Show task context and extra details provided to logs.
         * @param {boolean} [follow] Keep connection after returning logs.
         * @param {boolean} [stdout] Return logs from &#x60;stdout&#x60;
         * @param {boolean} [stderr] Return logs from &#x60;stderr&#x60;
         * @param {number} [since] Only return logs since this time, as a UNIX timestamp
         * @param {boolean} [timestamps] Add timestamps to every log line
         * @param {string} [tail] Only return this number of log lines from the end of the logs. Specify as an integer or &#x60;all&#x60; to output all log lines. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskLogs(id: string, details?: boolean, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, timestamps?: boolean, tail?: string, options?: any): AxiosPromise<File> {
            return localVarFp.taskLogs(id, details, follow, stdout, stderr, since, timestamps, tail, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TaskApi - object-oriented interface
 * @class TaskApi
 * @extends {BaseAPI}
 */
export class TaskApi extends BaseAPI {
    /**
     * 
     * @summary Inspect a task
     * @param {string} id ID of the task
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public taskInspect(id: string, options?: RawAxiosRequestConfig) {
        return TaskApiFp(this.configuration).taskInspect(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List tasks
     * @param {string} [filters] A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the tasks list.  Available filters:  - &#x60;desired-state&#x3D;(running | shutdown | accepted)&#x60; - &#x60;id&#x3D;&lt;task id&gt;&#x60; - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; - &#x60;name&#x3D;&lt;task name&gt;&#x60; - &#x60;node&#x3D;&lt;node id or name&gt;&#x60; - &#x60;service&#x3D;&lt;service name&gt;&#x60; 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public taskList(filters?: string, options?: RawAxiosRequestConfig) {
        return TaskApiFp(this.configuration).taskList(filters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get `stdout` and `stderr` logs from a task. See also [`/containers/{id}/logs`](#operation/ContainerLogs).  **Note**: This endpoint works only for services with the `local`, `json-file` or `journald` logging drivers. 
     * @summary Get task logs
     * @param {string} id ID of the task
     * @param {boolean} [details] Show task context and extra details provided to logs.
     * @param {boolean} [follow] Keep connection after returning logs.
     * @param {boolean} [stdout] Return logs from &#x60;stdout&#x60;
     * @param {boolean} [stderr] Return logs from &#x60;stderr&#x60;
     * @param {number} [since] Only return logs since this time, as a UNIX timestamp
     * @param {boolean} [timestamps] Add timestamps to every log line
     * @param {string} [tail] Only return this number of log lines from the end of the logs. Specify as an integer or &#x60;all&#x60; to output all log lines. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public taskLogs(id: string, details?: boolean, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, timestamps?: boolean, tail?: string, options?: RawAxiosRequestConfig) {
        return TaskApiFp(this.configuration).taskLogs(id, details, follow, stdout, stderr, since, timestamps, tail, options).then((request) => request(this.axios, this.basePath));
    }
}

