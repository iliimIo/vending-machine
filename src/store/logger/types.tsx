import { ILogger } from './reducer';

export enum TYPE {
  LOGGER_PENDING = 'LOGGER_PENDING',
  LOGGER_FAIL = 'LOGGER_FAIL',
  GET_LOGGER = 'GET_LOGGER',
  SET_LOGGER = 'SET_LOGGER',
}

interface LOGGER_PENDING {
  type: TYPE.LOGGER_PENDING;
}

interface LOGGER_FAIL {
  type: TYPE.LOGGER_FAIL;
  payload: string;
}

interface GET_LOGGER {
  type: TYPE.GET_LOGGER;
}

interface SET_LOGGER {
  type: TYPE.SET_LOGGER;
  payload: ILogger;
}

export type Action = LOGGER_PENDING | LOGGER_FAIL | GET_LOGGER | SET_LOGGER;
