import { Docker } from "../generated/index.js"
import { describe, beforeAll, afterAll, expect, test } from "vitest"
import { strict as assert } from "assert"
import * as fs from 'fs'
import type {
  ConfigurationParameters
} from "../generated/configuration.js"

/**
 * Wait for a specified amount of time.
 * @param {number} seconds - The number of seconds to wait.
 * @returns {Promise<void>} A promise that resolves after the specified time.
 */
function wait(seconds: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}


const defaultContainerConfig = {
  Image: "alpine",
  Cmd: ["sleep", "infinity"]
}

describe("Docker Class Tests", () => {
  let docker: Docker;

  beforeAll(async () => {
    const config: ConfigurationParameters = {
      basePath: "http://localhost:2375"
    };
  
    //TODO: throw error if the docker daemon is not running
    docker = new Docker(config);
  
    // TODO: imageCreate should accept object as param
    await docker.imageCreate({ fromImage: "alpine", tag: "latest" });
  });

  afterAll(() => {
  })

  //#region Config
  if (process.env.SWARM_MODE === "true") {
    test.skip("configCreate, configList, configDelete", async () => {
      //TODO: requires swarm mode
      const exampleConfig = {
        Name: "test_config",
        Data: "test_data"
      };
      const createResponse = await docker.configCreate(exampleConfig);
      expect(createResponse.status).toBe(201);
      const configId = createResponse.data.Id;

      // List configs and confirm the created config is present
      const listResponse = await docker.configList();
      expect(listResponse.status).toBe(200);
      expect(listResponse.data.some((config: { ID?: string }) => config.ID === configId)).toBe(true);

      // Delete the created config
      const deleteResponse = await docker.configDelete(configId);
      expect(deleteResponse.status).toBe(204);
    });

    test.skip("configInspect", async () => {
      // Create a test config
      const exampleConfig = {
        Name: "test_config_inspect",
        Data: "test_data_inspect"
      };
      const createResponse = await docker.configCreate(exampleConfig);
      expect(createResponse.status).toBe(201);
      const configId = createResponse.data.Id;

      // Inspect the created config
      const inspectResponse = await docker.configInspect(configId);
      expect(inspectResponse.status).toBe(200);

      // Delete the created config
      const deleteResponse = await docker.configDelete(configId);
      expect(deleteResponse.status).toBe(204);
    });

    test.skip("configUpdate", async () => {
      // Create a test config
      const exampleConfig = {
        Name: "test_config_update",
        Data: "test_data_update"
      };
      const createResponse = await docker.configCreate(exampleConfig);
      expect(createResponse.status).toBe(201);
      const configId = createResponse.data.Id;

      // Update the created config
      const updateResponse = await docker.configUpdate(configId, 1, { body: { Data: "updated_test_data" } });
      expect(updateResponse.status).toBe(200);

      // Delete the updated config
      const deleteResponse = await docker.configDelete(configId);
      expect(deleteResponse.status).toBe(204);
    });
  }
  //#endregion Config

  //#region Container
  test("containerDelete", async () => {
    // Create a container first
    const createResponse = await docker.containerCreate(defaultContainerConfig, { name: "containerDelete" })
    expect(createResponse.status).toBe(201)
    const containerId = createResponse.data.Id

    // Now delete the created container
    const deleteResponse = await docker.containerDelete(containerId)
    expect(deleteResponse.status).toBe(204)
  })

  test("containerInspect", async () => {
    // Create a container first
    const createResponse = await docker.containerCreate(defaultContainerConfig, { name: "containerInspect" })
    expect(createResponse.status).toBe(201)
    const containerId = createResponse.data.Id;

    // Inspect the created container
    const inspectResponse = await docker.containerInspect(containerId);
    expect(inspectResponse.status).toBe(200);

    // Now delete the created container
    const deleteResponse = await docker.containerDelete(containerId);
    expect(deleteResponse.status).toBe(204);
  });

  test("containerList", async () => {
    // Create a container first
    const createResponse = await docker.containerCreate(defaultContainerConfig, { name: "containerList" })
    expect(createResponse.status).toBe(201)
    const containerId = createResponse.data.Id

    // List containers
    const listResponse = await docker.containerList();
    expect(listResponse.status).toBe(200)

    // Now delete the created container
    const deleteResponse = await docker.containerDelete(containerId)
    expect(deleteResponse.status).toBe(204)
  });

  test("containerLogs", async () => {
    // Create a container first
    const createResponse = await docker.containerCreate(defaultContainerConfig, { name: "containerLogs" })
    expect(createResponse.status).toBe(201)
    const containerId = createResponse.data.Id

    const startResponse = await docker.containerStart(containerId)
    expect(startResponse.status).toBe(204)

    // Only get logs from the last hour
    const since = Math.floor((Date.now() - 60 * 60 * 1000) / 1000); // last hour in epoch time
    const until = Math.floor(Date.now() / 1000); // now in epoch time
    const response = await docker.containerLogs(containerId, { since, until, stdout: true })
    expect(response.status).toBe(200);

    const stopResponse = await docker.containerStop(containerId)
    expect(stopResponse.status).toBe(204)

    const deleteResponse = await docker.containerDelete(containerId)
    expect(deleteResponse.status).toBe(204)
  });

  test("containerStart", async () => {
    // Create a container first
    const createResponse = await docker.containerCreate(defaultContainerConfig, { name: "containerStart" })
    expect(createResponse.status).toBe(201)
    const containerId = createResponse.data.Id

    const startResponse = await docker.containerStart(containerId)
    expect(startResponse.status).toBe(204)

    const stopResponse = await docker.containerStop(containerId)
    expect(stopResponse.status).toBe(204)

    const deleteResponse = await docker.containerDelete(containerId)
    expect(deleteResponse.status).toBe(204)
  });

  test("containerStop", async () => {
    // Create a container first
    const createResponse = await docker.containerCreate(defaultContainerConfig, { name: "containerStop" })
    expect(createResponse.status).toBe(201)
    const containerId = createResponse.data.Id

    const startResponse = await docker.containerStart(containerId)
    expect(startResponse.status).toBe(204)

    // Stop the created container
    const stopResponse = await docker.containerStop(containerId)
    expect(stopResponse.status).toBe(204)

    // Now delete the created container
    const deleteResponse = await docker.containerDelete(containerId)
    expect(deleteResponse.status).toBe(204)
  });

  test("containerUpdate", async () => {
    const createResponse = await docker.containerCreate(defaultContainerConfig, { name: "containerUpdate" })
    expect(createResponse.status).toBe(201)
    const containerId = createResponse.data.Id

    const startResponse = await docker.containerStart(containerId)
    expect(startResponse.status).toBe(204)

    const updateResponse = await docker.containerUpdate(containerId, { CpuShares: 100 })
    expect(updateResponse.status).toBe(200)

    const stopResponse = await docker.containerStop(containerId)
    expect(stopResponse.status).toBe(204)

    const deleteResponse = await docker.containerDelete(containerId)
    expect(deleteResponse.status).toBe(204)
  });

  test("containerWait", async () => {
    // Create a container first
    const createResponse = await docker.containerCreate(defaultContainerConfig, { name: "containerWait" })
    expect(createResponse.status).toBe(201)
    const containerId = createResponse.data.Id

    const startResponse = await docker.containerStart(containerId)
    expect(startResponse.status).toBe(204)

    // Stop the created container
    const stopResponse = await docker.containerStop(containerId)
    expect(stopResponse.status).toBe(204)

    // Wait for the created container to stop
    const waitResponse = await docker.containerWait(containerId)
    expect(waitResponse.status).toBe(200)

    // Now delete the created container
    const deleteResponse = await docker.containerDelete(containerId)
    expect(deleteResponse.status).toBe(204)
  });
  //#endregion Container

  //#region Distribution
  test("distributionInspect", async () => {
    const response = await docker.distributionInspect("alpine")
    expect(response.status).toBe(200)
  });
  //#endregion Distribution

  //#region Exec
  test("containerExec", async () => {
    // Create a container first
    const createResponse = await docker.containerCreate(defaultContainerConfig, { name: "containerExec" });
    expect(createResponse.status).toBe(201);
    const containerId = createResponse.data.Id;

    const startResponse = await docker.containerStart(containerId)
    expect(startResponse.status).toBe(204)

    // Execute a command in the created container
    const execConfig = {
      AttachStdin: false,
      AttachStdout: true,
      AttachStderr: true,
      Tty: false,
      Cmd: ["echo", "hello world"]
    };
    const execResponse = await docker.containerExec(containerId, execConfig);
    expect(execResponse.status).toBe(201);

    const stopResponse = await docker.containerStop(containerId)
    expect(stopResponse.status).toBe(204)

    // Now delete the created container
    const deleteResponse = await docker.containerDelete(containerId);
    expect(deleteResponse.status).toBe(204);
  });
  
  test("execInspect", async () => {
    // Create a container first
    const createResponse = await docker.containerCreate(defaultContainerConfig, { name: "execInspect" });
    expect(createResponse.status).toBe(201);
    const containerId = createResponse.data.Id;

    const startResponse = await docker.containerStart(containerId)
    expect(startResponse.status).toBe(204)

    // Execute a command in the created container
    const execConfig = {
      AttachStdin: false,
      AttachStdout: true,
      AttachStderr: true,
      Tty: false,
      Cmd: ["echo", "hello world"]
    };
    const execCreateResponse = await docker.containerExec(containerId, execConfig);
    expect(execCreateResponse.status).toBe(201);
    const execId = execCreateResponse.data.Id;

    // Inspect the exec instance
    const execInspectResponse = await docker.execInspect(execId);
    expect(execInspectResponse.status).toBe(200);

    const stopResponse = await docker.containerStop(containerId)
    expect(stopResponse.status).toBe(204)

    // Now delete the created container
    const deleteResponse = await docker.containerDelete(containerId);
    expect(deleteResponse.status).toBe(204);
  });

  test("execStart", async () => {
    // Create a container first
    const createResponse = await docker.containerCreate(defaultContainerConfig, { name: "execStart" });
    expect(createResponse.status).toBe(201);
    const containerId = createResponse.data.Id;

    const startResponse = await docker.containerStart(containerId)
    expect(startResponse.status).toBe(204)

    // Execute a command in the created container
    const execConfig = {
      AttachStdin: false,
      AttachStdout: true,
      AttachStderr: true,
      Tty: false,
      Cmd: ["echo", "hello world"]
    };
    const execCreateResponse = await docker.containerExec(containerId, execConfig);
    expect(execCreateResponse.status).toBe(201);
    const execId = execCreateResponse.data.Id;

    // Start the exec instance
    const execStartResponse = await docker.execStart(execId, {});
    expect(execStartResponse.status).toBe(200);

    const stopResponse = await docker.containerStop(containerId)
    expect(stopResponse.status).toBe(204)

    // Now delete the created container
    const deleteResponse = await docker.containerDelete(containerId);
    expect(deleteResponse.status).toBe(204);
  });

  test("execResize", async () => {
    // Create a container first
    const createResponse = await docker.containerCreate(defaultContainerConfig, { name: "execResize" });
    expect(createResponse.status).toBe(201);
    const containerId = createResponse.data.Id;

    const startResponse = await docker.containerStart(containerId)
    expect(startResponse.status).toBe(204)

    // Execute a command in the created container
    const execConfig = {
      AttachStdin: false,
      AttachStdout: false,
      AttachStderr: false,
      Tty: true,
      Cmd: ["sleep", "infinity"]
    };
    const execCreateResponse = await docker.containerExec(containerId, execConfig);
    expect(execCreateResponse.status).toBe(201);
    const execId = execCreateResponse.data.Id;

    const execStartResponse = await docker.execStart(execId, { Detach: true });
    expect(execStartResponse.status).toBe(200);

    // Resize the exec instance
    const resizeResponse = await docker.execResize(execId, 1000, 300);
    expect(resizeResponse.status).toBe(200);

    const stopResponse = await docker.containerStop(containerId)
    expect(stopResponse.status).toBe(204)

    // Now delete the created container
    const deleteResponse = await docker.containerDelete(containerId);
    expect(deleteResponse.status).toBe(204);
  });
  //#endregion Exec
  
  //#region Image
  test("imageBuild", async () => {
    const buildConfig = {
      t: "test-image:latest",
      inputStream: new Blob([fs.readFileSync("./src/__tests__/resources/imageBuild/imageBuild.tar")]) as File
    };
    const response = await docker.imageBuild(buildConfig);
    expect(response.status).toBe(200);

    // Delete the built image
    const deleteResponse = await docker.imageDelete("test-image:latest");
    expect(deleteResponse.status).toBe(200)
  })

  test("imageCreate", async () => {
    const response = await docker.imageCreate({ fromImage: "alpine", tag: "3.19.2" });
    expect(response.status).toBe(200);

    // Delete the created image
    const deleteResponse = await docker.imageDelete("alpine:3.19.2");
    expect(deleteResponse.status).toBe(200);
  });

  test("imageDelete", async () => {
    // Create the ubuntu image
    const createResponse = await docker.imageCreate({ fromImage: "alpine", tag: "3.19.1" });
    expect(createResponse.status).toBe(200);

    // Delete the created ubuntu image
    const deleteResponse = await docker.imageDelete("alpine:3.19.1");
    expect(deleteResponse.status).toBe(200);
  });

  test("imageInspect", async () => {
    const createResponse = await docker.imageCreate({ fromImage: "alpine", tag: "3.18.4" });
    expect(createResponse.status).toBe(200);

    const inspectResponse = await docker.imageInspect("alpine:3.18.4");
    expect(inspectResponse.status).toBe(200);

    // Delete the created image
    const deleteResponse = await docker.imageDelete("alpine:3.18.4");
    expect(deleteResponse.status).toBe(200);
  });

  test("imageList", async () => {
    const createResponse = await docker.imageCreate({ fromImage: "alpine", tag: "3.18.2" });
    expect(createResponse.status).toBe(200);

    const listResponse = await docker.imageList();
    expect(listResponse.status).toBe(200);
    expect(listResponse.data.some(image => image.RepoTags.includes("alpine:3.18.2"))).toBe(true);

    const deleteResponse = await docker.imageDelete("alpine:3.18.2");
    expect(deleteResponse.status).toBe(200);
  });

  test("imageTag", async () => {
    const createResponse = await docker.imageCreate({ fromImage: "alpine", tag: "3.18.3" });
    expect(createResponse.status).toBe(200);

    const tagResponse = await docker.imageTag("alpine:3.18.3", "test-repo", "test");
    expect(tagResponse.status).toBe(201);

    const deleteResponse = await docker.imageDelete("alpine:3.18.3");
    expect(deleteResponse.status).toBe(200);
  });
  //#endregion Image

  //#region Network
  test("networkCreate", async () => {
    const createResponse = await docker.networkCreate({ Name: "test" });
    expect(createResponse.status).toBe(201);

    const deleteResponse = await docker.networkDelete("test");
    expect(deleteResponse.status).toBe(204);
  });

  test("networkDelete", async () => {
    const createResponse = await docker.networkCreate({ Name: "test2" });
    expect(createResponse.status).toBe(201);

    const deleteResponse = await docker.networkDelete("test2");
    expect(deleteResponse.status).toBe(204);
  });

  test("networkInspect", async () => {
    const createResponse = await docker.networkCreate({ Name: "test3" });
    expect(createResponse.status).toBe(201);

    const inspectResponse = await docker.networkInspect("test3");
    expect(inspectResponse.status).toBe(200);

    const deleteResponse = await docker.networkDelete("test3");
    expect(deleteResponse.status).toBe(204);
  });

  test("networkList", async () => {
    const createResponse = await docker.networkCreate({ Name: "test4" });
    expect(createResponse.status).toBe(201);

    const listResponse = await docker.networkList();
    expect(listResponse.status).toBe(200);
    expect(listResponse.data.some(network => network.Name === "test4")).toBe(true);

    const deleteResponse = await docker.networkDelete("test4");
    expect(deleteResponse.status).toBe(204);
  });
  //#endregion Network

  //#region Node
  if (process.env.SWARM_MODE === "true") {
    test.skip("nodeInspect", async () => {
      const response = await docker.nodeInspect("node_id");
      expect(response.status).toBe(200);
    });

    test.skip("nodeList", async () => {
      const response = await docker.nodeList();
      expect(response.status).toBe(200);
    });

    test.skip("nodeUpdate", async () => {
      const listResponse = await docker.nodeList();
      expect(listResponse.status).toBe(200);
      const firstNodeId = listResponse.data[0].ID;
      assert(firstNodeId !== undefined);
      
      const updateResponse = await docker.nodeUpdate(firstNodeId, 1, { Labels: { role: "manager" } });
      expect(updateResponse.status).toBe(200);
    });

    test.skip("nodeDelete", async () => {
      const listResponse = await docker.nodeList();
      expect(listResponse.status).toBe(200);
      const firstNodeId = listResponse.data[0].ID;
      assert(firstNodeId !== undefined);

      const deleteResponse = await docker.nodeDelete(firstNodeId);
      expect(deleteResponse.status).toBe(204);
    });
  }
  //#endregion Node

  //#region Plugin
  test("getPluginPrivileges", async () => {
    const examplePluginPrivilege = [
      {
        Name: "network",
        Value: ["host"]
      },
      {
        Name: "mount",
        Value: ["/var/lib/docker/plugins/"]
      },
      {
        Name: "mount",
        Value: [""]
      },
      {
        Name: "device",
        Value: ["/dev/fuse"]
      },
      {
        Name: "capabilities",
        Value: ["CAP_SYS_ADMIN"]
      }
    ]
    const pullResponse = await docker.pluginPull("vieux/sshfs", "get-plugin-privileges", undefined, examplePluginPrivilege)
    expect(pullResponse.status).toBe(200)

    const privilegesResponse = await docker.getPluginPrivileges("vieux/sshfs")
    expect(privilegesResponse.status).toBe(200)

    const deleteResponse = await docker.pluginDelete("get-plugin-privileges")
    expect(deleteResponse.status).toBe(200)
  })
  
  test.skip("pluginCreate, pluginList, pluginDelete", async () => {
    const pluginCreateTar = new File([fs.readFileSync("./src/__tests__/resources/pluginCreate/pluginCreate.tar")], "pluginCreate.tar")
    console.log(pluginCreateTar);
    const createResponse = await docker.pluginCreate("test-plugin", pluginCreateTar)
    expect(createResponse.status).toBe(204)

    const listResponse = await docker.pluginList()
    expect(listResponse.status).toBe(200)
    expect(listResponse.data.some(plugin => plugin.Name === "test-plugin")).toBe(true);

    const deleteResponse = await docker.pluginDelete("test-plugin")
    expect(deleteResponse.status).toBe(200)
  });

  test("pluginPull, pluginEnable, pluginDisable", async () => {
    const examplePluginPrivilege = [
      {
        Name: "network",
        Value: ["host"]
      },
      {
        Name: "mount",
        Value: ["/var/lib/docker/plugins/"]
      },
      {
        Name: "mount",
        Value: [""]
      },
      {
        Name: "device",
        Value: ["/dev/fuse"]
      },
      {
        Name: "capabilities",
        Value: ["CAP_SYS_ADMIN"]
      }
    ]
    const pullResponse = await docker.pluginPull("vieux/sshfs", "plugin-pull", undefined, examplePluginPrivilege)
    expect(pullResponse.status).toBe(200)

    const enableResponse = await docker.pluginEnable("plugin-pull", 5);
    expect(enableResponse.status).toBe(200);

    const deleteResponse = await docker.pluginDelete("plugin-pull", true)
    expect(deleteResponse.status).toBe(200);
  })

  test("pluginInspect", async () => {
    const examplePluginPrivilege = [
      {
        Name: "network",
        Value: ["host"]
      },
      {
        Name: "mount",
        Value: ["/var/lib/docker/plugins/"]
      },
      {
        Name: "mount",
        Value: [""]
      },
      {
        Name: "device",
        Value: ["/dev/fuse"]
      },
      {
        Name: "capabilities",
        Value: ["CAP_SYS_ADMIN"]
      }
    ]
    const pullResponse = await docker.pluginPull("vieux/sshfs", "plugin-inspect", undefined, examplePluginPrivilege)
    expect(pullResponse.status).toBe(200)

    const inspectResponse = await docker.pluginInspect("plugin-inspect");
    expect(inspectResponse.status).toBe(200);

    const deleteResponse = await docker.pluginDelete("plugin-inspect");
    expect(deleteResponse.status).toBe(200);
  });

  test.skip("pluginPush", async () => {
    //TODO
    const response = await docker.pluginPush("plugin_id");
    expect(response.status).toBe(200);
  })

  test("pluginSet", async () => {
    const examplePluginPrivilege = [
      {
        Name: "network",
        Value: ["host"]
      },
      {
        Name: "mount",
        Value: ["/var/lib/docker/plugins/"]
      },
      {
        Name: "mount",
        Value: [""]
      },
      {
        Name: "device",
        Value: ["/dev/fuse"]
      },
      {
        Name: "capabilities",
        Value: ["CAP_SYS_ADMIN"]
      }
    ]
    const pullResponse = await docker.pluginPull("vieux/sshfs", "plugin-set", undefined, examplePluginPrivilege)
    expect(pullResponse.status).toBe(200)

    const inspectResponse = await docker.pluginInspect("plugin-set");
    expect(inspectResponse.status).toBe(200);
    expect(inspectResponse.data.Enabled).toBe(false);
    
    const response = await docker.pluginSet("plugin-set", ["DEBUG=1"]);
    expect(response.status).toBe(204);

    const deleteResponse = await docker.pluginDelete("plugin-set");
    expect(deleteResponse.status).toBe(200);
  })

  test("pluginUpgrade", async () => {
    const examplePluginPrivilege = [
      {
        Name: "network",
        Value: ["host"]
      },
      {
        Name: "mount",
        Value: ["/var/lib/docker/plugins/"]
      },
      {
        Name: "mount",
        Value: [""]
      },
      {
        Name: "device",
        Value: ["/dev/fuse"]
      },
      {
        Name: "capabilities",
        Value: ["CAP_SYS_ADMIN"]
      }
    ]
    const pullResponse = await docker.pluginPull("vieux/sshfs:1.3", "plugin-upgrade", undefined, examplePluginPrivilege)
    expect(pullResponse.status).toBe(200)

    const response = await docker.pluginUpgrade("plugin-upgrade", "vieux/sshfs", undefined, examplePluginPrivilege)
    expect(response.status).toBe(200);

    const deleteResponse = await docker.pluginDelete("plugin-upgrade");
    expect(deleteResponse.status).toBe(200);
  });
  //#endregion Plugin

  //#region Secret
  if (process.env.SWARM_MODE === "true") {
    test.skip("secretCreate, secretList, secretDelete", async () => {
        const createResponse = await docker.secretCreate({ Name: "test-secret" });
        expect(createResponse.status).toBe(201);
        const secretId = createResponse.data.Id;

        const listResponse = await docker.secretList();
        expect(listResponse.status).toBe(200);
        expect(listResponse.data.some(secret => secret.ID === secretId)).toBe(true);

        const deleteResponse = await docker.secretDelete(secretId);
        expect(deleteResponse.status).toBe(204);
    });

    test.skip("secretInspect", async () => {
      const createResponse = await docker.secretCreate({ Name: "test-secret" });
      expect(createResponse.status).toBe(201);
      const secretId = createResponse.data.Id;

      const inspectResponse = await docker.secretInspect(secretId);
      expect(inspectResponse.status).toBe(200);

      const deleteResponse = await docker.secretDelete(secretId);
      expect(deleteResponse.status).toBe(204);
    });

    test.skip("secretUpdate", async () => {
      const createResponse = await docker.secretCreate({ Name: "test-secret" });
      expect(createResponse.status).toBe(201);
      const secretId = createResponse.data.Id;

      const updateResponse = await docker.secretUpdate(secretId, 1, { Labels: { updated: "true" } });
      expect(updateResponse.status).toBe(200);

      const deleteResponse = await docker.secretDelete(secretId);
      expect(deleteResponse.status).toBe(204);
    })
  }   
  //#endregion Secret

  //#region Service
  if (process.env.SWARM_MODE === "true") {
    test.skip("serviceCreate, serviceList, serviceDelete", async () => {
      const createResponse = await docker.serviceCreate({ Name: "test-service" });
      expect(createResponse.status).toBe(201);
      const serviceId = createResponse.data.ID;
      assert(serviceId !== undefined);

      const listResponse = await docker.serviceList();
      expect(listResponse.status).toBe(200);
      expect(listResponse.data.some(service => service.ID === serviceId)).toBe(true);

      const deleteResponse = await docker.serviceDelete(serviceId);
      expect(deleteResponse.status).toBe(204);
    });

    test.skip("serviceInspect", async () => {
      const createResponse = await docker.serviceCreate({ Name: "test-service" });
      expect(createResponse.status).toBe(201);
      const serviceId = createResponse.data.ID;
      assert(serviceId !== undefined);

      const inspectResponse = await docker.serviceInspect(serviceId);
      expect(inspectResponse.status).toBe(200);

      const deleteResponse = await docker.serviceDelete(serviceId);
      expect(deleteResponse.status).toBe(204);
    });

    test.skip("serviceUpdate", async () => {
      const createResponse = await docker.serviceCreate({ Name: "test-service" });
      expect(createResponse.status).toBe(201);
      const serviceId = createResponse.data.ID;
      assert(serviceId !== undefined);

      const updateResponse = await docker.serviceUpdate(serviceId, 1, { Labels: { updated: "true" } });
      expect(updateResponse.status).toBe(200);

      const deleteResponse = await docker.serviceDelete(serviceId);
      expect(deleteResponse.status).toBe(204);
    });

    test.skip("serviceLogs", async () => {
      const createResponse = await docker.serviceCreate({ Name: "test-service" });
      expect(createResponse.status).toBe(201);
      const serviceId = createResponse.data.ID;
      assert(serviceId !== undefined);

      const logsResponse = await docker.serviceLogs(serviceId);
      expect(logsResponse.status).toBe(200);

      const deleteResponse = await docker.serviceDelete(serviceId);
      expect(deleteResponse.status).toBe(204);
    })
  }
  //#endregion Service

  //#region Swarm
  if (process.env.SWARM_MODE === "true") {
    test.skip("swarmInit, swarmInspect, swarmUpdate, swarmLeave", async () => {
      //TODO
      const initResponse = await docker.swarmInit({
        ListenAddr: "0.0.0.0:2377",
        AdvertiseAddr: "0.0.0.0:2377",
        ForceNewCluster: false,
        Spec: {}
      });
      expect(initResponse.status).toBe(200);

      const inspectResponse = await docker.swarmInspect();
      expect(inspectResponse.status).toBe(200);

      const updateResponse = await docker.swarmUpdate(1, { Labels: { updated: "true" } });
      expect(updateResponse.status).toBe(200);

      const leaveResponse = await docker.swarmLeave();
      expect(leaveResponse.status).toBe(200);
    });

    test.skip("swarmJoin", async () => {
      const joinResponse = await docker.swarmJoin({});
      expect(joinResponse.status).toBe(200);
    });

    test.skip("swarmUnlock, swarmUnlockkey", async () => {
      const unlockKeyResponse = await docker.swarmUnlockkey();
      expect(unlockKeyResponse.status).toBe(200);
      const unlockKey = unlockKeyResponse.data.UnlockKey;
      assert(unlockKey !== undefined);

      const unlockResponse = await docker.swarmUnlock({ UnlockKey: unlockKey });
      expect(unlockResponse.status).toBe(200);
    });
  }
  //#endregion Swarm

  //#region System
  test("systemAuth", async () => {
    const authConfig = {
      username: process.env.REGISTRY_USERNAME,
      password: process.env.REGISTRY_PASSWORD,
      serveraddress: process.env.REGISTRY_URL
    };
    const response = await docker.systemAuth(authConfig);
    expect([200, 204]).toContain(response.status);
  });

  test("systemDataUsage", async () => {
    const response = await docker.systemDataUsage();
    expect(response.status).toBe(200);
  });

  test("systemEvents", async () => {
    // Return events from the last hour
    const since = Math.floor((Date.now() - 60 * 60 * 1000) / 1000).toString(); // last hour in epoch time
    const until = Math.floor(Date.now() / 1000).toString(); // now in epoch time
    const response = await docker.systemEvents({ since, until })
    expect(response.status).toBe(200);
  });

  test("systemInfo", async () => {
    const response = await docker.systemInfo();
    expect(response.status).toBe(200);
  });

  test("systemPing", async () => {
    const response = await docker.systemPing();
    expect(response.status).toBe(200);
  });

  test("systemVersion", async () => {
    const response = await docker.systemVersion();
    expect(response.status).toBe(200);
  });
  //#endregion System

  //#region Task
  if (process.env.SWARM_MODE === "true") {
    test.skip("taskList, taskInspect, taskLogs", async () => {
      const listResponse = await docker.taskList();
      expect(listResponse.status).toBe(200);
      expect(listResponse.data).toBeInstanceOf(Array);
      expect(listResponse.data.length).toBeGreaterThan(0);

      const firstTaskId = listResponse.data[0].ID;
      assert(firstTaskId !== undefined);
      const inspectResponse = await docker.taskInspect(firstTaskId);
      expect(inspectResponse.status).toBe(200);
      expect(inspectResponse.data.ID).toBe(firstTaskId);

      const logsResponse = await docker.taskLogs(firstTaskId);
      expect(logsResponse.status).toBe(200);
    });
  }
  //#endregion Task

  //#region Volume
  test("volumeCreate, volumeInspect, volumeDelete", async () => {
    const createResponse = await docker.volumeCreate({ Name: "test-volume" });
    expect(createResponse.status).toBe(201);
    const volumeId = createResponse.data.Name;
    assert(volumeId !== undefined);

    const inspectResponse = await docker.volumeInspect(volumeId);
    expect(inspectResponse.status).toBe(200);
    expect(inspectResponse.data.Name).toBe("test-volume");

    const deleteResponse = await docker.volumeDelete(volumeId);
    expect(deleteResponse.status).toBe(204);
  });

  test("volumeList", async () => {
    const response = await docker.volumeList();
    expect(response.status).toBe(200);
  });

  test("volumePrune", async () => {
    const createResponse = await docker.volumeCreate({ Name: "test-volume-prune" });
    expect(createResponse.status).toBe(201);
    const volumeId = createResponse.data.Name;
    assert(volumeId !== undefined);

    const pruneResponse = await docker.volumePrune();
    expect(pruneResponse.status).toBe(200);
  });
  //#endregion Volume
});
