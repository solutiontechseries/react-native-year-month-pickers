import {Text} from 'react-native';
import {PrevTextProps} from './props-type';
import {styles} from './styles';

export const PrevText: React.FC<PrevTextProps> = ({title, onPress}) => {
  return (
    <Text onPress={onPress} style={styles.prevText}>
      {title}
    </Text>
  );
};
