import './main.css';
import * as React from 'react';
import { DatePickerProps } from './DatePicker';
interface EnhanceDatePickerProps extends Pick<DatePickerProps, 'onCancel'> {
    isOpen?: boolean;
}
type ModalDatePickerProps = EnhanceDatePickerProps & DatePickerProps & {
    isPopup?: boolean;
};
declare const ModalDatePicker: React.FC<ModalDatePickerProps>;
export * from './types';
export type { ModalDatePickerProps, EnhanceDatePickerProps, DatePickerProps };
export default ModalDatePicker;
