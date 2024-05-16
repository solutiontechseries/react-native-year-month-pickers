import {StyleSheet} from 'react-native';
import {colors} from './default-values';

export const styles = StyleSheet.create({
  monthText: {
    fontSize: 18,
  },
  monthView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    height: 50,
  },
  listOuterView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  doneButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  devider: {
    height: 1,
    backgroundColor: colors.LIGHT_GRAY,
    marginVertical: 10,
  },
  pickerTitleText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.BLACK,
    flex: 1,
    textAlign: 'center',
  },
  prevText: {
    fontSize: 16,
    color: colors.BLACK,
    fontWeight: '500',
  },
  titleView: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  safearea: {
    backgroundColor: colors.WHITE,
  },
  main: {
    flex: 1,
    backgroundColor: colors.RGBA,
    justifyContent: 'flex-end',
  },
  inner: {
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
});
