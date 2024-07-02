import { DateConfig, dateConfigMap, Theme } from '../types';
export declare const isTouchEvent: <T extends HTMLElement>(e: React.TouchEvent<T> | React.MouseEvent<T>) => e is React.TouchEvent<T>;
export declare const isWheelEvent: <T extends HTMLElement>(e: React.TouchEvent<T> | React.MouseEvent<T> | React.WheelEvent<T>) => e is React.WheelEvent<T>;
export declare const isFunction: (val: unknown) => val is Function;
export declare const isDateConfigKey: (val: unknown) => val is keyof typeof dateConfigMap;
export declare const isObject: (val: unknown) => val is Record<string, unknown>;
export declare const isDateConfig: (val: unknown) => val is DateConfig;
export declare const isTheme: (val: unknown) => val is Theme;
