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
import type { Commit } from './commit.js';
// May contain unused imports in some cases
// @ts-ignore
import type { GenericResourcesInner } from './generic-resources-inner.js';
// May contain unused imports in some cases
// @ts-ignore
import type { PluginsInfo } from './plugins-info.js';
// May contain unused imports in some cases
// @ts-ignore
import type { RegistryServiceConfig } from './registry-service-config.js';
// May contain unused imports in some cases
// @ts-ignore
import type { Runtime } from './runtime.js';
// May contain unused imports in some cases
// @ts-ignore
import type { SwarmInfo } from './swarm-info.js';
// May contain unused imports in some cases
// @ts-ignore
import type { SystemInfoDefaultAddressPoolsInner } from './system-info-default-address-pools-inner.js';

/**
 * 
 * @interface SystemInfo
 */
export interface SystemInfo {
    /**
     * Unique identifier of the daemon.  <p><br /></p>  > **Note**: The format of the ID itself is not part of the API, and > should not be considered stable. 
     * @type {string}
     */
    'ID'?: string;
    /**
     * Total number of containers on the host.
     * @type {number}
     */
    'Containers'?: number;
    /**
     * Number of containers with status `\"running\"`. 
     * @type {number}
     */
    'ContainersRunning'?: number;
    /**
     * Number of containers with status `\"paused\"`. 
     * @type {number}
     */
    'ContainersPaused'?: number;
    /**
     * Number of containers with status `\"stopped\"`. 
     * @type {number}
     */
    'ContainersStopped'?: number;
    /**
     * Total number of images on the host.  Both _tagged_ and _untagged_ (dangling) images are counted. 
     * @type {number}
     */
    'Images'?: number;
    /**
     * Name of the storage driver in use.
     * @type {string}
     */
    'Driver'?: string;
    /**
     * Information specific to the storage driver, provided as \"label\" / \"value\" pairs.  This information is provided by the storage driver, and formatted in a way consistent with the output of `docker info` on the command line.  <p><br /></p>  > **Note**: The information returned in this field, including the > formatting of values and labels, should not be considered stable, > and may change without notice. 
     * @type {Array<Array<string>>}
     */
    'DriverStatus'?: Array<Array<string>>;
    /**
     * Root directory of persistent Docker state.  Defaults to `/var/lib/docker` on Linux, and `C:\\ProgramData\\docker` on Windows. 
     * @type {string}
     */
    'DockerRootDir'?: string;
    /**
     * 
     * @type {PluginsInfo}
     */
    'Plugins'?: PluginsInfo;
    /**
     * Indicates if the host has memory limit support enabled.
     * @type {boolean}
     */
    'MemoryLimit'?: boolean;
    /**
     * Indicates if the host has memory swap limit support enabled.
     * @type {boolean}
     */
    'SwapLimit'?: boolean;
    /**
     * Indicates if the host has kernel memory limit support enabled.  <p><br /></p>  > **Deprecated**: This field is deprecated as the kernel 5.4 deprecated > `kmem.limit_in_bytes`. 
     * @type {boolean}
     */
    'KernelMemory'?: boolean;
    /**
     * Indicates if the host has kernel memory TCP limit support enabled.  Kernel memory TCP limits are not supported when using cgroups v2, which does not support the corresponding `memory.kmem.tcp.limit_in_bytes` cgroup. 
     * @type {boolean}
     */
    'KernelMemoryTCP'?: boolean;
    /**
     * Indicates if CPU CFS(Completely Fair Scheduler) period is supported by the host. 
     * @type {boolean}
     */
    'CpuCfsPeriod'?: boolean;
    /**
     * Indicates if CPU CFS(Completely Fair Scheduler) quota is supported by the host. 
     * @type {boolean}
     */
    'CpuCfsQuota'?: boolean;
    /**
     * Indicates if CPU Shares limiting is supported by the host. 
     * @type {boolean}
     */
    'CPUShares'?: boolean;
    /**
     * Indicates if CPUsets (cpuset.cpus, cpuset.mems) are supported by the host.  See [cpuset(7)](https://www.kernel.org/doc/Documentation/cgroup-v1/cpusets.txt) 
     * @type {boolean}
     */
    'CPUSet'?: boolean;
    /**
     * Indicates if the host kernel has PID limit support enabled.
     * @type {boolean}
     */
    'PidsLimit'?: boolean;
    /**
     * Indicates if OOM killer disable is supported on the host.
     * @type {boolean}
     */
    'OomKillDisable'?: boolean;
    /**
     * Indicates IPv4 forwarding is enabled.
     * @type {boolean}
     */
    'IPv4Forwarding'?: boolean;
    /**
     * Indicates if `bridge-nf-call-iptables` is available on the host.
     * @type {boolean}
     */
    'BridgeNfIptables'?: boolean;
    /**
     * Indicates if `bridge-nf-call-ip6tables` is available on the host.
     * @type {boolean}
     */
    'BridgeNfIp6tables'?: boolean;
    /**
     * Indicates if the daemon is running in debug-mode / with debug-level logging enabled. 
     * @type {boolean}
     */
    'Debug'?: boolean;
    /**
     * The total number of file Descriptors in use by the daemon process.  This information is only returned if debug-mode is enabled. 
     * @type {number}
     */
    'NFd'?: number;
    /**
     * The  number of goroutines that currently exist.  This information is only returned if debug-mode is enabled. 
     * @type {number}
     */
    'NGoroutines'?: number;
    /**
     * Current system-time in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds. 
     * @type {string}
     */
    'SystemTime'?: string;
    /**
     * The logging driver to use as a default for new containers. 
     * @type {string}
     */
    'LoggingDriver'?: string;
    /**
     * The driver to use for managing cgroups. 
     * @type {string}
     */
    'CgroupDriver'?: SystemInfoCgroupDriverEnum;
    /**
     * The version of the cgroup. 
     * @type {string}
     */
    'CgroupVersion'?: SystemInfoCgroupVersionEnum;
    /**
     * Number of event listeners subscribed.
     * @type {number}
     */
    'NEventsListener'?: number;
    /**
     * Kernel version of the host.  On Linux, this information obtained from `uname`. On Windows this information is queried from the <kbd>HKEY_LOCAL_MACHINE\\\\SOFTWARE\\\\Microsoft\\\\Windows NT\\\\CurrentVersion\\\\</kbd> registry value, for example _\"10.0 14393 (14393.1198.amd64fre.rs1_release_sec.170427-1353)\"_. 
     * @type {string}
     */
    'KernelVersion'?: string;
    /**
     * Name of the host\'s operating system, for example: \"Ubuntu 16.04.2 LTS\" or \"Windows Server 2016 Datacenter\" 
     * @type {string}
     */
    'OperatingSystem'?: string;
    /**
     * Version of the host\'s operating system  <p><br /></p>  > **Note**: The information returned in this field, including its > very existence, and the formatting of values, should not be considered > stable, and may change without notice. 
     * @type {string}
     */
    'OSVersion'?: string;
    /**
     * Generic type of the operating system of the host, as returned by the Go runtime (`GOOS`).  Currently returned values are \"linux\" and \"windows\". A full list of possible values can be found in the [Go documentation](https://go.dev/doc/install/source#environment). 
     * @type {string}
     */
    'OSType'?: string;
    /**
     * Hardware architecture of the host, as returned by the Go runtime (`GOARCH`).  A full list of possible values can be found in the [Go documentation](https://go.dev/doc/install/source#environment). 
     * @type {string}
     */
    'Architecture'?: string;
    /**
     * The number of logical CPUs usable by the daemon.  The number of available CPUs is checked by querying the operating system when the daemon starts. Changes to operating system CPU allocation after the daemon is started are not reflected. 
     * @type {number}
     */
    'NCPU'?: number;
    /**
     * Total amount of physical memory available on the host, in bytes. 
     * @type {number}
     */
    'MemTotal'?: number;
    /**
     * Address / URL of the index server that is used for image search, and as a default for user authentication for Docker Hub and Docker Cloud. 
     * @type {string}
     */
    'IndexServerAddress'?: string;
    /**
     * 
     * @type {RegistryServiceConfig}
     */
    'RegistryConfig'?: RegistryServiceConfig | null;
    /**
     * User-defined resources can be either Integer resources (e.g, `SSD=3`) or String resources (e.g, `GPU=UUID1`). 
     * @type {Array<GenericResourcesInner>}
     */
    'GenericResources'?: Array<GenericResourcesInner>;
    /**
     * HTTP-proxy configured for the daemon. This value is obtained from the [`HTTP_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html) environment variable. Credentials ([user info component](https://tools.ietf.org/html/rfc3986#section-3.2.1)) in the proxy URL are masked in the API response.  Containers do not automatically inherit this configuration. 
     * @type {string}
     */
    'HttpProxy'?: string;
    /**
     * HTTPS-proxy configured for the daemon. This value is obtained from the [`HTTPS_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html) environment variable. Credentials ([user info component](https://tools.ietf.org/html/rfc3986#section-3.2.1)) in the proxy URL are masked in the API response.  Containers do not automatically inherit this configuration. 
     * @type {string}
     */
    'HttpsProxy'?: string;
    /**
     * Comma-separated list of domain extensions for which no proxy should be used. This value is obtained from the [`NO_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html) environment variable.  Containers do not automatically inherit this configuration. 
     * @type {string}
     */
    'NoProxy'?: string;
    /**
     * Hostname of the host.
     * @type {string}
     */
    'Name'?: string;
    /**
     * User-defined labels (key/value metadata) as set on the daemon.  <p><br /></p>  > **Note**: When part of a Swarm, nodes can both have _daemon_ labels, > set through the daemon configuration, and _node_ labels, set from a > manager node in the Swarm. Node labels are not included in this > field. Node labels can be retrieved using the `/nodes/(id)` endpoint > on a manager node in the Swarm. 
     * @type {Array<string>}
     */
    'Labels'?: Array<string>;
    /**
     * Indicates if experimental features are enabled on the daemon. 
     * @type {boolean}
     */
    'ExperimentalBuild'?: boolean;
    /**
     * Version string of the daemon. 
     * @type {string}
     */
    'ServerVersion'?: string;
    /**
     * URL of the distributed storage backend.   The storage backend is used for multihost networking (to store network and endpoint information) and by the node discovery mechanism.  <p><br /></p>  > **Deprecated**: This field is only propagated when using standalone Swarm > mode, and overlay networking using an external k/v store. Overlay > networks with Swarm mode enabled use the built-in raft store, and > this field will be empty. 
     * @type {string}
     */
    'ClusterStore'?: string;
    /**
     * The network endpoint that the Engine advertises for the purpose of node discovery. ClusterAdvertise is a `host:port` combination on which the daemon is reachable by other hosts.  <p><br /></p>  > **Deprecated**: This field is only propagated when using standalone Swarm > mode, and overlay networking using an external k/v store. Overlay > networks with Swarm mode enabled use the built-in raft store, and > this field will be empty. 
     * @type {string}
     */
    'ClusterAdvertise'?: string;
    /**
     * List of [OCI compliant](https://github.com/opencontainers/runtime-spec) runtimes configured on the daemon. Keys hold the \"name\" used to reference the runtime.  The Docker daemon relies on an OCI compliant runtime (invoked via the `containerd` daemon) as its interface to the Linux kernel namespaces, cgroups, and SELinux.  The default runtime is `runc`, and automatically configured. Additional runtimes can be configured by the user and will be listed here. 
     * @type {{ [key: string]: Runtime; }}
     */
    'Runtimes'?: { [key: string]: Runtime; };
    /**
     * Name of the default OCI runtime that is used when starting containers.  The default can be overridden per-container at create time. 
     * @type {string}
     */
    'DefaultRuntime'?: string;
    /**
     * 
     * @type {SwarmInfo}
     */
    'Swarm'?: SwarmInfo;
    /**
     * Indicates if live restore is enabled.  If enabled, containers are kept running when the daemon is shutdown or upon daemon start if running containers are detected. 
     * @type {boolean}
     */
    'LiveRestoreEnabled'?: boolean;
    /**
     * Represents the isolation technology to use as a default for containers. The supported values are platform-specific.  If no isolation value is specified on daemon start, on Windows client, the default is `hyperv`, and on Windows server, the default is `process`.  This option is currently not used on other platforms. 
     * @type {string}
     */
    'Isolation'?: SystemInfoIsolationEnum;
    /**
     * Name and, optional, path of the `docker-init` binary.  If the path is omitted, the daemon searches the host\'s `$PATH` for the binary and uses the first result. 
     * @type {string}
     */
    'InitBinary'?: string;
    /**
     * 
     * @type {Commit}
     */
    'ContainerdCommit'?: Commit;
    /**
     * 
     * @type {Commit}
     */
    'RuncCommit'?: Commit;
    /**
     * 
     * @type {Commit}
     */
    'InitCommit'?: Commit;
    /**
     * List of security features that are enabled on the daemon, such as apparmor, seccomp, SELinux, user-namespaces (userns), and rootless.  Additional configuration options for each security feature may be present, and are included as a comma-separated list of key/value pairs. 
     * @type {Array<string>}
     */
    'SecurityOptions'?: Array<string>;
    /**
     * Reports a summary of the product license on the daemon.  If a commercial license has been applied to the daemon, information such as number of nodes, and expiration are included. 
     * @type {string}
     */
    'ProductLicense'?: string;
    /**
     * List of custom default address pools for local networks, which can be specified in the daemon.json file or dockerd option.  Example: a Base \"10.10.0.0/16\" with Size 24 will define the set of 256 10.10.[0-255].0/24 address pools. 
     * @type {Array<SystemInfoDefaultAddressPoolsInner>}
     */
    'DefaultAddressPools'?: Array<SystemInfoDefaultAddressPoolsInner>;
    /**
     * List of warnings / informational messages about missing features, or issues related to the daemon configuration.  These messages can be printed by the client as information to the user. 
     * @type {Array<string>}
     */
    'Warnings'?: Array<string>;
}

/**
    * @enum {string}
    */
export enum SystemInfoCgroupDriverEnum {
    Cgroupfs = 'cgroupfs',
    Systemd = 'systemd',
    None = 'none'
}
/**
    * @enum {string}
    */
export enum SystemInfoCgroupVersionEnum {
    _1 = '1',
    _2 = '2'
}
/**
    * @enum {string}
    */
export enum SystemInfoIsolationEnum {
    Default = 'default',
    Hyperv = 'hyperv',
    Process = 'process'
}


