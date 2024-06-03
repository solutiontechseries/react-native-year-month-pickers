import {ColorValue} from 'react-native';

export interface PickerProps {
  show: boolean;
  type: 'single' | 'multiple';
  emptyTitle:string,
  enableSearch: boolean,
  searchPlaceholder: string,
  pickerTitle: string;
  value: string | Object | any[];
  data: any[];
  pickerColor?: ColorValue;
  rowUniqueKey: string;
  rowTitleKey: string;
  extraTitleSymbol?: string;
  extraTitleKey?: string;
  onDone: (data: any) => void;
  onClose: () => void;
}
export type ButtonProps = {
  title: string;
  type: 'done' | 'cancel';
  onPress: () => void;
};
export type SearchBarProps = {
  value: string;
  placeholder: string;
  onChangeText: (txt: string) => void;
  onClear: () => void;
};
