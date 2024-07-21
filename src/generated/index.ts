/* tslint:disable */
/* eslint-disable */

import { Configuration, ConfigurationParameters } from "./configuration.js"

import {
  AuthConfig,
  ConfigApi,
  ConfigCreateRequest,
  ConfigSpec,
  ContainerApi,
  ContainerConfig,
  ContainerCreateRequest,
  ContainerUpdateRequest,
  ContainerWaitConditionEnum,
  DistributionApi,
  ExecApi,
  ExecConfig,
  ExecStartConfig,
  IdResponse,
  ImageApi,
  ImageBuildContentTypeEnum,
  ImageBuildVersionEnum,
  NetworkApi,
  NetworkConnectRequest,
  NetworkCreateRequest,
  NetworkDisconnectRequest,
  NodeApi,
  NodeSpec,
  PluginApi,
  PluginPrivilege,
  SecretApi,
  SecretCreateRequest,
  SecretSpec,
  ServiceApi,
  ServiceCreateRequest,
  ServiceUpdateRegistryAuthFromEnum,
  ServiceUpdateRequest,
  SessionApi,
  SwarmApi,
  SwarmInitRequest,
  SwarmJoinRequest,
  SwarmSpec,
  SwarmUnlockRequest,
  SystemApi,
  TaskApi,
  VolumeApi,
  VolumeCreateOptions,
} from "./api.js"

import { default as axios, AxiosPromise, AxiosInstance, RawAxiosRequestConfig, AxiosResponse } from "axios"

// Export types so that TypeDoc can create proper links in the documentation
export type { ConfigurationParameters, Configuration } from "./configuration.js"
export type {
  Address,
  AuthConfig,
  BuildCache,
  BuildCacheTypeEnum,
  BuildPruneResponse,
  ClusterInfo,
  Commit,
  Config,
  ConfigCreateRequest,
  ConfigReference,
  ConfigSpec,
  ContainerChangeResponseItem,
  ContainerConfig,
  ContainerCreateRequest,
  ContainerCreateResponse,
  ContainerInspectResponse,
  ContainerPruneResponse,
  ContainerState,
  ContainerStateStatusEnum,
  ContainerSummary,
  ContainerSummaryHostConfig,
  ContainerSummaryNetworkSettings,
  ContainerTopResponse,
  ContainerUpdateRequest,
  ContainerUpdateResponse,
  ContainerWaitExitError,
  ContainerWaitResponse,
  DeviceMapping,
  DeviceRequest,
  DistributionInspect,
  Driver,
  EndpointIPAMConfig,
  EndpointPortConfig,
  EndpointPortConfigProtocolEnum,
  EndpointPortConfigPublishModeEnum,
  EndpointSettings,
  EndpointSpec,
  EndpointSpecModeEnum,
  EngineDescription,
  EngineDescriptionPluginsInner,
  EventActor,
  EventMessage,
  EventMessageScopeEnum,
  EventMessageTypeEnum,
  ExecConfig,
  ExecInspectResponse,
  ExecStartConfig,
  GenericResourcesInner,
  GenericResourcesInnerDiscreteResourceSpec,
  GenericResourcesInnerNamedResourceSpec,
  GraphDriverData,
  Health,
  HealthcheckResult,
  HealthConfig,
  HealthStatusEnum,
  HistoryResponseItem,
  HostConfig,
  HostConfigAllOfLogConfig,
  HostConfigAllOfLogConfigTypeEnum,
  HostConfigCgroupnsModeEnum,
  HostConfigIsolationEnum,
  IdResponse,
  ImageConfig,
  ImageDeleteResponseItem,
  ImageInspect,
  ImageInspectMetadata,
  ImageInspectRootFS,
  ImagePruneResponse,
  ImageSearchResponseItem,
  ImageSummary,
  IndexInfo,
  IPAM,
  IPAMConfig,
  JoinTokens,
  Limit,
  LocalNodeState,
  ManagerStatus,
  Mount,
  MountBindOptions,
  MountBindOptionsPropagationEnum,
  MountPoint,
  MountPointTypeEnum,
  MountTmpfsOptions,
  MountTypeEnum,
  MountVolumeOptions,
  MountVolumeOptionsDriverConfig,
  Network,
  NetworkAttachmentConfig,
  NetworkConnectRequest,
  NetworkContainer,
  NetworkCreateRequest,
  NetworkCreateResponse,
  NetworkDisconnectRequest,
  NetworkingConfig,
  NetworkPruneResponse,
  NetworkSettings,
  Node,
  NodeDescription,
  NodeSpec,
  NodeSpecAvailabilityEnum,
  NodeSpecRoleEnum,
  NodeState,
  NodeStatus,
  ObjectVersion,
  OCIDescriptor,
  OCIPlatform,
  PeerInfo,
  PeerNode,
  Platform,
  Plugin,
  PluginConfig,
  PluginConfigArgs,
  PluginConfigInterface,
  PluginConfigInterfaceProtocolSchemeEnum,
  PluginConfigLinux,
  PluginConfigNetwork,
  PluginConfigRootfs,
  PluginConfigUser,
  PluginDevice,
  PluginEnv,
  PluginInterfaceType,
  PluginMount,
  PluginPrivilege,
  PluginSettings,
  PluginsInfo,
  Port,
  PortBinding,
  PortTypeEnum,
  ProcessConfig,
  Reachability,
  RegistryServiceConfig,
  ResourceObject,
  Resources,
  ResourcesBlkioWeightDeviceInner,
  ResourcesUlimitsInner,
  RestartPolicy,
  RestartPolicyNameEnum,
  Runtime,
  Secret,
  SecretCreateRequest,
  SecretSpec,
  Service,
  ServiceCreateRequest,
  ServiceCreateResponse,
  ServiceEndpoint,
  ServiceEndpointVirtualIPsInner,
  ServiceJobStatus,
  ServiceServiceStatus,
  ServiceSpec,
  ServiceSpecMode,
  ServiceSpecModeReplicated,
  ServiceSpecModeReplicatedJob,
  ServiceSpecRollbackConfig,
  ServiceSpecRollbackConfigFailureActionEnum,
  ServiceSpecRollbackConfigOrderEnum,
  ServiceSpecUpdateConfig,
  ServiceSpecUpdateConfigFailureActionEnum,
  ServiceSpecUpdateConfigOrderEnum,
  ServiceUpdateRequest,
  ServiceUpdateResponse,
  ServiceUpdateStatus,
  ServiceUpdateStatusStateEnum,
  Swarm,
  SwarmInfo,
  SwarmInitRequest,
  SwarmJoinRequest,
  SwarmSpec,
  SwarmSpecCAConfig,
  SwarmSpecCAConfigExternalCAsInner,
  SwarmSpecCAConfigExternalCAsInnerProtocolEnum,
  SwarmSpecDispatcher,
  SwarmSpecEncryptionConfig,
  SwarmSpecOrchestration,
  SwarmSpecRaft,
  SwarmSpecTaskDefaults,
  SwarmSpecTaskDefaultsLogDriver,
  SwarmUnlockRequest,
  SystemAuthResponse,
  SystemDataUsageResponse,
  SystemInfo,
  SystemInfoCgroupDriverEnum,
  SystemInfoCgroupVersionEnum,
  SystemInfoDefaultAddressPoolsInner,
  SystemInfoIsolationEnum,
  SystemVersion,
  SystemVersionComponentsInner,
  SystemVersionPlatform,
  Task,
  TaskSpec,
  TaskSpecContainerSpec,
  TaskSpecContainerSpecConfigsInner,
  TaskSpecContainerSpecConfigsInnerFile,
  TaskSpecContainerSpecDNSConfig,
  TaskSpecContainerSpecIsolationEnum,
  TaskSpecContainerSpecPrivileges,
  TaskSpecContainerSpecPrivilegesCredentialSpec,
  TaskSpecContainerSpecPrivilegesSELinuxContext,
  TaskSpecContainerSpecSecretsInner,
  TaskSpecContainerSpecSecretsInnerFile,
  TaskSpecLogDriver,
  TaskSpecNetworkAttachmentSpec,
  TaskSpecPlacement,
  TaskSpecPlacementPreferencesInner,
  TaskSpecPlacementPreferencesInnerSpread,
  TaskSpecPluginSpec,
  TaskSpecResources,
  TaskSpecRestartPolicy,
  TaskSpecRestartPolicyConditionEnum,
  TaskState,
  TaskStatus,
  TaskStatusContainerStatus,
  ThrottleDevice,
  TLSInfo,
  UnlockKeyResponse,
  Volume,
  VolumeCreateOptions,
  VolumeListResponse,
  VolumePruneResponse,
  VolumeScopeEnum,
  VolumeUsageData,
} from "./api.js"

export {
  ContainerWaitConditionEnum,
  ImageBuildContentTypeEnum,
  ImageBuildVersionEnum,
  ServiceUpdateRegistryAuthFromEnum,
} from "./api.js"

// Prevent Axios from throwing errors for 4xx and 5xx responses
axios.defaults.validateStatus = function () {
  return true
}

/**
   *
   * Entrypoint for the Docker API
   * @param {ConfigurationParameters} [config] {@link ConfigurationParameters}
   */
export class Docker {
  config: Configuration
  private configApi: ConfigApi
  private containerApi: ContainerApi
  private distributionApi: DistributionApi
  private execApi: ExecApi
  private imageApi: ImageApi
  private networkApi: NetworkApi
  private nodeApi: NodeApi
  private pluginApi: PluginApi
  private secretApi: SecretApi
  private serviceApi: ServiceApi
  private swarmApi: SwarmApi
  private systemApi: SystemApi
  private sessionApi: SessionApi
  private taskApi: TaskApi
  private volumeApi: VolumeApi

  constructor(config: ConfigurationParameters) {
    this.config = new Configuration(config)
    this.configApi = new ConfigApi(this.config)
    this.containerApi = new ContainerApi(this.config)
    this.distributionApi = new DistributionApi(this.config)
    this.execApi = new ExecApi(this.config)
    this.imageApi = new ImageApi(this.config)
    this.networkApi = new NetworkApi(this.config)
    this.nodeApi = new NodeApi(this.config)
    this.pluginApi = new PluginApi(this.config)
    this.secretApi = new SecretApi(this.config)
    this.serviceApi = new ServiceApi(this.config)
    this.sessionApi = new SessionApi(this.config)
    this.swarmApi = new SwarmApi(this.config)
    this.systemApi = new SystemApi(this.config)
    this.taskApi = new TaskApi(this.config)
    this.volumeApi = new VolumeApi(this.config)
  }

  private async poll({
    apiCall,
    interval,
    shouldStop,
  }: {
    apiCall: () => Promise<any>
    interval: number
    shouldStop: (response: any) => boolean
  }): Promise<any> {
    return new Promise((resolve, reject) => {
      const poll = async () => {
        try {
          const response = await apiCall()
          if (shouldStop(response)) {
            clearInterval(intervalId)
            resolve(response)
          }
        } catch (error) {
          clearInterval(intervalId)
          reject(error)
        }
      }

      const intervalId = setInterval(poll, interval)
      poll() // Initial call to start immediately
    })
  }

  //#region Config
  /**
   *
   * Create a config
   * @param {ConfigCreateRequest} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @group Config API
   * @returns Possible response codes:
   * - 201 (Created)
   * - 400 (Bad Request)
   * - 500 (Internal Server Error)
   */
  public configCreate(
    body?: ConfigCreateRequest,
    options?: RawAxiosRequestConfig,
  ): Promise<AxiosResponse<IdResponse, any>> {
    return this.configApi.configCreate(body, options)
  }

  /**
   *
   * Delete a config
   * @param {string} id ID of the config
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @group Config API
   * @returns Possible response codes:
   * - 204 (No Content)
   * - 404 (Not Found)
   * - 500 (Internal Server Error)
   */
  public configDelete(id: string, options?: RawAxiosRequestConfig) {
    return this.configApi.configDelete(id, options)
  }

  /**
   * Retrieve detailed information about a specific config.
   *
   * @param {string} id The ID of the config to inspect.
   * @param {*} [options] Optional parameters to override the HTTP request.
   * @throws {RequiredError}
   * @group Config API
   * @returns Possible response codes:
   * - 200 (OK)
   * - 404 (Not Found)
   * - 500 (Internal Server Error)
   */
  public configInspect(id: string, options?: RawAxiosRequestConfig) {
    return this.configApi.configInspect(id, options)
  }

  /**
   * List all configs.
   *
   * @param {string} [filters] A JSON encoded value of the filters (a `map[string][]string`) to process on the configs list. Available filters:
   * - `id=<config id>`
   * - `label=<key>` or `label=<key>=<value>`
   * - `name=<config name>`
   * - `names=<config name>`
   * @param {*} [options] Override HTTP request option.
   * @throws {RequiredError}
   * @group Config API
   * @returns Possible response codes:
   * - 200 (OK)
   * - 500 (Internal Server Error)
   */
  public configList(filters?: string, options?: RawAxiosRequestConfig) {
    return this.configApi.configList(filters, options)
  }

  /**
   * Update a Config
   *
   * @param {string} id - The ID or name of the config.
   * @param {number} version - The version number of the config object being updated. This is required to avoid conflicting writes.
   * @param {Object} params - Optional parameters
   * @param {ConfigSpec} [params.body] - The spec of the config to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the ConfigInspect endpoint response values.
   * @param {*} [params.options] - Optional parameters to override the HTTP request.
   * @throws {RequiredError}
   * @group Config API
   * @returns Possible response codes:
   * - 200 (OK): The request was successful, and the server responded with the requested data.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   */
  public configUpdate(
    id: string,
    version: number,
    { body, options }: { body?: ConfigSpec; options?: RawAxiosRequestConfig } = {},
  ) {
    return this.configApi.configUpdate(id, version, body, options)
  }
  //#endregion Config

  //#region Container
  /**
   * Remove a container.
   *
   * @param {string} id - ID or name of the container
   * @param {Object} params - Optional parameters
   * @param {boolean} [params.v] - Remove anonymous volumes associated with the container.
   * @param {boolean} [params.force] - If the container is running, kill it before removing it.
   * @param {boolean} [params.link] - Remove the specified link associated with the container.
   * @param {*} [params.options] - Override HTTP request option.
   * @throws {RequiredError}
   * @group Container API
   * @returns Possible response codes:
   * - 204 (No Content): The container was successfully removed.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 409 (Conflict): The request could not be completed due to a conflict with the current state of the target resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public containerDelete(
    id: string,
    { v, force, link, options }: { v?: boolean; force?: boolean; link?: boolean; options?: RawAxiosRequestConfig } = {},
  ) {
    return this.containerApi.containerDelete(id, v, force, link, options)
  }

  /**
   * Get a tar archive of a resource in the filesystem of a container.
   *
   * @param {string} id ID or name of the container
   * @param {string} path Resource in the container’s filesystem to archive.
   * @param {*} [options] Override HTTP request options.
   * @throws {RequiredError}
   * @group Container API
   * @returns Possible response codes:
   * - 200 (OK): The request was successful, and the server responded with the requested data.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public containerArchive(id: string, path: string, options?: RawAxiosRequestConfig) {
    return this.containerApi.containerArchive(id, path, options)
  }

  /**
   * Retrieves information about files in a container. A response header `X-Docker-Container-Path-Stat` is returned, containing a base64-encoded JSON object with some filesystem header information about the path.
   * @param {string} id ID or name of the container
   * @param {string} path Resource in the container’s filesystem to archive.
   * @param {*} [options] Override HTTP request options.
   * @throws {RequiredError}
   * @group Container API
   * @returns Possible response codes:
   * - 200 (OK)
   * - 400 (Bad Request)
   * - 403 (Forbidden)
   * - 404 (Not Found)
   * - 500 (Internal Server Error)
   */
  public containerArchiveInfo(id: string, path: string, options?: RawAxiosRequestConfig) {
    // TODO: Extract value of X-Docker-Container-Path-Stat header
    return this.containerApi.containerArchiveInfo(id, path, options)
  }

  /**
   * Attach to a container to read its output or send it input. You can attach to the same container multiple times and you can reattach to containers that have been detached. Either the `stream` or `logs` parameter must be `true` for this endpoint to do anything.
   * See the [documentation for the `docker attach` command](https://docs.docker.com/engine/reference/commandline/attach/) for more details.
   *
   * ### Hijacking
   * This endpoint hijacks the HTTP connection to transport `stdin`, `stdout`, and `stderr` on the same socket.
   * This is the response from the daemon for an attach request:
   * ```
   * HTTP/1.1 200 OK
   * Content-Type: application/vnd.docker.raw-stream
   * [STREAM]
   * ```
   * After the headers and two new lines, the TCP connection can now be used for raw, bidirectional communication between the client and server.
   *
   * To hint potential proxies about connection hijacking, the Docker client can also optionally send connection upgrade headers.
   * For example, the client sends this request to upgrade the connection:
   * ```
   * POST /containers/16253994b7c4/attach?stream=1&stdout=1 HTTP/1.1
   * Upgrade: tcp
   * Connection: Upgrade
   * ```
   * The Docker daemon will respond with a `101 UPGRADED` response, and will similarly follow with the raw stream:
   * ```
   * HTTP/1.1 101 UPGRADED
   * Content-Type: application/vnd.docker.raw-stream
   * Connection: Upgrade
   * Upgrade: tcp
   * [STREAM]
   * ```
   *
   * ### Stream format
   * When the TTY setting is disabled in [`POST /containers/create`](#operation/ContainerCreate), the stream over the hijacked connection is multiplexed to separate out `stdout` and `stderr`. The stream consists of a series of frames, each containing a header and a payload.
   * The header contains the information which the stream writes (`stdout` or `stderr`). It also contains the size of the associated frame encoded in the last four bytes (`uint32`).
   * It is encoded on the first eight bytes like this:
   * ```go
   * header := [8]byte{STREAM_TYPE, 0, 0, 0, SIZE1, SIZE2, SIZE3, SIZE4}
   * ```
   * `STREAM_TYPE` can be:
   * - 0: `stdin` (is written on `stdout`)
   * - 1: `stdout`
   * - 2: `stderr`
   * `SIZE1, SIZE2, SIZE3, SIZE4` are the four bytes of the `uint32` size encoded as big endian.
   * Following the header is the payload, which is the specified number of bytes of `STREAM_TYPE`.
   * The simplest way to implement this protocol is the following:
   * 1. Read 8 bytes.
   * 2. Choose `stdout` or `stderr` depending on the first byte.
   * 3. Extract the frame size from the last four bytes.
   * 4. Read the extracted size and output it on the correct output.
   * 5. Goto 1.
   *
   * ### Stream format when using a TTY
   * When the TTY setting is enabled in [`POST /containers/create`](#operation/ContainerCreate), the stream is not multiplexed. The data exchanged over the hijacked connection is simply the raw data from the process PTY and client\'s `stdin`.
   *
   * @param {string} id ID or name of the container
   * @param {Object} [params] Optional parameters
   * @param {string} [params.detachKeys] Override the key sequence for detaching a container. Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,`, or `_`.
   * @param {boolean} [params.logs] Replay previous logs from the container. This is useful for attaching to a container that has started and you want to output everything since the container started. If `stream` is also enabled, once all the previous output has been returned, it will seamlessly transition into streaming current output.
   * @param {boolean} [params.stream] Stream attached streams from the time the request was made onwards.
   * @param {boolean} [params.stdin] Attach to `stdin`
   * @param {boolean} [params.stdout] Attach to `stdout`
   * @param {boolean} [params.stderr] Attach to `stderr`
   * @param {*} [params.options] Override HTTP request options.
   * @throws {RequiredError}
   * @group Container API
   * @returns Possible response codes:
   * - 101 (Switching Protocols): The server is switching protocols as requested by the client.
   * - 200 (OK): The request was successful, and the server responded with the requested data.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public containerAttach(
    id: string,
    params?: {
      detachKeys?: string
      logs?: boolean
      stream?: boolean
      stdin?: boolean
      stdout?: boolean
      stderr?: boolean
      options?: RawAxiosRequestConfig
    },
  ) {
    //TODO: how to implement streaming?
    return this.containerApi.containerAttach(
      id,
      params?.detachKeys,
      params?.logs,
      params?.stream,
      params?.stdin,
      params?.stdout,
      params?.stderr,
      params?.options,
    )
  }

  /**
   * Attach to a container via a websocket.
   *
   * @param {string} id - ID or name of the container
   * @param {Object} [params] - Optional parameters
   * @param {string} [params.detachKeys] - Override the key sequence for detaching a container. Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,`, or `_`.
   * @param {boolean} [params.logs] - Return logs
   * @param {boolean} [params.stream] - Return stream
   * @param {*} [params.options] - Override HTTP request options.
   * @throws {RequiredError}
   * @group Container API
   * @returns Possible response codes:
   * - 101 (Switching Protocols)
   * - 200 (OK): The request was successful, and the server responded with the requested data.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   */
  public containerAttachWebsocket(
    id: string,
    params?: { detachKeys?: string; logs?: boolean; stream?: boolean; options?: RawAxiosRequestConfig },
  ) {
    // TODO: Implement streaming functionality
    return this.containerApi.containerAttachWebsocket(
      id,
      params?.detachKeys,
      params?.logs,
      params?.stream,
      params?.options,
    )
  }

  /**
   * Returns which files in a container's filesystem have been added, deleted, or modified. The `Kind` of modification can be one of:
   * - `0`: Modified
   * - `1`: Added
   * - `2`: Deleted
   * @param {string} id - ID or name of the container
   * @param {*} [options] - Override HTTP request options.
   * @throws {RequiredError}
   * @group Container API
   * @returns Possible response codes:
   * - 200 (OK): The request was successful, and the server responded with the requested data.
   * - 304 (Not Modified): There were no changes detected in the container's filesystem.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public containerChanges(id: string, options?: RawAxiosRequestConfig) {
    return this.containerApi.containerChanges(id, options)
  }

  /**
   * Create a container.
   *
   * @param {ContainerCreateRequest} body - The container configuration
   * @param {Object} [params] - Optional parameters
   * @param {string} [params.name] - Assign the specified name to the container. Must match the regex `/?[a-zA-Z0-9][a-zA-Z0-9_.-]+`.
   * @param {string} [params.platform] - Platform in the format `os[/arch[/variant]]` used for image lookup. When specified, the daemon checks if the requested image is present in the local image cache with the given OS and Architecture, and otherwise returns a `404` status. If the option is not set, the host's native OS and Architecture are used to look up the image in the image cache. However, if no platform is passed and the given image does exist in the local image cache, but its OS or architecture does not match, the container is created with the available image, and a warning is added to the `Warnings` field in the response, for example; WARNING: The requested image's platform (linux/arm64/v8) does not match the detected host platform (linux/amd64) and no specific platform was requested.
   * @param {*} [params.options] - Override HTTP request options.
   * @throws {RequiredError}
   * @group Container API
   * @returns Possible response codes:
   * - 201 (Created): The container was successfully created.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 409 (Conflict): The request could not be completed due to a conflict with the current state of the target resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public containerCreate(
    body: ContainerCreateRequest,
    params?: { name?: string; platform?: string; options?: RawAxiosRequestConfig },
  ) {
    return this.containerApi.containerCreate(body, params?.name, params?.platform, params?.options)
  }

  /**
   * Export the contents of a container as a tarball.
   * @param {string} id - The ID or name of the container
   * @param {*} [options] - Override HTTP request options.
   * @throws {RequiredError}
   * @group Container API
   * @returns Possible response codes:
   * - 200 (OK): The request was successful, and the server responded with the requested data.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public containerExport(id: string, options?: RawAxiosRequestConfig) {
    return this.containerApi.containerExport(id, options)
  }

  /**
   * Retrieve detailed information about a container.
   * @param {string} id - The ID or name of the container
   * @param {boolean} [size] - If true, includes the size of the container as fields `SizeRw` and `SizeRootFs`
   * @param {*} [options] - Optional parameters to override the HTTP request
   * @throws {RequiredError}
   * @group Container API
   * @returns Possible response codes:
   * - 200 (OK): The request was successful, and the server responded with the requested data.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public containerInspect(id: string, size?: boolean, options?: RawAxiosRequestConfig) {
    return this.containerApi.containerInspect(id, size, options)
  }

  /**
   * Sends a POSIX signal to a container, defaulting to killing the container.
   * @param {string} id - The ID or name of the container
   * @param {string} [signal] - The signal to send to the container as an integer or string (e.g. `SIGINT`).
   * @param {*} [options] - Override HTTP request options.
   * @throws {RequiredError}
   * @group Container API
   * @returns Possible response codes:
   * - 204 (No Content): The request was successful, and the server responded with no content.
   * - 304 (Not Modified): The container was already in the desired state.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 409 (Conflict): The request could not be completed due to a conflict with the current state of the target resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public containerKill(id: string, signal?: string, options?: RawAxiosRequestConfig) {
    return this.containerApi.containerKill(id, signal, options)
  }

  /**
   * Returns a list of containers. For details on the format, see the [inspect endpoint](#operation/ContainerInspect). Note that it uses a different, smaller representation of a container than inspecting a single container. For example, the list of linked containers is not propagated.
   * @param {boolean} [all] Return all containers. By default, only running containers are shown.
   * @param {number} [limit] Return this number of most recently created containers, including non-running ones.
   * @param {boolean} [size] Return the size of container as fields `SizeRw` and `SizeRootFs`.
   * @param {string} [filters] Filters to process on the container list, encoded as JSON (a `map[string][]string`). For example, `{"status": ["paused"]}` will only return paused containers. Available filters:
   * - `ancestor`=(`<image-name>[:<tag>]`, `<image id>`, or `<image@digest>`)
   * - `before`=(`<container id>` or `<container name>`)
   * - `expose`=(`<port>[/<proto>]`|`<startport-endport>/[<proto>]`)
   * - `exited=<int>` containers with exit code of `<int>`
   * - `health`=(`starting`|`healthy`|`unhealthy`|`none`)
   * - `id=<ID>` a container's ID
   * - `isolation=`(`default`|`process`|`hyperv`) (Windows daemon only)
   * - `is-task=`(`true`|`false`)
   * - `label=key` or `label="key=value"` of a container label
   * - `name=<name>` a container's name
   * - `network`=(`<network id>` or `<network name>`)
   * - `publish`=(`<port>[/<proto>]`|`<startport-endport>/[<proto>]`)
   * - `since`=(`<container id>` or `<container name>`)
   * - `status=`(`created`|`restarting`|`running`|`removing`|`paused`|`exited`|`dead`)
   * - `volume`=(`<volume name>` or `<mount point destination>`)
   * @param {*} [options] Override HTTP request option.
   * @throws {RequiredError}
   * @group Container API
   * @returns The request arguments to be sent to the API.
   * @returns Possible response codes:
   * - 200 (OK): A list of containers.
   * - 500 (Internal Server Error): Server error.
   */
  public containerList(
    all?: boolean,
    limit?: number,
    size?: boolean,
    filters?: string,
    options?: RawAxiosRequestConfig,
  ) {
    return this.containerApi.containerList(all, limit, size, filters, options)
  }

  /**
   * Retrieve `stdout` and `stderr` logs from a container. Note: This endpoint works only for containers with the `json-file` or `journald` logging driver.
   * @param {string} id - The ID or name of the container
   * @param {Object} [params] - Optional parameters
   * @param {boolean} [params.follow] - Keep the connection open after returning logs.
   * @param {boolean} [params.stdout] - Return logs from `stdout`. Must choose this or stderr.
   * @param {boolean} [params.stderr] - Return logs from `stderr`. Must choose this or stdout.
   * @param {number} [params.since] - Only return logs since this time, as a UNIX timestamp.
   * @param {number} [params.until] - Only return logs before this time, as a UNIX timestamp.
   * @param {boolean} [params.timestamps] - Add timestamps to every log line.
   * @param {string} [params.tail] - Only return this number of log lines from the end of the logs. Specify as an integer or `all` to output all log lines.
   * @param {*} [params.options] - Override HTTP request options.
   * @throws {RequiredError}
   * @group Container API
   * @returns Possible response codes:
   * - 101 (Switching Protocols): The server is switching protocols.
   * - 200 (OK): The request was successful.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public containerLogs(
    id: string,
    params?: {
      follow?: boolean
      stdout?: boolean
      stderr?: boolean
      since?: number
      until?: number
      timestamps?: boolean
      tail?: string
      options?: RawAxiosRequestConfig
    },
  ) {
    return this.containerApi.containerLogs(
      id,
      params?.follow,
      params?.stdout,
      params?.stderr,
      params?.since,
      params?.until,
      params?.timestamps,
      params?.tail,
      params?.options,
    )
  }

  /**
   * Use the freezer cgroup to suspend all processes in a container. Traditionally, when suspending a process the `SIGSTOP` signal is used, which is observable by the process being suspended. With the freezer cgroup, the process is unaware and unable to capture that it is being suspended and subsequently resumed.
   * @param {string} id - The ID or name of the container
   * @param {*} [options] - Optional parameters to override the HTTP request
   * @throws {RequiredError}
   * @group Container API
   * @returns Possible response codes:
   * - 204 (No Content): The request was successful, and the server has fulfilled the request but does not need to return an entity-body.
   * - 304 (Not Modified): The container is already paused.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public containerPause(id: string, options?: RawAxiosRequestConfig) {
    return this.containerApi.containerPause(id, options)
  }

  /**
   * Delete stopped containers based on the provided filters.
   *
   * @param {string} [filters] Filters to process on the prune list, encoded as JSON (a `map[string][]string`). Available filters:
   * - `until=<timestamp>`: Prune containers created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
   * - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`): Prune containers with (or without, in case `label!=...` is used) the specified labels.
   * @param {*} [options] Optional parameters to override the HTTP request.
   * @throws {RequiredError}
   * @group Container API
   * @returns Possible response codes:
   * - 200 (OK): The request was successful, and the server responded with the requested data.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public containerPrune(filters?: string, options?: RawAxiosRequestConfig) {
    return this.containerApi.containerPrune(filters, options)
  }

  /**
   * Rename an existing container.
   *
   * @param {string} id - The ID or name of the container to rename
   * @param {string} name - The new name for the container
   * @param {*} [options] - Optional parameters to override the HTTP request
   * @throws {RequiredError}
   * @group Container API
   * @returns Possible response codes:
   * - 204 (No Content): The container was successfully renamed.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 409 (Conflict): The new name is already in use.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public containerRename(id: string, name: string, options?: RawAxiosRequestConfig) {
    return this.containerApi.containerRename(id, name, options)
  }

  /**
   * Resize the TTY (teletypewriter) for a container.
   *
   * @param {string} id - The ID or name of the container
   * @param {number} [h] - The height of the TTY session in characters
   * @param {number} [w] - The width of the TTY session in characters
   * @param {*} [options] - Optional parameters to override the HTTP request
   * @throws {RequiredError}
   * @group Container API
   * @returns Possible response codes:
   * - 200 (OK): The request was successful, and the server responded with the requested data.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public containerResize(id: string, h?: number, w?: number, options?: RawAxiosRequestConfig) {
    return this.containerApi.containerResize(id, h, w, options)
  }

  /**
   * Restart a container.
   *
   * @param {string} id - The ID or name of the container
   * @param {number} [t] - Number of seconds to wait before killing the container
   * @param {*} [options] - Optional parameters to override the HTTP request
   * @throws {RequiredError}
   * @group Container API
   * @returns Possible response codes:
   * - 204 (No Content): The container was successfully restarted.
   * - 304 (Not Modified): The container was already stopped, and no action was taken.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public containerRestart(id: string, t?: number, options?: RawAxiosRequestConfig) {
    return this.containerApi.containerRestart(id, t, options)
  }

  /**
   * Start a container.
   *
   * @param {string} id - The ID or name of the container
   * @param {string} [detachKeys] - Override the key sequence for detaching a container. Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,` or `_`.
   * @param {*} [options] - Optional parameters to override the HTTP request
   * @throws {RequiredError}
   * @group Container API
   * @returns Possible response codes:
   * - 204 (No Content): The container was successfully started.
   * - 304 (Not Modified): The container was already started, and no action was taken.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 409 (Conflict): The container is in a state which conflicts with the requested action.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public containerStart(id: string, detachKeys?: string, options?: RawAxiosRequestConfig) {
    return this.containerApi.containerStart(id, detachKeys, options)
  }

  /**
   * This endpoint returns a live stream of a container’s resource usage statistics.
   * The `precpu_stats` field contains the CPU statistics from the previous read, which is used to calculate the CPU usage percentage. It is not an exact copy of the `cpu_stats` field.
   * If either `precpu_stats.online_cpus` or `cpu_stats.online_cpus` is nil, then for compatibility with older daemons, the length of the corresponding `cpu_usage.percpu_usage` array should be used.
   * On a cgroup v2 host, the following fields are not set:
   * - `blkio_stats`: all fields other than `io_service_bytes_recursive`
   * - `cpu_stats`: `cpu_usage.percpu_usage`
   * - `memory_stats`: `max_usage` and `failcnt`
   * Also, `memory_stats.stats` fields are incompatible with cgroup v1.
   *
   * To calculate the values shown by the `stats` command of the Docker CLI tool, the following formulas can be used:
   * - used_memory = `memory_stats.usage - memory_stats.stats.cache`
   * - available_memory = `memory_stats.limit`
   * - Memory usage % = `(used_memory / available_memory) * 100.0`
   * - cpu_delta = `cpu_stats.cpu_usage.total_usage - precpu_stats.cpu_usage.total_usage`
   * - system_cpu_delta = `cpu_stats.system_cpu_usage - precpu_stats.system_cpu_usage`
   * - number_cpus = `length(cpu_stats.cpu_usage.percpu_usage)` or `cpu_stats.online_cpus`
   * - CPU usage % = `(cpu_delta / system_cpu_delta) * number_cpus * 100.0`
   *
   * @param {string} id ID or name of the container
   * @param {boolean} [stream] Stream the output. If false, the stats will be output once and then it will disconnect.
   * @param {boolean} [oneShot] Only get a single stat instead of waiting for 2 cycles. Must be used with `stream=false`.
   * @param {*} [options] Override HTTP request options.
   * @throws {RequiredError}
   * @group Container API
   * @returns Possible response codes:
   * - 200 (OK): The request was successful, and the server responded with the requested data.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   */
  public containerStats(id: string, stream?: boolean, oneShot?: boolean, options?: RawAxiosRequestConfig) {
    return this.containerApi.containerStats(id, stream, oneShot, options)
  }

  /**
   * Stops a running container. The container will be stopped gracefully,
   * waiting for the specified number of seconds before forcefully killing it.
   *
   * @param {string} id ID or name of the container
   * @param {number} [t] Number of seconds to wait before killing the container
   * @param {*} [options] Override HTTP request options.
   * @throws {RequiredError}
   * @group Container API
   * @returns Possible response codes:
   * - 204 (No Content): The container was successfully stopped.
   * - 304 (Not Modified): The container was already stopped, and no action was taken.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 409 (Conflict): The container is in a state which conflicts with the requested action.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public containerStop(id: string, t?: number, options?: RawAxiosRequestConfig) {
    return this.containerApi.containerStop(id, t, options)
  }

  /**
   * This method lists the processes running inside a container. On Unix systems, this is done by running the `ps` command.
   * Note: This endpoint is not supported on Windows.
   *
   * @param {string} id ID or name of the container
   * @param {string} [psArgs] The arguments to pass to the `ps` command. For example, `aux`
   * @param {*} [options] Override HTTP request options.
   * @throws {RequiredError}
   * @group Container API
   * @returns Possible response codes:
   * - 200 (OK): The request was successful, and the server responded with the requested data.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   */
  public containerTop(id: string, psArgs?: string, options?: RawAxiosRequestConfig) {
    return this.containerApi.containerTop(id, psArgs, options)
  }

  /**
   * Resume a container that has been paused.
   * @param {string} id ID or name of the container
   * @param {*} [options] Override HTTP request options.
   * @throws {RequiredError}
   * @group Container API
   * @returns Possible response codes:
   * - 204 (No Content): The container was successfully unpaused.
   * - 304 (Not Modified): The container was already unpaused, and no action was taken.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public containerUnpause(id: string, options?: RawAxiosRequestConfig) {
    return this.containerApi.containerUnpause(id, options)
  }

  /**
   * Modify the configuration settings of an existing container without needing to recreate it.
   * @param {string} id The ID or name of the container
   * @param {ContainerUpdateRequest} update The update request object containing the new configuration settings
   * @param {*} [options] Optional parameter to override HTTP request options
   * @throws {RequiredError} Throws an error if the required parameters are not provided
   * @group Container API
   * @returns Possible response codes:
   * - 200 (OK): The container was successfully updated.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 409 (Conflict): The container is in a state which conflicts with the requested action.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public containerUpdate(id: string, update: ContainerUpdateRequest, options?: RawAxiosRequestConfig) {
    return this.containerApi.containerUpdate(id, update, options)
  }

  /**
   * Wait until a container stops and then return the exit code.
   * @param {string} id The ID or name of the container
   * @param {ContainerWaitConditionEnum} [condition] The condition to wait for before returning. Defaults to `not-running` if omitted or empty.
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @throws {RequiredError} Throws an error if the required parameters are not provided.
   * @group Container API
   * @returns Possible response codes:
   * - 200 (OK): The request was successful, and the server responded with the requested data.
   * - 204 (No Content): The container was successfully unpaused.
   * - 304 (Not Modified): The container was already unpaused, and no action was taken.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 409 (Conflict): The container is in a state which conflicts with the requested action.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   */
  public containerWait(id: string, condition?: ContainerWaitConditionEnum, options?: RawAxiosRequestConfig) {
    return this.containerApi.containerWait(id, condition, options)
  }

  /**
   * Upload a tar archive to be extracted to a specified path in the filesystem of a container. The `path` parameter must be a directory. If it exists as a file, a 400 error will be returned with the message "not a directory".
   * @param {string} id - The ID or name of the container
   * @param {string} path - The path to a directory in the container where the archive’s contents will be extracted
   * @param {File} inputStream - The input stream must be a tar archive compressed with one of the following algorithms: `identity` (no compression), `gzip`, `bzip2`, or `xz`
   * @param {string} [noOverwriteDirNonDir] - If `1`, `true`, or `True`, it will be an error if unpacking the given content would cause an existing directory to be replaced with a non-directory and vice versa
   * @param {string} [copyUIDGID] - If `1`, `true`, it will copy UID/GID maps to the destination file or directory
   * @param {*} [options] - Optional parameter to override HTTP request options
   * @throws {RequiredError} - Throws an error if the required parameters are not provided
   * @group Container API
   * @returns Possible response codes:
   * - 200 (OK): The archive was successfully extracted.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax or the path is not a directory.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   */
  public putContainerArchive(
    id: string,
    path: string,
    inputStream: File,
    noOverwriteDirNonDir?: string,
    copyUIDGID?: string,
    options?: RawAxiosRequestConfig,
  ) {
    return this.containerApi.putContainerArchive(id, path, inputStream, noOverwriteDirNonDir, copyUIDGID, options)
  }
  //#endregion Container

  //#region Distribution
  /**
   * Retrieves the image digest and platform information by contacting the registry.
   * @param {string} name - The name or ID of the image.
   * @param {*} [options] - Optional parameter to override HTTP request options.
   * @throws {RequiredError} - Throws an error if the required parameters are not provided.
   * @group Distribution API
   * @returns Possible response codes:
   * - 200 (OK): The request was successful, and the server responded with the requested data.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 401 (Unauthorized): The client must authenticate itself to get the requested response.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   */
  public distributionInspect(name: string, options?: RawAxiosRequestConfig) {
    return this.distributionApi.distributionInspect(name, options)
  }
  //#endregion Distribution

  //#region Exec
  /**
   * Run a command inside a running container.
   *
   * @param {string} id - The ID or name of the container.
   * @param {ExecConfig} execConfig - The configuration for the exec instance.
   * @param {*} [options] - Optional parameter to override HTTP request options.
   * @throws {RequiredError} - Throws an error if the required parameters are not provided.
   * @group Exec API
   * @returns Possible response codes:
   * - 200 (OK): The request was successful, and the server responded with the requested data.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 409 (Conflict): The request could not be completed due to a conflict with the current state of the target resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public containerExec(id: string, execConfig: ExecConfig, options?: RawAxiosRequestConfig) {
    return this.execApi.containerExec(id, execConfig, options)
  }

  /**
   * Returns detailed information about an exec instance.
   * @param {string} id - The ID of the exec instance.
   * @param {*} [options] - Optional parameter to override HTTP request options.
   * @throws {RequiredError} - Throws an error if the required parameters are not provided.
   * @group Exec API
   * @returns Possible response codes:
   * - 200 (OK): The request was successful, and the server responded with the requested data.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public execInspect(id: string, options?: RawAxiosRequestConfig) {
    return this.execApi.execInspect(id, options)
  }

  /**
   * Resize the TTY session used by an exec instance. This endpoint only works if `tty` was specified as part of creating and starting the exec instance.
   *
   * @param {string} id - The ID of the exec instance.
   * @param {number} [h] - The height of the TTY session in characters.
   * @param {number} [w] - The width of the TTY session in characters.
   * @param {*} [options] - Optional parameter to override HTTP request options.
   * @throws {RequiredError} - Throws an error if the required parameters are not provided.
   * @group Exec API
   * @returns Possible response codes:
   * - 200 (OK): The request was successful, and the server responded with the requested data.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public execResize(id: string, h?: number, w?: number, options?: RawAxiosRequestConfig) {
    return this.execApi.execResize(id, h, w, options)
  }

  /**
   * Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command. Otherwise, it sets up an interactive session with the command.
   * @param {string} id - The ID of the exec instance.
   * @param {ExecStartConfig} [execStartConfig] - Configuration for starting the exec instance.
   * @param {*} [options] - Optional parameter to override HTTP request options.
   * @throws {RequiredError} - Throws an error if the required parameters are not provided.
   * @group Exec API
   * @returns Possible response codes:
   * - 200 (OK): The request was successful, and the server responded with the requested data.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 409 (Conflict): The request could not be completed due to a conflict with the current state of the target resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   */
  public execStart(id: string, execStartConfig?: ExecStartConfig, options?: RawAxiosRequestConfig) {
    return this.execApi.execStart(id, execStartConfig, options)
  }
  //#endregion Exec

  //#region Image
  /**
   * Deletes the builder cache.
   *
   * @param {number} [keepStorage] - Amount of disk space in bytes to keep for cache.
   * @param {boolean} [all] - Remove all types of build cache.
   * @param {string} [filters] - A JSON encoded value of the filters (a `map[string][]string`) to process on the list of build cache objects. Available filters:
   * - `until=<duration>`: duration relative to daemon's time, during which build cache was not used, in Go's duration format (e.g., '24h')
   * - `id=<id>`
   * - `parent=<id>`
   * - `type=<string>`
   * - `description=<string>`
   * - `inuse`
   * - `shared`
   * - `private`
   * @param {*} [options] - Optional parameter to override HTTP request options.
   * @throws {RequiredError} - Throws an error if the required parameters are not provided.
   * @group Image API
   * @returns Possible response codes:
   * - 200 (OK): The request was successful, and the server responded with the requested data.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public buildPrune(keepStorage?: number, all?: boolean, filters?: string, options?: RawAxiosRequestConfig) {
    return this.imageApi.buildPrune(keepStorage, all, filters, options)
  }

  /**
   * Builds a Docker image from a tar archive containing a `Dockerfile`. The `Dockerfile` specifies how the image is built from the tar archive. It is typically in the archive's root, but can be at a different path or have a different name by specifying the `dockerfile` parameter. [See the `Dockerfile` reference for more information](https://docs.docker.com/engine/reference/builder/). The Docker daemon performs a preliminary validation of the `Dockerfile` before starting the build, and returns an error if the syntax is incorrect. After that, each instruction is run one-by-one until the ID of the new image is output. The build is canceled if the client drops the connection by quitting or being killed.
   * @param {Object} params - The parameters for building the image.
   * @param {string} [params.dockerfile] - Path within the build context to the `Dockerfile`. This is ignored if `remote` is specified and points to an external `Dockerfile`.
   * @param {string} [params.t] - A name and optional tag to apply to the image in the `name:tag` format. If you omit the tag, the default `latest` value is assumed. You can provide several `t` parameters.
   * @param {string} [params.extrahosts] - Extra hosts to add to /etc/hosts.
   * @param {string} [params.remote] - A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file’s contents are placed into a file called `Dockerfile` and the image is built from that file. If the URI points to a tarball, the file is downloaded by the daemon and the contents therein used as the context for the build. If the URI points to a tarball and the `dockerfile` parameter is also specified, there must be a file with the corresponding path inside the tarball.
   * @param {boolean} [params.q] - Suppress verbose build output.
   * @param {boolean} [params.nocache] - Do not use the cache when building the image.
   * @param {string} [params.cachefrom] - JSON array of images used for build cache resolution.
   * @param {string} [params.pull] - Attempt to pull the image even if an older image exists locally.
   * @param {boolean} [params.rm] - Remove intermediate containers after a successful build.
   * @param {boolean} [params.forcerm] - Always remove intermediate containers, even upon failure.
   * @param {number} [params.memory] - Set memory limit for build.
   * @param {number} [params.memswap] - Total memory (memory + swap). Set as `-1` to disable swap.
   * @param {number} [params.cpushares] - CPU shares (relative weight).
   * @param {string} [params.cpusetcpus] - CPUs in which to allow execution (e.g., `0-3`, `0,1`).
   * @param {number} [params.cpuperiod] - The length of a CPU period in microseconds.
   * @param {number} [params.cpuquota] - Microseconds of CPU time that the container can get in a CPU period.
   * @param {string} [params.buildargs] - JSON map of string pairs for build-time variables. Users pass these values at build-time. Docker uses the buildargs as the environment context for commands run via the `Dockerfile` RUN instruction, or for variable expansion in other `Dockerfile` instructions. This is not meant for passing secret values. For example, the build arg `FOO=bar` would become `{"FOO":"bar"}` in JSON. This would result in the query parameter `buildargs={"FOO":"bar"}`. Note that `{"FOO":"bar"}` should be URI component encoded. [Read more about the buildargs instruction.](https://docs.docker.com/engine/reference/builder/#arg)
   * @param {number} [params.shmsize] - Size of `/dev/shm` in bytes. The size must be greater than 0. If omitted, the system uses 64MB.
   * @param {boolean} [params.squash] - Squash the resulting image's layers into a single layer. *(Experimental release only.)*
   * @param {string} [params.labels] - Arbitrary key/value labels to set on the image, as a JSON map of string pairs.
   * @param {string} [params.networkmode] - Sets the networking mode for the run commands during build. Supported standard values are: `bridge`, `host`, `none`, and `container:<name|id>`. Any other value is taken as a custom network's name or ID to which this container should connect.
   * @param {ImageBuildContentTypeEnum} [params.contentType] - The content type of the build.
   * @param {string} [params.xRegistryConfig] - This is a base64-encoded JSON object with auth configurations for multiple registries that a build may refer to. The key is a registry URL, and the value is an auth configuration object, [as described in the authentication section](#section/Authentication). For example:  ``` {   "docker.example.com": {     "username": "janedoe",     "password": "hunter2"   },   "https://index.docker.io/v1/": {     "username": "mobydock",     "password": "conta1n3rize14"   } } ```  Only the registry domain name (and port if not the default 443) are required. However, for legacy reasons, the Docker Hub registry must be specified with both a `https://` prefix and a `/v1/` suffix even though Docker will prefer to use the v2 registry API.
   * @param {string} [params.platform] - Platform in the format os[/arch[/variant]].
   * @param {string} [params.target] - Target build stage.
   * @param {string} [params.outputs] - BuildKit output configuration.
   * @param {ImageBuildVersionEnum} [params.version] - Version of the builder backend to use.  - `1` is the first generation classic (deprecated) builder in the Docker daemon (default) - `2` is [BuildKit](https://github.com/moby/buildkit)
   * @param {File} [params.inputStream] - A tar archive compressed with one of the following algorithms: identity (no compression), gzip, bzip2, xz.
   * @param {*} [params.options] - Override HTTP request option.
   * @throws {RequiredError}
   * @group Image API
   * @returns Possible response codes:
   * - 200 (OK): The request was successful, and the server responded with the requested data.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   * - 504 (Gateway Timeout): The server did not receive a timely response from an upstream server.
   */
  public imageBuild({
    dockerfile = undefined,
    t = undefined,
    extrahosts = undefined,
    remote = undefined,
    q = undefined,
    nocache = undefined,
    cachefrom = undefined,
    pull = undefined,
    rm = undefined,
    forcerm = undefined,
    memory = undefined,
    memswap = undefined,
    cpushares = undefined,
    cpusetcpus = undefined,
    cpuperiod = undefined,
    cpuquota = undefined,
    buildargs = undefined,
    shmsize = undefined,
    squash = undefined,
    labels = undefined,
    networkmode = undefined,
    contentType = undefined,
    xRegistryConfig = undefined,
    platform = undefined,
    target = undefined,
    outputs = undefined,
    version = undefined,
    inputStream = undefined,
    options = undefined,
  }: {
    dockerfile?: string
    t?: string
    extrahosts?: string
    remote?: string
    q?: boolean
    nocache?: boolean
    cachefrom?: string
    pull?: string
    rm?: boolean
    forcerm?: boolean
    memory?: number
    memswap?: number
    cpushares?: number
    cpusetcpus?: string
    cpuperiod?: number
    cpuquota?: number
    buildargs?: string
    shmsize?: number
    squash?: boolean
    labels?: string
    networkmode?: string
    contentType?: ImageBuildContentTypeEnum
    xRegistryConfig?: string
    platform?: string
    target?: string
    outputs?: string
    version?: ImageBuildVersionEnum
    inputStream?: File
    options?: RawAxiosRequestConfig
  }) {
    return this.imageApi.imageBuild(
      dockerfile,
      t,
      extrahosts,
      remote,
      q,
      nocache,
      cachefrom,
      pull,
      rm,
      forcerm,
      memory,
      memswap,
      cpushares,
      cpusetcpus,
      cpuperiod,
      cpuquota,
      buildargs,
      shmsize,
      squash,
      labels,
      networkmode,
      contentType,
      xRegistryConfig,
      platform,
      target,
      outputs,
      version,
      inputStream,
      options,
    )
  }

  /**
   * Create a new image from a container.
   *
   * @param {string} [container] The ID or name of the container to commit
   * @param {string} [repo] Repository name for the created image
   * @param {string} [tag] Tag name for the created image
   * @param {string} [comment] Commit message
   * @param {string} [author] Author of the image (e.g., `John Hannibal Smith <hannibal@a-team.com>`)
   * @param {boolean} [pause] Whether to pause the container before committing
   * @param {string} [changes] `Dockerfile` instructions to apply while committing
   * @param {ContainerConfig} [containerConfig] The container configuration
   * @param {*} [options] Override HTTP request options.
   * @returns A promise that resolves to the response of the image commit operation.
   *
   * Response codes:
   * - 201: Image created successfully
   * - 400: Bad parameter
   * - 404: No such container
   * - 500: Server error
   *
   * @throws {RequiredError}
   * @group Image API
   */
  public imageCommit(
    container?: string,
    repo?: string,
    tag?: string,
    comment?: string,
    author?: string,
    pause?: boolean,
    changes?: string,
    containerConfig?: ContainerConfig,
    options?: RawAxiosRequestConfig,
  ) {
    return this.imageApi.imageCommit(container, repo, tag, comment, author, pause, changes, containerConfig, options)
  }

  /**
   * Create an image by either pulling it from a registry or importing it.
   *
   * @param {Object} params Parameters for creating an image
   * @param {string} [params.fromImage] Name of the image to pull. The name may include a tag or digest. This parameter may only be used when pulling an image. The pull is cancelled if the HTTP connection is closed.
   * @param {string} [params.fromSrc] Source to import. The value may be a URL from which the image can be retrieved or `-` to read the image from the request body. This parameter may only be used when importing an image.
   * @param {string} [params.repo] Repository name given to an image when it is imported. The repo may include a tag. This parameter may only be used when importing an image.
   * @param {string} [params.tag] Tag or digest. If empty when pulling an image, this causes all tags for the given image to be pulled.
   * @param {string} [params.message] Set commit message for imported image.
   * @param {string} [params.xRegistryAuth] A base64url-encoded auth configuration. Refer to the authentication section for details.
   * @param {Array<string>} [params.changes] Apply `Dockerfile` instructions to the image that is created, for example: `changes=ENV DEBUG=true`. Note that `ENV DEBUG=true` should be URI component encoded. Supported `Dockerfile` instructions: `CMD`|`ENTRYPOINT`|`ENV`|`EXPOSE`|`ONBUILD`|`USER`|`VOLUME`|`WORKDIR`
   * @param {string} [params.platform] Platform in the format os[/arch[/variant]]
   * @param {string} [params.inputImage] Image content if the value `-` has been specified in fromSrc query parameter
   * @param {*} [options] Override HTTP request options.
   * @returns A promise that resolves to the response of the image creation operation.
   *
   * Response codes:
   * - 200: Image created successfully
   * - 400: Bad parameter
   * - 404: No such image
   * - 500: Server error
   *
   * @throws {RequiredError}
   * @group Image API
   */
  public imageCreate(
    params: {
      fromImage?: string
      fromSrc?: string
      repo?: string
      tag?: string
      message?: string
      xRegistryAuth?: string
      changes?: Array<string>
      platform?: string
      inputImage?: string
    },
    options?: RawAxiosRequestConfig,
  ) {
    return this.imageApi.imageCreate(
      params.fromImage,
      params.fromSrc,
      params.repo,
      params.tag,
      params.message,
      params.xRegistryAuth,
      params.changes,
      params.platform,
      params.inputImage,
      options,
    )
  }

  /**
   * Remove an image, along with any untagged parent images that were referenced by that image. Images cannot be removed if they have descendant images, are being used by a running container, or are being used by a build.
   *
   * @param {string} name - The name or ID of the image to remove
   * @param {boolean} [force] - If true, force the removal of the image even if it is being used by stopped containers or has other tags
   * @param {boolean} [noprune] - If true, do not delete untagged parent images
   * @param {*} [options] - Override HTTP request options
   * @returns A promise that resolves to the response of the image removal operation.
   *
   * Response codes:
   * - 200: Image removed successfully
   * - 400: Bad parameter
   * - 404: No such image
   * - 409: Conflict
   * - 500: Server error
   *
   * @throws {RequiredError}
   * @group Image API
   */
  public imageDelete(name: string, force?: boolean, noprune?: boolean, options?: RawAxiosRequestConfig) {
    return this.imageApi.imageDelete(name, force, noprune, options)
  }

  /**
   * Get a tarball containing all images and metadata for a repository.
   * If `name` is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned.
   * If `name` is an image ID, similarly only that image (and its parents) are returned, but with the exclusion of the `repositories` file in the tarball, as there were no image names referenced.
   *
   * ### Image tarball format
   * An image tarball contains one directory per image layer (named using its long ID), each containing these files:
   * - `VERSION`: currently `1.0` - the file format version
   * - `json`: detailed layer information, similar to `docker inspect layer_id`
   * - `layer.tar`: A tarfile containing the filesystem changes in this layer
   *
   * The `layer.tar` file contains `aufs` style `.wh..wh.aufs` files and directories for storing attribute changes and deletions.
   * If the tarball defines a repository, the tarball should also include a `repositories` file at the root that contains a list of repository and tag names mapped to layer IDs.
   *
   * ```json
   * {
   *   "hello-world": {
   *     "latest": "565a9d68a73f6706862bfe8409a7f659776d4d60a8d096eb4a3cbce6999cc2a1"
   *   }
   * }
   * ```
   *
   * @param {string} name Image name or ID
   * @param {*} [options] Override HTTP request options.
   * @returns A promise that resolves to the response of the image export operation.
   *
   * Response codes:
   * - 200: Image exported successfully
   * - 400: Bad parameter
   * - 404: No such image
   * - 500: Server error
   *
   * @throws {RequiredError}
   * @group Image API
   */
  public imageGet(name: string, options?: RawAxiosRequestConfig) {
    return this.imageApi.imageGet(name, options)
  }

  /**
   * Retrieve a tarball containing all images and metadata for multiple image repositories.
   * For each value in the `names` parameter:
   * - If it is a specific name and tag (e.g., `ubuntu:latest`), only that image (and its parents) are returned.
   * - If it is an image ID, only that image (and its parents) are returned, and there will be no names referenced in the 'repositories' file for this image ID.
   * For details on the format, see the [export image endpoint](#operation/ImageGet).
   *
   * @param {Array<string>} [names] Image names to filter by
   * @param {*} [options] Override HTTP request options.
   * @returns A promise that resolves to the response of the image export operation.
   *
   * Response codes:
   * - 200: Images exported successfully
   * - 400: Bad parameter
   * - 404: No such image
   * - 500: Server error
   *
   * @throws {RequiredError}
   * @group Image API
   */
  public imageGetAll(names?: Array<string>, options?: RawAxiosRequestConfig) {
    return this.imageApi.imageGetAll(names, options)
  }

  /**
   * Retrieve the parent layers of a specified image.
   * @param {string} name The name or ID of the image
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @returns A promise that resolves to the response of the image history operation.
   *
   * Response codes:
   * - 200: Successfully retrieved image history
   * - 400: Invalid parameter
   * - 404: Image not found
   * - 500: Internal server error
   *
   * @throws {RequiredError}
   * @group Image API
   */
  public imageHistory(name: string, options?: RawAxiosRequestConfig) {
    return this.imageApi.imageHistory(name, options)
  }

  /**
   * Retrieve detailed information about a specific image.
   * @param {string} name The name or ID of the image.
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @returns A promise that resolves to the response of the image inspection operation.
   *
   * Response codes:
   * - 200: Successfully retrieved image information
   * - 400: Invalid parameter
   * - 404: Image not found
   * - 500: Internal server error
   *
   * @throws {RequiredError}
   * @group Image API
   */
  public imageInspect(name: string, options?: RawAxiosRequestConfig) {
    return this.imageApi.imageInspect(name, options)
  }

  /**
   * Retrieves a list of images on the server. This method uses a different, smaller representation of an image compared to inspecting a single image.
   * @param {boolean} [all] Show all images. By default, only images from a final layer (no children) are shown.
   * @param {string} [filters] A JSON encoded value of the filters (a `map[string][]string`) to process on the images list. Available filters:
   * - `before`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`)
   * - `dangling=true`
   * - `label=key` or `label="key=value"` of an image label
   * - `reference`=(`<image-name>[:<tag>]`)
   * - `since`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`)
   * @param {boolean} [digests] Show digest information as a `RepoDigests` field on each image.
   * @param {*} [options] Override HTTP request options.
   * @returns A promise that resolves to the response of the image list operation.
   *
   * Response codes:
   * - 200: Successfully retrieved list of images
   * - 400: Bad parameter
   * - 500: Server error
   *
   * @throws {RequiredError}
   * @group Image API
   */
  public imageList(all?: boolean, filters?: string, digests?: boolean, options?: RawAxiosRequestConfig) {
    return this.imageApi.imageList(all, filters, digests, options)
  }

  /**
   * Load a set of images and tags into a repository. For details on the format, see the [export image endpoint](#operation/ImageGet).
   * @param {boolean} [quiet] Suppress progress details during load.
   * @param {File} [imagesTarball] Tar archive containing images.
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @returns A promise that resolves to the response of the image load operation.
   *
   * Response codes:
   * - 200: Successfully loaded images
   * - 400: Bad parameter
   * - 404: Not found
   * - 500: Internal server error
   *
   * @throws {RequiredError}
   * @group Image API
   */
  public imageLoad(quiet?: boolean, imagesTarball?: File, options?: RawAxiosRequestConfig) {
    return this.imageApi.imageLoad(quiet, imagesTarball, options)
  }

  /**
   * Deletes unused images from the server.
   *
   * @param {string} [filters] Filters to process on the prune list, encoded as JSON (a `map[string][]string`). Available filters:
   * - `dangling=<boolean>` When set to `true` (or `1`), prune only unused *and* untagged images. When set to `false` (or `0`), all unused images are pruned.
   * - `until=<string>` Prune images created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
   * - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune images with (or without, in case `label!=...` is used) the specified labels.
   * @param {*} [options] Override HTTP request options.
   * @returns A promise that resolves to the response of the image prune operation.
   *
   * Response codes:
   * - 200: Successfully deleted unused images
   * - 400: Bad parameter
   * - 500: Server error
   *
   * @throws {RequiredError}
   * @group Image API
   */
  public imagePrune(filters?: string, options?: RawAxiosRequestConfig) {
    return this.imageApi.imagePrune(filters, options)
  }

  /**
   * Push an image to a registry. If you want to push an image to a private registry, the image must already have a tag that references the registry. For example, `registry.example.com/myimage:latest`. The push is cancelled if the HTTP connection is closed.
   * @param {string} name The name or ID of the image.
   * @param {string} xRegistryAuth A base64url-encoded authentication configuration. Refer to the [authentication section](#section/Authentication) for details.
   * @param {string} [tag] The tag to associate with the image on the registry.
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @returns A promise that resolves to the response of the image push operation.
   *
   * Response codes:
   * - 200: Successfully pushed the image
   * - 400: Bad parameter
   * - 401: Authentication required
   * - 404: Image not found
   * - 500: Internal server error
   *
   * @throws {RequiredError}
   * @group Image API
   */
  public imagePush(name: string, xRegistryAuth: string, tag?: string, options?: RawAxiosRequestConfig) {
    return this.imageApi.imagePush(name, xRegistryAuth, tag, options)
  }

  /**
   * Search for an image on Docker Hub.
   *
   * @param {string} term The term to search for.
   * @param {number} [limit] The maximum number of results to return.
   * @param {string} [filters] A JSON encoded value of the filters (a `map[string][]string`) to process on the images list. Available filters:
   * - `is-automated=(true|false)`
   * - `is-official=(true|false)`
   * - `stars=<number>` Matches images that have at least 'number' stars.
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @returns A promise that resolves to the response of the image search operation.
   *
   * Response codes:
   * - 200: Successfully returned the search results
   * - 400: Bad parameter
   * - 500: Server error
   *
   * @throws {RequiredError}
   * @group Image API
   */
  public imageSearch(term: string, limit?: number, filters?: string, options?: RawAxiosRequestConfig) {
    return this.imageApi.imageSearch(term, limit, filters, options)
  }

  /**
   * Tag an image so that it becomes part of a repository.
   * @param {string} name The name or ID of the image to tag.
   * @param {string} [repo] The repository to tag in. For example, `someuser/someimage`.
   * @param {string} [tag] The name of the new tag.
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @returns A promise that resolves to the response of the image tag operation.
   *
   * Response codes:
   * - 201: Successfully tagged the image
   * - 400: Bad parameter
   * - 404: No such image
   * - 409: Conflict
   * - 500: Server error
   *
   * @throws {RequiredError}
   * @group Image API
   */
  public imageTag(name: string, repo?: string, tag?: string, options?: RawAxiosRequestConfig) {
    return this.imageApi.imageTag(name, repo, tag, options)
  }
  //#endregion Image

  //#region Network
  /**
   * Connect a container to a network.
   *
   * @param {string} id Network ID or name
   * @param {NetworkDisconnectRequest} container The container to connect to the network
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @returns A promise that resolves to the response of the network connect operation.
   *
   * Response codes:
   * - 200: Successfully connected the container to the network
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 404: No such network
   * - 500: Server error
   *
   * @throws {RequiredError}
   * @group Network API
   */
  public networkConnect(id: string, container: NetworkDisconnectRequest, options?: RawAxiosRequestConfig) {
    return this.networkApi.networkConnect(id, container, options)
  }

  /**
   * Create a new network with the specified configuration.
   *
   * @param {NetworkCreateRequest} networkConfig - The configuration for the new network
   * @param {*} [options] - Optional parameter to override HTTP request options
   * @throws {RequiredError}
   * @group Network API
   * @returns A promise that resolves to the response of the network creation operation.
   *
   * Response codes:
   * - 201: Successfully created the network
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 404: No such network
   * - 409: Conflict
   * - 500: Server error
   */
  public networkCreate(networkConfig: NetworkCreateRequest, options?: RawAxiosRequestConfig) {
    return this.networkApi.networkCreate(networkConfig, options)
  }

  /**
   * Remove a network by its ID or name.
   *
   * @param {string} id - The ID or name of the network to be removed
   * @param {*} [options] - Optional parameter to override HTTP request options
   * @throws {RequiredError}
   * @group Network API
   * @returns A promise that resolves to the response of the network removal operation.
   *
   * Response codes:
   * - 204: Successfully removed the network
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 404: No such network
   * - 500: Server error
   */
  public networkDelete(id: string, options?: RawAxiosRequestConfig) {
    return this.networkApi.networkDelete(id, options)
  }

  /**
   * Disconnect a container from a network.
   *
   * @param {string} id - The ID or name of the network
   * @param {NetworkConnectRequest} container - The container to disconnect from the network
   * @param {*} [options] - Optional parameter to override HTTP request options
   * @throws {RequiredError}
   * @group Network API
   * @returns A promise that resolves to the response of the network disconnection operation.
   *
   * Response codes:
   * - 200: Successfully disconnected the container from the network
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 404: No such network
   * - 500: Server error
   */
  public networkDisconnect(id: string, container: NetworkConnectRequest, options?: RawAxiosRequestConfig) {
    return this.networkApi.networkDisconnect(id, container, options)
  }

  /**
   * Inspect a network by its ID or name.
   *
   * @param {string} id - The ID or name of the network to inspect
   * @param {boolean} [verbose] - If true, provides detailed inspect output for troubleshooting
   * @param {string} [scope] - Filter the network by scope (swarm, global, or local)
   * @param {*} [options] - Optional parameter to override HTTP request options
   * @throws {RequiredError}
   * @group Network API
   * @returns A promise that resolves to the response of the network inspection operation.
   *
   * Response codes:
   * - 200: Successfully inspected the network
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 404: No such network
   * - 500: Server error
   */
  public networkInspect(id: string, verbose?: boolean, scope?: string, options?: RawAxiosRequestConfig) {
    return this.networkApi.networkInspect(id, verbose, scope, options)
  }

  /**
   * Returns a list of networks. For details on the format, see the [network inspect endpoint](#operation/NetworkInspect). Note that it uses a different, smaller representation of a network than inspecting a single network. For example, the list of containers attached to the network is not propagated in API versions 1.28 and up.
   *
   * @param {string} [filters] JSON encoded value of the filters (a `map[string][]string`) to process on the networks list. Available filters:
   * - `dangling=<boolean>` When set to `true` (or `1`), returns all networks that are not in use by a container. When set to `false` (or `0`), only networks that are in use by one or more containers are returned.
   * - `driver=<driver-name>` Matches a network's driver.
   * - `id=<network-id>` Matches all or part of a network ID.
   * - `label=<key>` or `label=<key>=<value>` Matches a network label.
   * - `name=<network-name>` Matches all or part of a network name.
   * - `scope=["swarm"|"global"|"local"]` Filters networks by scope (`swarm`, `global`, or `local`).
   * - `type=["custom"|"builtin"]` Filters networks by type. The `custom` keyword returns all user-defined networks.
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Network API
   * @returns A promise that resolves to the response of the network listing operation.
   *
   * Response codes:
   * - 200: Successfully listed networks
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 500: Server error
   */
  public networkList(filters?: string, options?: RawAxiosRequestConfig) {
    return this.networkApi.networkList(filters, options)
  }

  /**
   * Delete unused networks.
   *
   * @param {string} [filters] Filters to process on the prune list, encoded as JSON (a `map[string][]string`). Available filters:
   * - `until=<timestamp>` Prune networks created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
   * - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune networks with (or without, in case `label!=...` is used) the specified labels.
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Network API
   * @returns A promise that resolves to the response of the network prune operation.
   *
   * Response codes:
   * - 200: Successfully deleted unused networks
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 500: Server error
   */
  public networkPrune(filters?: string, options?: RawAxiosRequestConfig) {
    return this.networkApi.networkPrune(filters, options)
  }
  //#endregion Network

  //#region Node
  /**
   * Deletes a node from the swarm.
   *
   * @param {string} id The ID or name of the node
   * @param {boolean} [force] Force remove a node from the swarm
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Node API
   * @returns A promise that resolves to the response of the node deletion operation.
   *
   * Response codes:
   * - 200: Node successfully deleted
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 404: Node not found
   * - 500: Server error
   */
  public nodeDelete(id: string, force?: boolean, options?: RawAxiosRequestConfig) {
    return this.nodeApi.nodeDelete(id, force, options)
  }

  /**
   * Inspect a node to retrieve detailed information.
   *
   * @param {string} id The ID or name of the node
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Node API
   * @returns A promise that resolves to the response of the node inspection operation.
   *
   * Response codes:
   * - 200: Node successfully inspected
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 404: Node not found
   * - 500: Server error
   */
  public nodeInspect(id: string, options?: RawAxiosRequestConfig) {
    return this.nodeApi.nodeInspect(id, options)
  }

  /**
   * Lists all nodes in the swarm.
   *
   * @param {string} [filters] Filters to process on the nodes list, encoded as JSON (a `map[string][]string`). Available filters:
   * - `id=<node id>`
   * - `label=<engine label>`
   * - `membership=`(`accepted`|`pending`)
   * - `name=<node name>`
   * - `node.label=<node label>`
   * - `role=`(`manager`|`worker`)
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Node API
   * @returns A promise that resolves to the response of the node listing operation.
   *
   * Response codes:
   * - 200: Nodes successfully listed
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 500: Server error
   */
  public nodeList(filters?: string, options?: RawAxiosRequestConfig) {
    return this.nodeApi.nodeList(filters, options)
  }

  /**
   * Update a node with the specified ID and version.
   *
   * @param {string} id The ID of the node
   * @param {number} version The version number of the node object being updated. This is required to avoid conflicting writes.
   * @param {NodeSpec} [body] The new specification for the node
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Node API
   * @returns A promise that resolves to the response of the node update operation.
   *
   * Response codes:
   * - 200: Node successfully updated
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 404: Node not found
   * - 500: Server error
   */
  public nodeUpdate(id: string, version: number, body?: NodeSpec, options?: RawAxiosRequestConfig) {
    return this.nodeApi.nodeUpdate(id, version, body, options)
  }
  //#endregion Node

  //#region Plugin
  /**
   * Retrieves the privileges required by a plugin.
   *
   * @param {string} remote The name of the plugin. The `:latest` tag is optional, and is the default if omitted.
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Plugin API
   * @returns A promise that resolves to the response of the plugin privileges operation.
   *
   * Response codes:
   * - 200: Plugin privileges successfully retrieved
   * - 204: No content
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 404: Plugin not found
   * - 500: Server error
   */
  public getPluginPrivileges(remote: string, options?: RawAxiosRequestConfig) {
    return this.pluginApi.getPluginPrivileges(remote, options)
  }

  /**
   * Create a new plugin with the specified name and context.
   *
   * @param {string} name The name of the plugin. The `:latest` tag is optional, and is the default if omitted.
   * @param {File} [tarContext] Path to tar containing plugin rootfs and manifest.
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Plugin API
   * @returns A promise that resolves to the response of the plugin creation operation.
   *
   * Response codes:
   * - 201: Plugin successfully created
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 404: Plugin not found
   * - 409: Conflict
   * - 500: Server error
   */
  public pluginCreate(name: string, tarContext?: File, options?: RawAxiosRequestConfig) {
    return this.pluginApi.pluginCreate(name, tarContext, options)
  }

  /**
   * Removes a plugin.
   *
   * @param {string} name The name of the plugin. The `:latest` tag is optional, and is the default if omitted.
   * @param {boolean} [force] Disable the plugin before removing. This may result in issues if the plugin is in use by a container.
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Plugin API
   * @returns A promise that resolves to the response of the plugin removal operation.
   *
   * Response codes:
   * - 200: Plugin successfully removed
   * - 204: No content
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 404: Plugin not found
   * - 409: Conflict
   * - 500: Server error
   */
  public pluginDelete(name: string, force?: boolean, options?: RawAxiosRequestConfig) {
    return this.pluginApi.pluginDelete(name, force, options)
  }

  /**
   * Disable a plugin.
   *
   * @param {string} name The name of the plugin. The `:latest` tag is optional, and is the default if omitted.
   * @param {boolean} [force] Force disable a plugin even if still in use.
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Plugin API
   * @returns A promise that resolves to the response of the plugin disable operation.
   *
   * Response codes:
   * - 200: Plugin successfully disabled
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 404: Plugin not found
   * - 409: Conflict
   * - 500: Server error
   */
  public pluginDisable(name: string, force?: boolean, options?: RawAxiosRequestConfig) {
    return this.pluginApi.pluginDisable(name, force, options)
  }

  /**
   * Enable a plugin.
   *
   * @param {string} name The name of the plugin. The `:latest` tag is optional, and is the default if omitted.
   * @param {number} [timeout] Set the HTTP client timeout (in seconds).
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Plugin API
   * @returns A promise that resolves to the response of the plugin enable operation.
   *
   * Response codes:
   * - 200: Plugin successfully enabled
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 404: Plugin not found
   * - 500: Server error
   */
  public pluginEnable(name: string, timeout?: number, options?: RawAxiosRequestConfig) {
    return this.pluginApi.pluginEnable(name, timeout, options)
  }

  /**
   * Inspect a plugin to retrieve detailed information about it.
   *
   * @param {string} name The name of the plugin. The `:latest` tag is optional, and is the default if omitted.
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Plugin API
   * @returns A promise that resolves to the response of the plugin inspect operation.
   *
   * Response codes:
   * - 200: Plugin details successfully retrieved
   * - 404: Plugin not found
   * - 500: Server error
   */
  public pluginInspect(name: string, options?: RawAxiosRequestConfig) {
    return this.pluginApi.pluginInspect(name, options)
  }

  /**
   * Returns information about installed plugins.
   *
   * @param {string} [filters] A JSON encoded value of the filters (a `map[string][]string`) to process on the plugin list. Available filters:
   * - `capability=<capability name>`
   * - `enable=<true>|<false>`
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Plugin API
   * @returns A promise that resolves to the response of the plugin list operation.
   *
   * Response codes:
   * - 200: List of plugins returned successfully
   * - 500: Server error
   */
  public pluginList(filters?: string, options?: RawAxiosRequestConfig) {
    return this.pluginApi.pluginList(filters, options)
  }

  /**
   * Pulls and installs a plugin. After the plugin is installed, it can be enabled using the [`POST /plugins/{name}/enable` endpoint](#operation/PostPluginsEnable).
   *
   * @param {string} remote The remote reference for the plugin to install. The `:latest` tag is optional and is used as the default if omitted.
   * @param {string} [name] The local name for the pulled plugin. The `:latest` tag is optional and is used as the default if omitted.
   * @param {string} [xRegistryAuth] A base64url-encoded authentication configuration to use when pulling a plugin from a registry. Refer to the [authentication section](#section/Authentication) for details.
   * @param {Array<PluginPrivilege>} [body] The privileges to grant the plugin.
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Plugin API
   * @returns A promise that resolves to the response of the plugin pull operation.
   *
   * Response codes:
   * - 200: Plugin pulled and installed successfully
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 404: Plugin not found
   * - 409: Conflict
   * - 500: Server error
   */
  public pluginPull(
    remote: string,
    name?: string,
    xRegistryAuth?: string,
    body?: Array<PluginPrivilege>,
    options?: RawAxiosRequestConfig,
  ) {
    return this.pluginApi.pluginPull(remote, name, xRegistryAuth, body, options)
  }

  /**
   * Push a plugin to the registry.
   *
   * @param {string} name The name of the plugin. The `:latest` tag is optional and is the default if omitted.
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Plugin API
   * @returns A promise that resolves to the response of the plugin push operation.
   *
   * Response codes:
   * - 200: Plugin pushed successfully
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 404: Plugin not found
   * - 409: Conflict
   * - 500: Server error
   */
  public pluginPush(name: string, options?: RawAxiosRequestConfig) {
    return this.pluginApi.pluginPush(name, options)
  }

  /**
   * Configures a plugin with the specified settings.
   *
   * @param {string} name The name of the plugin. The `:latest` tag is optional and is the default if omitted.
   * @param {Array<string>} [body] The configuration settings for the plugin.
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Plugin API
   * @returns A promise that resolves to the response of the plugin configuration operation.
   *
   * Response codes:
   * - 200: Plugin configured successfully
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 404: Plugin not found
   * - 409: Conflict
   * - 500: Server error
   */
  public pluginSet(name: string, body?: Array<string>, options?: RawAxiosRequestConfig) {
    return this.pluginApi.pluginSet(name, body, options)
  }

  /**
   * Upgrade a plugin to a newer version.
   *
   * @param {string} name The name of the plugin. The `:latest` tag is optional and is the default if omitted.
   * @param {string} remote Remote reference to upgrade to. The `:latest` tag is optional and is used as the default if omitted.
   * @param {string} [xRegistryAuth] A base64url-encoded authentication configuration to use when pulling a plugin from a registry. Refer to the authentication section for details.
   * @param {Array<PluginPrivilege>} [body] The privileges required by the plugin.
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Plugin API
   * @returns A promise that resolves to the response of the plugin upgrade operation.
   *
   * Response codes:
   * - 200: Plugin upgraded successfully
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 404: Plugin not found
   * - 409: Conflict
   * - 500: Server error
   */
  public pluginUpgrade(
    name: string,
    remote: string,
    xRegistryAuth?: string,
    body?: Array<PluginPrivilege>,
    options?: RawAxiosRequestConfig,
  ) {
    return this.pluginApi.pluginUpgrade(name, remote, xRegistryAuth, body, options)
  }
  //#endregion Plugin

  //#region Secret
  /**
   * Creates a new secret.
   *
   * @param {SecretCreateRequest} [body] The request body containing the secret details.
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Secret API
   * @returns A promise that resolves to the response of the secret creation operation.
   *
   * Response codes:
   * - 201: Secret created successfully
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 409: Conflict
   * - 500: Server error
   */
  public secretCreate(body?: SecretCreateRequest, options?: RawAxiosRequestConfig) {
    return this.secretApi.secretCreate(body, options)
  }

  /**
   * Deletes a secret by its ID.
   *
   * @param {string} id - The ID of the secret to delete.
   * @param {*} [options] - Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Secret API
   * @returns A promise that resolves to the response of the secret deletion operation.
   *
   * Response codes:
   * - 204: Secret deleted successfully
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 404: Secret not found
   * - 500: Server error
   */
  public secretDelete(id: string, options?: RawAxiosRequestConfig) {
    return this.secretApi.secretDelete(id, options)
  }

  /**
   * Retrieve detailed information about a specific secret.
   *
   * @param {string} id - The ID of the secret to inspect.
   * @param {*} [options] - Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Secret API
   * @returns A promise that resolves to the response of the secret inspection operation.
   *
   * Response codes:
   * - 200: Secret inspected successfully
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 404: Secret not found
   * - 500: Server error
   */
  public secretInspect(id: string, options?: RawAxiosRequestConfig) {
    return this.secretApi.secretInspect(id, options)
  }

  /**
   * Lists all secrets.
   *
   * @param {string} [filters] A JSON encoded value of the filters (a `map[string][]string`) to process on the secrets list. Available filters:
   * - `id=<secret id>`
   * - `label=<key>` or `label=<key>=value`
   * - `name=<secret name>`
   * - `names=<secret name>`
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Secret API
   * @returns A promise that resolves to the response of the secrets list operation.
   *
   * Response codes:
   * - 200: Secrets listed successfully
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 500: Server error
   */
  public secretList(filters?: string, options?: RawAxiosRequestConfig) {
    return this.secretApi.secretList(filters, options)
  }

  /**
   * Update a Secret
   *
   * @param {string} id - The ID or name of the secret.
   * @param {number} version - The version number of the secret object being updated. This is required to avoid conflicting writes.
   * @param {SecretSpec} [body] - The spec of the secret to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [SecretInspect endpoint](#operation/SecretInspect) response values.
   * @param {*} [options] - Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Secret API
   * @returns A promise that resolves to the response of the secret update operation.
   *
   * Response codes:
   * - 200: Secret updated successfully
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 404: Secret not found
   * - 409: Conflict
   * - 500: Server error
   */
  public secretUpdate(id: string, version: number, body?: SecretSpec, options?: RawAxiosRequestConfig) {
    return this.secretApi.secretUpdate(id, version, body, options)
  }
  //#endregion Secret

  //#region Service
  /**
   * Create a new service.
   *
   * @param {ServiceCreateRequest} body - The service creation request body.
   * @param {string} [xRegistryAuth] - A base64url-encoded authentication configuration for pulling from private registries. Refer to the authentication section for details.
   * @param {*} [options] - Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Service API
   * @returns A promise that resolves to the response of the service creation operation.
   *
   * Possible response codes:
   * - 200: Service created successfully
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 409: Conflict
   * - 500: Server error
   */
  public serviceCreate(body: ServiceCreateRequest, xRegistryAuth?: string, options?: RawAxiosRequestConfig) {
    return this.serviceApi.serviceCreate(body, xRegistryAuth, options)
  }

  /**
   * Deletes a service by its ID or name.
   *
   * @param {string} id - The ID or name of the service to delete.
   * @param {*} [options] - Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Service API
   * @returns A promise that resolves to the response of the service delete operation.
   *
   * Possible response codes:
   * - 200: Service deleted successfully
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 404: Service not found
   * - 409: Conflict
   * - 500: Server error
   */
  public serviceDelete(id: string, options?: RawAxiosRequestConfig) {
    return this.serviceApi.serviceDelete(id, options)
  }

  /**
   * Inspect a service by its ID or name.
   *
   * @param {string} id - The ID or name of the service to inspect.
   * @param {boolean} [insertDefaults] - Fill empty fields with default values.
   * @param {*} [options] - Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Service API
   * @returns A promise that resolves to the response of the service inspection operation.
   *
   * Possible response codes:
   * - 200: Service inspected successfully
   * - 400: Bad parameter
   * - 403: Operation forbidden
   * - 404: Service not found
   * - 500: Server error
   */
  public serviceInspect(id: string, insertDefaults?: boolean, options?: RawAxiosRequestConfig) {
    return this.serviceApi.serviceInspect(id, insertDefaults, options)
  }

  /**
   * List services with optional filters and status.
   *
   * @param {string} [filters] A JSON encoded value of the filters (a `map[string][]string`) to process on the services list. Available filters:
   * - `id=<service id>`
   * - `label=<service label>`
   * - `mode=["replicated"|"global"]`
   * - `name=<service name>`
   * @param {boolean} [status] Include service status, with count of running and desired tasks.
   * @param {*} [options] Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Service API
   * @returns A promise that resolves to the response of the service list operation.
   *
   * Possible response codes:
   * - 200: Services listed successfully
   * - 400: Bad parameter
   * - 500: Server error
   */
  public serviceList(filters?: string, status?: boolean, options?: RawAxiosRequestConfig) {
    return this.serviceApi.serviceList(filters, status, options)
  }

  /**
   * Retrieve `stdout` and `stderr` logs from a service. See also [`/containers/{id}/logs`](#operation/ContainerLogs).
   * **Note**: This endpoint works only for services with the `local`, `json-file` or `journald` logging drivers.
   *
   * @param {string} id - The ID or name of the service
   * @param {boolean} [details] - Show service context and extra details provided to logs.
   * @param {boolean} [follow] - Keep the connection open after returning logs.
   * @param {boolean} [stdout] - Return logs from `stdout`
   * @param {boolean} [stderr] - Return logs from `stderr`
   * @param {number} [since] - Only return logs since this time, as a UNIX timestamp
   * @param {boolean} [timestamps] - Add timestamps to every log line
   * @param {string} [tail] - Only return this number of log lines from the end of the logs. Specify as an integer or `all` to output all log lines.
   * @param {*} [options] - Override HTTP request options.
   * @throws {RequiredError}
   * @group Service API
   * @returns>} Possible response codes:
   * - 101 (Switching Protocols): The server is switching protocols.
   * - 200 (OK): The request was successful.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public serviceLogs(
    id: string,
    details?: boolean,
    follow?: boolean,
    stdout?: boolean,
    stderr?: boolean,
    since?: number,
    timestamps?: boolean,
    tail?: string,
    options?: RawAxiosRequestConfig,
  ) {
    return this.serviceApi.serviceLogs(id, details, follow, stdout, stderr, since, timestamps, tail, options)
  }

  /**
   * Update a service with the specified parameters.
   *
   * @param {string} id - The ID or name of the service.
   * @param {number} version - The version number of the service object being updated. This is required to avoid conflicting writes. This version number should be the value as currently set on the service *before* the update. You can find the current version by calling `GET /services/{id}`.
   * @param {ServiceUpdateRequest} body - The service update request body.
   * @param {ServiceUpdateRegistryAuthFromEnum} [registryAuthFrom] - If the `X-Registry-Auth` header is not specified, this parameter indicates where to find registry authorization credentials.
   * @param {string} [rollback] - Set this parameter to `previous` to cause a server-side rollback to the previous service spec. The supplied spec will be ignored in this case.
   * @param {string} [xRegistryAuth] - A base64url-encoded auth configuration for pulling from private registries. Refer to the [authentication section](#section/Authentication) for details.
   * @param {*} [options] - Optional parameter to override HTTP request options.
   * @throws {RequiredError}
   * @group Service API
   * @returns>} Possible response codes:
   * - 200 (OK): The service was updated successfully.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   */
  public serviceUpdate(
    id: string,
    version: number,
    body: ServiceUpdateRequest,
    registryAuthFrom?: ServiceUpdateRegistryAuthFromEnum,
    rollback?: string,
    xRegistryAuth?: string,
    options?: RawAxiosRequestConfig,
  ) {
    return this.serviceApi.serviceUpdate(id, version, body, registryAuthFrom, rollback, xRegistryAuth, options)
  }
  //#endregion Service

  //#region Session
  /**
   * Start a new interactive session with a server. This session allows the server to call back to the client for advanced capabilities.
   *
   * ### Hijacking
   * This endpoint hijacks the HTTP connection to HTTP2 transport, allowing the client to expose gRPC services on that connection.
   *
   * For example, the client sends this request to upgrade the connection:
   * ```
   * POST /session HTTP/1.1
   * Upgrade: h2c
   * Connection: Upgrade
   * ```
   *
   * The Docker daemon responds with a `101 UPGRADED` response followed by the raw stream:
   * ```
   * HTTP/1.1 101 UPGRADED
   * Connection: Upgrade
   * Upgrade: h2c
   * ```
   *
   * @param {*} [options] - Optional parameters to override the HTTP request
   * @throws {RequiredError}
   * @group Session API
   * @returns>} Possible response codes:
   * - 101 (Switching Protocols): The server is switching protocols as requested by the client.
   * - 200 (OK): The request was successful, and the server responded with the requested data.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   */
  public session(options?: RawAxiosRequestConfig) {
    return this.sessionApi.session(options)
  }
  //#endregion Session

  //#region Swarm
  /**
   * Initializes a new swarm.
   * @param {SwarmInitRequest} body - The request body containing the swarm initialization parameters.
   * @param {*} [options] - Optional parameters to override the HTTP request.
   * @throws {RequiredError}
   * @group Swarm API
   * @returns>} Possible response codes:
   * - 200 (OK): The request was successful, and the swarm was initialized.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   */
  public swarmInit(body: SwarmInitRequest, options?: RawAxiosRequestConfig) {
    return this.swarmApi.swarmInit(body, options)
  }

  /**
   * Inspects the current state of the swarm.
   * @param {*} [options] - Optional parameters to override the HTTP request.
   * @throws {RequiredError}
   * @group Swarm API
   * @returns>} Possible response codes:
   * - 200 (OK): The request was successful, and the server responded with the requested data.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   */
  public swarmInspect(options?: RawAxiosRequestConfig) {
    return this.swarmApi.swarmInspect(options)
  }

  /**
   * Joins an existing swarm.
   * @param {SwarmJoinRequest} body - The request body containing the swarm join parameters.
   * @param {*} [options] - Optional parameters to override the HTTP request.
   * @throws {RequiredError}
   * @group Swarm API
   * @returns>} Possible response codes:
   * - 200 (OK): The request was successful, and the node joined the swarm.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   */
  public swarmJoin(body: SwarmJoinRequest, options?: RawAxiosRequestConfig) {
    return this.swarmApi.swarmJoin(body, options)
  }

  /**
   * Leave a swarm.
   * @param {boolean} [force] - Force leave swarm, even if this is the last manager or that it will break the cluster.
   * @param {*} [options] - Optional parameters to override the HTTP request.
   * @throws {RequiredError}
   * @group Swarm API
   * @returns>} Possible response codes:
   * - 200 (OK): The request was successful, and the node left the swarm.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   */
  public swarmLeave(force?: boolean, options?: RawAxiosRequestConfig) {
    return this.swarmApi.swarmLeave(force, options)
  }

  /**
   * Unlock a locked manager node in the swarm.
   * @param {SwarmUnlockRequest} body - The request body containing the unlock key.
   * @param {*} [options] - Optional parameters to override the HTTP request.
   * @throws {RequiredError}
   * @group Swarm API
   * @returns>} Possible response codes:
   * - 200 (OK): The request was successful, and the manager was unlocked.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   * - 504 (Gateway Timeout): The server did not receive a timely response from an upstream server.
   */
  public swarmUnlock(body: SwarmUnlockRequest, options?: RawAxiosRequestConfig) {
    return this.swarmApi.swarmUnlock(body, options)
  }

  /**
   * Retrieve the unlock key for the swarm.
   * @param {*} [options] Optional parameters to override the HTTP request.
   * @throws {RequiredError}
   * @group Swarm API
   * @returns>} Possible response codes:
   * - 200 (OK): The request was successful, and the unlock key was retrieved.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   * - 504 (Gateway Timeout): The server did not receive a timely response from an upstream server.
   */
  public swarmUnlockkey(options?: RawAxiosRequestConfig) {
    return this.swarmApi.swarmUnlockkey(options)
  }

  /**
   * Update a swarm with the specified parameters.
   * @param {number} version - The version number of the swarm object being updated. This is required to avoid conflicting writes.
   * @param {SwarmSpec} body - The swarm specification to update.
   * @param {boolean} [rotateWorkerToken] - Rotate the worker join token.
   * @param {boolean} [rotateManagerToken] - Rotate the manager join token.
   * @param {boolean} [rotateManagerUnlockKey] - Rotate the manager unlock key.
   * @param {*} [options] - Optional parameters to override the HTTP request.
   * @throws {RequiredError}
   * @group Swarm API
   * @returns>} Possible response codes:
   * - 200 (OK): The request was successful, and the swarm was updated.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   * - 504 (Gateway Timeout): The server did not receive a timely response from an upstream server.
   * - 409 (Conflict): The request could not be completed due to a conflict with the current state of the target resource.
   */
  public swarmUpdate(
    version: number,
    body: SwarmSpec,
    rotateWorkerToken?: boolean,
    rotateManagerToken?: boolean,
    rotateManagerUnlockKey?: boolean,
    options?: RawAxiosRequestConfig,
  ) {
    return this.swarmApi.swarmUpdate(
      version,
      body,
      rotateWorkerToken,
      rotateManagerToken,
      rotateManagerUnlockKey,
      options,
    )
  }
  //#endregion Swarm

  //#region System
  /**
   * Validate credentials for a registry and, if available, get an identity token for accessing the registry without a password.
   * @param {AuthConfig} [authConfig] Authentication configuration to check.
   * @param {*} [options] Optional parameters to override the HTTP request.
   * @throws {RequiredError}
   * @group System API
   * @returns>} Possible response codes:
   * - 200 (OK): The request was successful, and the credentials are valid.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 401 (Unauthorized): The client must authenticate itself to get the requested response.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   * - 504 (Gateway Timeout): The server did not receive a timely response from an upstream server.
   */
  public systemAuth(authConfig?: AuthConfig, options?: RawAxiosRequestConfig) {
    return this.systemApi.systemAuth(authConfig, options)
  }

  /**
   * Retrieve data usage information from the system.
   * @param {*} [options] Optional parameters to override the HTTP request.
   * @throws {RequiredError}
   * @group System API
   * @returns>} Possible response codes:
   * - 200 (OK): The request was successful, and the data usage information is returned.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 401 (Unauthorized): The client must authenticate itself to get the requested response.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   * - 504 (Gateway Timeout): The server did not receive a timely response from an upstream server.
   */
  public systemDataUsage(options?: RawAxiosRequestConfig) {
    return this.systemApi.systemDataUsage(options)
  }

  /**
   * Stream real-time events from the server. Various objects within Docker report events when something happens to them.
   *
   * Containers report these events: `attach`, `commit`, `copy`, `create`, `destroy`, `detach`, `die`, `exec_create`, `exec_detach`, `exec_start`, `exec_die`, `export`, `health_status`, `kill`, `oom`, `pause`, `rename`, `resize`, `restart`, `start`, `stop`, `top`, `unpause`, `update`, and `prune`.
   *
   * Images report these events: `delete`, `import`, `load`, `pull`, `push`, `save`, `tag`, `untag`, and `prune`.
   *
   * Volumes report these events: `create`, `mount`, `unmount`, `destroy`, and `prune`.
   *
   * Networks report these events: `create`, `connect`, `disconnect`, `destroy`, `update`, `remove`, and `prune`.
   *
   * The Docker daemon reports these events: `reload`.
   *
   * Services report these events: `create`, `update`, and `remove`.
   *
   * Nodes report these events: `create`, `update`, and `remove`.
   *
   * Secrets report these events: `create`, `update`, and `remove`.
   *
   * Configs report these events: `create`, `update`, and `remove`.
   *
   * The Builder reports `prune` events.
   * @param {Object} [params] Parameters for monitoring events
   * @param {string} [params.since] Show events created since this timestamp (unix) then stream new events.
   * @param {string} [params.until] Show events created until this timestamp (unix) then stop streaming.
   * @param {string} [params.filters] A JSON encoded value of filters (a `map[string][]string`) to process on the event list. Available filters:
   * - `config=<string>` config name or ID
   * - `container=<string>` container name or ID
   * - `daemon=<string>` daemon name or ID
   * - `event=<string>` event type
   * - `image=<string>` image name or ID
   * - `label=<string>` image or container label
   * - `network=<string>` network name or ID
   * - `node=<string>` node ID
   * - `plugin=<string>` plugin name or ID
   * - `scope=<string>` local or swarm
   * - `secret=<string>` secret name or ID
   * - `service=<string>` service name or ID
   * - `type=<string>` object to filter by, one of `container`, `image`, `volume`, `network`, `daemon`, `plugin`, `node`, `service`, `secret` or `config`
   * - `volume=<string>` volume name
   * @param {*} [params.options] Override HTTP request option.
   * @throws {RequiredError}
   * @group System API
   * @returns>} Possible response codes:
   * - 200 (OK): The request was successful, and the events are being streamed.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 401 (Unauthorized): The client must authenticate itself to get the requested response.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   * - 504 (Gateway Timeout): The server did not receive a timely response from an upstream server.
   */
  public systemEvents(params?: { since?: string; until?: string; filters?: string; options?: RawAxiosRequestConfig }) {
    // TODO: Pull request; specify that times must be in epoch format (since, until)
    return this.systemApi.systemEvents(params?.since, params?.until, params?.filters, params?.options)
  }

  /**
   * Retrieves system information from the Docker daemon.
   *
   * @param {*} [options] Override HTTP request option.
   * @throws {RequiredError}
   * @group System API
   * @returns>} Possible response codes:
   * - 200 (OK): The request was successful, and the system information is returned.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 401 (Unauthorized): The client must authenticate itself to get the requested response.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   * - 504 (Gateway Timeout): The server did not receive a timely response from an upstream server.
   */
  public systemInfo(options?: RawAxiosRequestConfig) {
    return this.systemApi.systemInfo(options)
  }

  /**
   * This endpoint is used to check if the server is accessible.
   * @param {*} [options] Override HTTP request option.
   * @throws {RequiredError}
   * @group System API
   * @returns>} Possible response codes:
   * - 200 (OK): The request was successful, and the server is accessible.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 401 (Unauthorized): The client must authenticate itself to get the requested response.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   * - 504 (Gateway Timeout): The server did not receive a timely response from an upstream server.
   */
  public systemPing(options?: RawAxiosRequestConfig) {
    return this.systemApi.systemPing(options)
  }

  /**
   * This endpoint is used to check if the server is accessible.
   * @param {*} [options] Override HTTP request option.
   * @throws {RequiredError}
   * @group System API
   * @returns>} Possible response codes:
   * - 200 (OK): The request was successful, and the server is accessible.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 401 (Unauthorized): The client must authenticate itself to get the requested response.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   * - 504 (Gateway Timeout): The server did not receive a timely response from an upstream server.
   */
  public systemPingHead(options?: RawAxiosRequestConfig) {
    return this.systemApi.systemPingHead(options)
  }

  /**
   * This endpoint returns the version of Docker that is running and various information about the system that Docker is running on.
   * @param {*} [options] Override HTTP request option.
   * @throws {RequiredError}
   * @group System API
   * @returns>} Possible response codes:
   * - 200 (OK): The request was successful, and the server returned the Docker version and system information.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 401 (Unauthorized): The client must authenticate itself to get the requested response.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   * - 504 (Gateway Timeout): The server did not receive a timely response from an upstream server.
   */
  public systemVersion(options?: RawAxiosRequestConfig) {
    return this.systemApi.systemVersion(options)
  }
  //#endregion System

  //#region Task
  /**
   * This endpoint allows you to inspect a specific task by its ID.
   * @param {string} id The ID of the task to inspect.
   * @param {*} [options] Optional HTTP request options to override the default settings.
   * @throws {RequiredError} Throws an error if the required parameters are not provided.
   * @group Task API
   * @returns>} Possible response codes:
   * - 200 (OK): The request was successful, and the task details are returned.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 401 (Unauthorized): The client must authenticate itself to get the requested response.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   * - 504 (Gateway Timeout): The server did not receive a timely response from an upstream server.
   */
  public taskInspect(id: string, options?: RawAxiosRequestConfig) {
    return this.taskApi.taskInspect(id, options)
  }

  /**
   * This endpoint allows you to list tasks with optional filters.
   * @param {string} [filters] A JSON encoded value of the filters (a `map[string][]string`) to process on the tasks list. Available filters:
   * - `desired-state=(running | shutdown | accepted)`
   * - `id=<task id>`
   * - `label=key` or `label="key=value"`
   * - `name=<task name>`
   * - `node=<node id or name>`
   * - `service=<service name>`
   * @param {*} [options] Optional HTTP request options to override the default settings.
   * @throws {RequiredError} Throws an error if the required parameters are not provided.
   * @group Task API
   * @returns>} Possible response codes:
   * - 200 (OK): The request was successful, and the list of tasks is returned.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 401 (Unauthorized): The client must authenticate itself to get the requested response.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   * - 504 (Gateway Timeout): The server did not receive a timely response from an upstream server.
   */
  public taskList(filters?: string, options?: RawAxiosRequestConfig) {
    return this.taskApi.taskList(filters, options)
  }

  /**
   * This endpoint allows you to get `stdout` and `stderr` logs from a task.
   * See also [`/containers/{id}/logs`](#operation/ContainerLogs).
   * **Note**: This endpoint works only for services with the `local`, `json-file` or `journald` logging drivers.
   *
   * @param {string} id The ID of the task to get logs from.
   * @param {boolean} [details] Show task context and extra details provided to logs.
   * @param {boolean} [follow] Keep connection after returning logs.
   * @param {boolean} [stdout] Return logs from `stdout`.
   * @param {boolean} [stderr] Return logs from `stderr`.
   * @param {number} [since] Only return logs since this time, as a UNIX timestamp.
   * @param {boolean} [timestamps] Add timestamps to every log line.
   * @param {string} [tail] Only return this number of log lines from the end of the logs. Specify as an integer or `all` to output all log lines.
   * @param {*} [options] Optional HTTP request options to override the default settings.
   * @throws {RequiredError} Throws an error if the required parameters are not provided.
   * @group Task API
   * @returns>} Possible response codes:
   * - 200 (OK): The request was successful, and the logs are returned.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 401 (Unauthorized): The client must authenticate itself to get the requested response.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   * - 504 (Gateway Timeout): The server did not receive a timely response from an upstream server.
   * - 507 (Insufficient Storage): The server is unable to store the representation needed to complete the request.
   */
  public taskLogs(
    id: string,
    details?: boolean,
    follow?: boolean,
    stdout?: boolean,
    stderr?: boolean,
    since?: number,
    timestamps?: boolean,
    tail?: string,
    options?: RawAxiosRequestConfig,
  ) {
    return this.taskApi.taskLogs(id, details, follow, stdout, stderr, since, timestamps, tail, options)
  }
  //#endregion Task

  //#region Volume
  /**
   * Creates a new volume with the specified configuration.
   *
   * @param {VolumeCreateOptions} volumeConfig The configuration options for the volume to be created.
   * @param {*} [options] Optional HTTP request options to override the default settings.
   * @throws {RequiredError} Throws an error if the required parameters are not provided.
   * @group Volume API
   * @returns>} Possible response codes:
   * - 201 (Created): The volume was successfully created.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 401 (Unauthorized): The client must authenticate itself to get the requested response.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 409 (Conflict): The request could not be completed due to a conflict with the current state of the target resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   * - 504 (Gateway Timeout): The server did not receive a timely response from an upstream server.
   */
  public volumeCreate(volumeConfig: VolumeCreateOptions, options?: RawAxiosRequestConfig) {
    return this.volumeApi.volumeCreate(volumeConfig, options)
  }

  /**
   * Instructs the driver to remove the specified volume.
   * @param {string} name The name or ID of the volume to be removed.
   * @param {boolean} [force] If true, forces the removal of the volume.
   * @param {*} [options] Optional HTTP request options to override the default settings.
   * @throws {RequiredError} Throws an error if the required parameters are not provided.
   * @group Volume API
   * @returns>} Possible response codes:
   * - 204 (No Content): The volume was successfully removed.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 401 (Unauthorized): The client must authenticate itself to get the requested response.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 409 (Conflict): The request could not be completed due to a conflict with the current state of the target resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   * - 504 (Gateway Timeout): The server did not receive a timely response from an upstream server.
   */
  public volumeDelete(name: string, force?: boolean, options?: RawAxiosRequestConfig) {
    return this.volumeApi.volumeDelete(name, force, options)
  }

  /**
   * Inspects the specified volume and returns detailed information about it.
   *
   * @param {string} name The name or ID of the volume to inspect.
   * @param {*} [options] Optional HTTP request options to override the default settings.
   * @throws {RequiredError} Throws an error if the required parameters are not provided.
   * @group Volume API
   * @returns>} Possible response codes:
   * - 200 (OK): The volume was successfully inspected.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 401 (Unauthorized): The client must authenticate itself to get the requested response.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 404 (Not Found): The server could not find the requested resource.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   * - 504 (Gateway Timeout): The server did not receive a timely response from an upstream server.
   */
  public volumeInspect(name: string, options?: RawAxiosRequestConfig) {
    return this.volumeApi.volumeInspect(name, options)
  }

  /**
   * Lists all volumes.
   *
   * @param {string} [filters] JSON encoded value of the filters (a `map[string][]string`) to process on the volumes list. Available filters:
   * - `dangling=<boolean>`: When set to `true` (or `1`), returns all volumes that are not in use by a container. When set to `false` (or `0`), only volumes that are in use by one or more containers are returned.
   * - `driver=<volume-driver-name>`: Matches volumes based on their driver.
   * - `label=<key>` or `label=<key>:<value>`: Matches volumes based on the presence of a `label` alone or a `label` and a value.
   * - `name=<volume-name>`: Matches all or part of a volume name.
   * @param {*} [options] Optional HTTP request options to override the default settings.
   * @throws {RequiredError} Throws an error if the required parameters are not provided.
   * @group Volume API
   * @returns>} Possible response codes:
   * - 200 (OK): The volumes were successfully listed.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 401 (Unauthorized): The client must authenticate itself to get the requested response.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   * - 504 (Gateway Timeout): The server did not receive a timely response from an upstream server.
   */
  public volumeList(filters?: string, options?: RawAxiosRequestConfig) {
    return this.volumeApi.volumeList(filters, options)
  }

  /**
   * Deletes unused volumes.
   *
   * @param {string} [filters] Filters to process on the prune list, encoded as JSON (a `map[string][]string`). Available filters:
   * - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`): Prune volumes with (or without, in case `label!=...` is used) the specified labels.
   * @param {*} [options] Optional HTTP request options to override the default settings.
   * @throws {RequiredError} Throws an error if the required parameters are not provided.
   * @group Volume API
   * @returns>} Possible response codes:
   * - 200 (OK): The volumes were successfully pruned.
   * - 400 (Bad Request): The server could not understand the request due to invalid syntax.
   * - 401 (Unauthorized): The client must authenticate itself to get the requested response.
   * - 403 (Forbidden): The client does not have access rights to the content.
   * - 500 (Internal Server Error): The server encountered an internal error and could not complete the request.
   * - 503 (Service Unavailable): The server is not ready to handle the request.
   * - 504 (Gateway Timeout): The server did not receive a timely response from an upstream server.
   */
  public volumePrune(filters?: string, options?: RawAxiosRequestConfig) {
    return this.volumeApi.volumePrune(filters, options)
  }
  //#endregion Volume
}
