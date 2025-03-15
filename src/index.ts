import type { Plugin } from "@elizaos/core";
import { GrootAction } from './actions/groot';
export const GrootPlugin: Plugin = {
  name: 'plugin-groot',
  description: 'Groot plugin',
  providers: [],
  actions: [GrootAction],
  evaluators: [],
  services: [],
  clients: [],
  adapters: [],
};

export default GrootPlugin;