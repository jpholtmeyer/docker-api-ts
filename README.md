# docker-api-ts (targets Docker API v1.41)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Create a Docker object](#create-a-docker-object)
  - [Pull an image and get the image ID](#pull-an-image-and-get-the-image-id)
  - [Delete an image](#delete-an-image)
  - [Create a container and get the container ID](#create-a-container-and-get-the-container-id)
  - [Start a container](#start-a-container)
  - [Stop a container](#stop-a-container)
  - [Delete a container](#delete-a-container)
- [API](#api)
- [Generating the API Client (openapi-generator)](#generating-the-api-client-openapi-generator)
- [Generate documentation](#generate-documentation)
- [Building](#building)
- [Testing](#testing)
- [Contributing](#contributing)
- [Issues](#issues)
- [Docker Engine API Reference](#docker-engine-api-reference)

## Installation

To install the package, run:

```bash
npm i --save docker-api-ts
```

## Usage

### Create a Docker object
```typescript
const config = {
      basePath: "http://localhost:2375"
    }
  
    docker = new Docker(config)
```

### Pull an image and get the image ID
```typescript
const response = await docker.imageCreate(
  { 
    fromImage: "alpine", 
    tag: "latest" 
  }
)
const imageId = response.data.Id
```

### Delete an image
```typescript
const response = await docker.imageDelete(imageId)
```

### Create a container and get the container ID
```typescript
const response = await docker.containerCreate({
    Image: "alpine",
    Cmd: ["echo", "hello world"]
})

const containerId = response.data.Id
```

### Start a container
```typescript
const response = await docker.containerStart(containerId)
```

### Stop a container
```typescript
const response = await docker.containerStop(containerId)
```

### Delete a container
```typescript
const response = await docker.containerDelete(containerId)
```

## API
Comprehensive TypeDoc generated documentation is available at:  
https://jholtmeyer.github.io/docker-api-ts

The `Docker` class provides the following functions:
- configCreate
- configDelete
- configInspect
- configList
- configUpdate
- containerDelete
- containerArchive
- containerArchiveInfo
- containerAttachWebsocket
- containerChanges
- containerCreate
- containerExport
- containerInspect
- containerKill
- containerList
- containerLogs
- containerPause
- containerPrune
- containerRename
- containerResize
- containerRestart
- containerStart
- containerStats
- containerStop
- containerTop
- containerUnpause
- containerUpdate
- containerWait
- putContainerArchive
- distributionInspect
- containerExec
- execInspect
- execResize
- execStart
- buildPrune
- imageBuild
- imageCommit
- imageCreate
- imageDelete
- imageGet
- imageGetAll
- imageHistory
- imageInspect
- imageList
- imageLoad
- imagePrune
- imagePush
- imageSearch
- imageTag
- networkConnect
- networkCreate
- networkDelete
- networkDisconnect
- networkInspect
- networkList
- networkPrune
- nodeDelete
- nodeInspect
- nodeList
- nodeUpdate
- getPluginPrivileges
- pluginCreate
- pluginDelete
- pluginDisable
- pluginEnable
- pluginInpect
- pluginList
- pluginPull
- pluginPush
- pluginSet
- pluginUpgrade
- secretCreate
- secretDelete
- secretInspect
- secretList
- secretUpdate
- serviceCreate
- serviceDelete
- serviceInspect
- serviceList
- serviceLogs
- serviceUpdate
- session
- swarmInit
- swarmInspect
- swarmJoin
- swarmLeave
- swarmUnlock
- swarmUnlockkey
- swarmUpdate
- systemAuth
- systemDataUsage
- systemEvents
- systemInfo
- systemPing
- systemPingHead
- systemVersion
- taskInspect
- taskList
- taskLogs
- volumeCreate
- volumeDelete
- volumeInspect
- volumeList
- volumePrune

## Generating the API Client (openapi-generator)
An OpenAPI spec should be placed at the root of the `src` directory.  
To generate an API client, run `npm run generate`.  
This will generate a new API client in the `src/generated` directory.

NOTE: The only template that has been modified is the `index.mustache` template. This acts as consolidating convenience wrapper around the available API clients.

## Generate documentation

## Building
To build the package, run `npm run build`.  
This will compile the TypeScript code into JavaScript and place the resulting files in the `dist` directory.  
Tests are built and placed in the `dist/__tests__` directory.

## Testing
A Docker daemon is required to run all tests.  

If running tests against a Docker swarm, set the `SWARM_MODE` environment variable to `true`.  

To run the tests, run `npm run test`.  
This will compile the TypeScript code and then run the tests.

## Contributing
Everyone is welcome to contribute.  
Please feel free to fork the repository, make your changes, and submit a pull request.  

## Issues
If you encounter any issues or have suggestions for improvement, please open an issue in the repository.

## Docker Engine API Reference
https://docs.docker.com/engine/api/v1.41/


