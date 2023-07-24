import { proxy, useSnapshot } from "valtio";

export const state = proxy({ playerCount: 2 });
