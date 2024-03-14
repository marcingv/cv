import {
  provideRouterStore,
  ROUTER_CANCEL,
  ROUTER_ERROR,
  ROUTER_NAVIGATED,
  ROUTER_NAVIGATION,
  ROUTER_REQUEST,
} from '@ngrx/router-store';

export const ROUTER_BLOCKED_ACTIONS_LIST = [
  ROUTER_ERROR,
  ROUTER_CANCEL,
  ROUTER_NAVIGATION,
  ROUTER_NAVIGATED,
  ROUTER_REQUEST,
];

export { provideRouterStore };
