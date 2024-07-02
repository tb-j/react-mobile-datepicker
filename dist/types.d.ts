export type Unit = 'year' | 'month' | 'date' | 'hour' | 'minute' | 'second';
export declare enum Direction {
    UP = 1,
    DOWN = -1
}
export declare const Themes: readonly ["default", "dark", "ios", "android", "android-dark"];
export type Theme = typeof Themes[number];
export interface DatePickerItemProps {
    type: Unit;
    value: Date;
    min: Date;
    max: Date;
    format: string | ((date: Date) => string);
    step: number;
    onSelect: Function;
    fastWheelMultiplier?: number;
}
export interface DateConfig extends Pick<DatePickerItemProps, 'format' | 'step'> {
    caption: string;
    type: Unit;
}
export declare const dateConfigMap: {
    [key in Unit]: DateConfig;
};
