import React, {useMemo, useState} from 'react';
import {
  Button,
  FlatList,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {PrevText} from './components';
import {ANIMATION, colors} from './default-values';
import {PickerProps} from './props-type';
import {styles} from './styles';
import {MONTHS} from './utils';

const todayMonth: number = new Date().getMonth() + 1;
const todayYear: number = new Date().getFullYear();

const YearMonthPicker: React.FC<PickerProps> = ({
  show,
  value,
  animationType = ANIMATION,
  primaryColor = colors.PRIMARY,
  onClose,
  onDone,
}) => {
  const oldMonth: number =
    value === '' ? todayMonth : parseInt(value.split('/')[0], 10);
  const oldyear: number =
    value === '' ? todayYear : parseInt(value.split('/')[1], 10);
  const [month, setMonth] = useState<number>(oldMonth);
  const [year, setYear] = useState<number>(oldyear);

  return useMemo(() => {
    const onPrevPress = () => {
      setYear(year - 1);
    };
    const onNextPress = () => {
      setYear(year + 1);
    };
    const onDonePress = () => {
      onDone(`${month}/${year}`);
    };
    const onCancelPress = () => {
      setMonth(oldMonth);
      setYear(oldyear);
      onClose();
    };

    return (
      <Modal
        visible={show}
        transparent={true}
        animationType={animationType}
        onRequestClose={onCancelPress}>
        <SafeAreaView style={styles.main}>
          <View style={styles.inner}>
            <View style={styles.titleView}>
              <PrevText title={'Prev'} onPress={onPrevPress} />
              <Text style={styles.pickerTitleText}>{year}</Text>
              <PrevText title={'Next'} onPress={onNextPress} />
            </View>
            <View style={styles.devider} />
            <View style={styles.listOuterView}>
              <FlatList
                data={MONTHS}
                numColumns={3}
                scrollEnabled={false}
                renderItem={({item}) => {
                  const check = item.id === month;
                  const thisYear = todayMonth === item.id && todayYear === year;
                  return (
                    <TouchableOpacity
                      onPress={() => setMonth(item.id)}
                      key={item.name}
                      style={[
                        styles.monthView,
                        {
                          backgroundColor: check
                            ? primaryColor
                            : colors.TRANSPARENT,
                        },
                      ]}>
                      <Text
                        style={[
                          styles.monthText,
                          {
                            color: check
                              ? colors.WHITE
                              : thisYear
                              ? primaryColor
                              : colors.BLACK,
                            fontWeight: thisYear ? 'bold' : '400',
                          },
                        ]}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
            <View style={styles.devider} />
            <View style={styles.doneButtonRow}>
              <Button onPress={onCancelPress} title={'Cancel'} />
              <Button onPress={onDonePress} title={'Done'} />
            </View>
          </View>
        </SafeAreaView>
        <SafeAreaView style={styles.safearea} />
      </Modal>
    );
  }, [
    show,
    animationType,
    onDone,
    onClose,
    primaryColor,
    year,
    month,
    oldMonth,
    oldyear,
  ]);
};

export default YearMonthPicker;
