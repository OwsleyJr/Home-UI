import {
  Connection,
  HassConfig,
  HassEntities,
  HassServices,
  // callService,
} from "home-assistant-js-websocket";
import create from "zustand";

interface HassStore {
  connection?: Connection;
  entities: HassEntities;
  services: HassServices;
  config: Partial<HassConfig>;
  // callService: typeof callService;
}

const useHassStore = create<HassStore>(() => ({
  entities: {},
  services: {},
  config: {},
  // callService,
}));

export default useHassStore;
