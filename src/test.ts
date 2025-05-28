import type {
  IAgentRuntime,
  TestSuite,
  Memory,
  HandlerCallback,
} from "@elizaos/core-plugin-v2";
import mcpPlugin from "./index.ts";

/**
 * MCP Plugin Test Suite - Tests for Model Context Protocol functionality
 */
export class McpPluginTestSuite implements TestSuite {
  name = "McpPlugin";
  description = "Tests for the MCP plugin functionality";

  tests = [
    {
      name: "Should have basic plugin structure",
      fn: async (runtime: IAgentRuntime) => {
        if (!mcpPlugin.name || !mcpPlugin.actions || !mcpPlugin.services) {
          throw new Error("Plugin missing basic structure");
        }
      },
    },
   
  ];
}

// Export a default instance
export default new McpPluginTestSuite();
