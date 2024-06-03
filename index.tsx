import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SearchBar from './components/search-bar';
import {IMAGES} from './assets';
import Buttons from './components/button';
import {PickerProps} from './utils/props-type';
import {COLORS} from './utils/values';

const MultipleSelection: React.FC<PickerProps> = ({
  show,
  type,
  enableSearch=true,
  searchPlaceholder='Search here',
  pickerTitle,
  emptyTitle='No Record(s) Found',
  data,
  value,
  rowTitleKey,
  rowUniqueKey,
  extraTitleSymbol,
  extraTitleKey,
  onDone,
  onClose,
}) => {
  const [selectedData, setSelectedData] = useState<any>([]);
  const [searchData, setSearchData] = useState([]);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    if (value !== '' && show && type === 'single') {
      setSelectedData([value]);
    } else if (
      value !== '' &&
      show &&
      type === 'multiple' &&
      value?.length > 0
    ) {
      setSelectedData(
        data?.filter(e =>
          value?.some(item => item[rowUniqueKey] === e[rowUniqueKey]),
        ),
      );
    }
  }, [show, value]);

  return React.useMemo(() => {
    const onChangeText = (txt: string) => {
      setSearchData(
        data.filter(item => {
          if (extraTitleKey) {
            return (
              item[rowTitleKey]?.toLowerCase()?.includes(txt?.toLowerCase()) ||
              item[extraTitleSymbol]
                ?.toLowerCase()
                ?.includes(txt?.toLowerCase())
            );
          } else {
            return item[rowTitleKey]
              ?.toLowerCase()
              ?.includes(txt?.toLowerCase());
          }
        }),
      );
      setSearchText(txt);
    };
    const onDonePress = () => {
      onDone(selectedData.length === 1 ? selectedData[0] : selectedData);
      setSelectedData([]);
    };
    const onItemPress = (item: any, isAdded: boolean) => {
      let d = [...selectedData];
      if (type === 'single') {
        setSelectedData([item]);
      } else {
        if (isAdded) {
          d = d.filter(el => el[rowUniqueKey] !== item[rowUniqueKey]);
        } else {
          d.push(item);
        }
        setSelectedData(d);
      }
    };
    return (
      <Modal
        visible={show}
        animationType={'slide'}
        transparent={true}
        onRequestClose={onClose}>
        <SafeAreaView style={styles.safearea}>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <Text style={styles.pickerTitleText}>{pickerTitle}</Text>
              {enableSearch&&<SearchBar
                value={searchText}
                placeholder={searchPlaceholder}
                onChangeText={onChangeText}
                onClear={() => setSearchText('')}
              />}
 <View style={styles.devider} />
              <View style={styles.listView}>
                <FlatList
                  data={searchText === '' ? data : searchData}
                  ListEmptyComponent={()=>{
                    return <View style={styles.emptyView}>
                      <Text style={styles.emptyTitleText}>{emptyTitle}</Text>
                    </View>
                  }}
                  renderItem={({item}) => {
                    const active = selectedData?.some(
                      e => e[rowUniqueKey] === item[rowUniqueKey],
                    );
                    return (
                      <React.Fragment key={item[rowUniqueKey]}>
                        <TouchableOpacity
                          activeOpacity={0.65}
                          onPress={() => onItemPress(item, active)}
                          style={styles.rowView}>
                          <Image
                            source={active ? IMAGES.CHECK : IMAGES.UNCHECK}
                            style={[
                              styles.check,
                              {
                                tintColor: active
                                  ? COLORS.PRIMARY
                                  : COLORS.TITLE,
                              },
                            ]}
                          />
                          <Text style={styles.rowTitleText}>
                            {item[rowTitleKey]}
                            {extraTitleSymbol && extraTitleSymbol}
                            {extraTitleKey && item[extraTitleKey]}
                          </Text>
                        </TouchableOpacity>

                        <View style={styles.devider} />
                      </React.Fragment>
                    );
                  }}
                  keyExtractor={item => item[rowUniqueKey]}
                />
              </View>
            </View>
          </View>

          <View style={styles.devider} />

          <View style={styles.buttonsRow}>
            <Buttons title={'Cancel'} onPress={onClose} type={'cancel'} />
            <Buttons title={'Done'} onPress={onDonePress} type={'done'} />
          </View>
        </SafeAreaView>
        <SafeAreaView style={styles.bottomSafearea} />
      </Modal>
    );
  }, [
    show,
    data,
    type,
    pickerTitle,
    rowUniqueKey,
    rowTitleKey,
    extraTitleKey,
    extraTitleSymbol,
    onClose,
    onDone,
    searchText,
    searchData,
    selectedData,
  ]);
};

const styles = StyleSheet.create({
  emptyView:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 110
  },
  emptyTitleText:{
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: COLORS.TITLE,
  },
  rowTitleText: {
    fontWeight: '400',
    fontSize: 17,
    color: COLORS.TITLE,
    marginLeft: 15,
  },
  check: {
    height: 22,
    width: 22,
  },
  listView: {marginBottom: 110},
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 15,
  },
  devider: {
    height: 1,
    backgroundColor: '#d2d2d2',
  },
  buttonsRow: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  pickerTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.PRIMARY,
    marginBottom: 15,
  },
  safearea: {
    backgroundColor: 'white',
    flex: 1,
  },
  bottomSafearea: {
    backgroundColor: 'white',
    flex: 0,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)',
    justifyContent: 'flex-end',
  },
  innerContainer: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 5,
    maxHeight: '80%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default MultipleSelection;
