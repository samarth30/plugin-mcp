import {
  type IAgentRuntime,
  type Plugin,
  logger,
} from "@elizaos/core-plugin-v2";
import { callToolAction } from "./actions/callToolAction";
import { readResourceAction } from "./actions/readResourceAction";
import { provider } from "./provider";
import { McpService } from "./service";
import mcpPluginTestSuite from "./test.ts";

const mcpPlugin: Plugin = {
  name: "mcp",
  description: "Plugin for connecting to MCP (Model Context Protocol) servers",

  init: async (_config: Record<string, string>, _runtime: IAgentRuntime) => {
    logger.info("Initializing MCP plugin...");
  },

  services: [McpService],
  actions: [callToolAction, readResourceAction],
  providers: [provider],
  tests: [mcpPluginTestSuite],
};

export type { McpService };

export default mcpPlugin;
