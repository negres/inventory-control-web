import { Method } from 'axios';
import { Stringifiable } from 'query-string';

export interface IAxiosRequest {
  method?: Method,
  endpoint: string,
  data?: Record<string, any>,
  headers?: Record<string, string>,
  query?: Record<string, string | number | boolean | Stringifiable[]>,
  toExpress?: boolean,
}
