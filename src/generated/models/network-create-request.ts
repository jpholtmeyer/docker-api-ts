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


// May contain unused imports in some cases
// @ts-ignore
import type { ConfigReference } from './config-reference.js';
// May contain unused imports in some cases
// @ts-ignore
import type { IPAM } from './ipam.js';

/**
 * 
 * @interface NetworkCreateRequest
 */
export interface NetworkCreateRequest {
    /**
     * The network\'s name.
     * @type {string}
     */
    'Name': string;
    /**
     * Check for networks with duplicate names. Since Network is primarily keyed based on a random ID and not on the name, and network name is strictly a user-friendly alias to the network which is uniquely identified using ID, there is no guaranteed way to check for duplicates. CheckDuplicate is there to provide a best effort checking of any networks which has the same name but it is not guaranteed to catch all name collisions. 
     * @type {boolean}
     */
    'CheckDuplicate'?: boolean;
    /**
     * Name of the network driver plugin to use.
     * @type {string}
     */
    'Driver'?: string;
    /**
     * The level at which the network exists (e.g. `swarm` for cluster-wide or `local` for machine level). 
     * @type {string}
     */
    'Scope'?: string;
    /**
     * Restrict external access to the network.
     * @type {boolean}
     */
    'Internal'?: boolean;
    /**
     * Globally scoped network is manually attachable by regular containers from workers in swarm mode. 
     * @type {boolean}
     */
    'Attachable'?: boolean;
    /**
     * Ingress network is the network which provides the routing-mesh in swarm mode. 
     * @type {boolean}
     */
    'Ingress'?: boolean;
    /**
     * Creates a config-only network. Config-only networks are placeholder networks for network configurations to be used by other networks. Config-only networks cannot be used directly to run containers or services. 
     * @type {boolean}
     */
    'ConfigOnly'?: boolean;
    /**
     * 
     * @type {ConfigReference}
     */
    'ConfigFrom'?: ConfigReference;
    /**
     * 
     * @type {IPAM}
     */
    'IPAM'?: IPAM;
    /**
     * Enable IPv6 on the network.
     * @type {boolean}
     */
    'EnableIPv6'?: boolean;
    /**
     * Network specific options to be used by the drivers.
     * @type {{ [key: string]: string; }}
     */
    'Options'?: { [key: string]: string; };
    /**
     * User-defined key/value metadata.
     * @type {{ [key: string]: string; }}
     */
    'Labels'?: { [key: string]: string; };
}

