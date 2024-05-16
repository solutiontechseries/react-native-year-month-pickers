export type PickerProps = {
  show: boolean;
  value: string;
  primaryColor?: string;
  animationType?: 'fade' | 'slide' | 'none';
  onClose: () => void;
  onDone: (arg: string) => void;
};
export type PrevTextProps = {
  title: string;
  onPress: () => void;
};
