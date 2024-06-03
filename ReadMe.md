# react-native-year-month-pickers

This React-Native component library provides a seamless month and year picker for both Android and iOS platforms.

## Examples

<p align="left">
  <img width=220 title="Screenshot-1" src="https://github.com/solutiontechseries/react-native-year-month-pickers/blob/master/assets/screenshot-1.png">
  <img width=220 title="Screenshot-2" src="https://github.com/solutiontechseries/react-native-year-month-pickers/blob/master/assets/screenshot-2.png">
</p>

# Install

## Step 1

```bash
npm i react-native-year-month-pickers --save
```

or

```bash
yarn add react-native-year-month-pickers
```

## Step 2

### iOS

```bash
cd ios
pod install
```

## Usage

Import library

```javascript
import YearMonthPicker from "react-native-year-month-pickers";
```

Create required state variables

```javascript
const [showPicker, setShowPicker] = useState(false);
const [monthYear, setMonthYear] = useState("");
```

Usage of the Month and Year value picker

```javascript
<View>
  <Button title={"Show Date Picker"} onPress={() => setShowPicker(true)} />

  <YearMonthPicker
    show={showPicker}
    value={monthYear}
    onClose={() => setShowPicker(false)}
    onDone={(date) => {
      setMonthYear(date);
      setShowPicker(false);
    }}
  />
</View>
```

### Request Object

| Property        | Required | Type                 | Description                                                                                                     |
| --------------- | :------- | :------------------- | :-------------------------------------------------------------------------------------------------------------- |
| `show`          | **Yes**  | bool (default false) | Show or Hide year month picker                                                                                  |
| `value`         | **Yes**  | string (default '')  | Selected date or empty string to show today's date                                                              |
| `animationType` | **No**   | string               | This props used to show picker animation type like a Model acceptable values are `fade`, `slide` and `none`     |
| `primaryColor`  | **No**   | string               | A string color value of the picker                                                                              |
| `onClose`       | **Yes**  | function             | A callback function when hardware back button pressed in android or `Cancel` button pressed to close the picker |
| `onDone`        | **Yes**  | function             | A callback function called when `Done` button pressed in picker and return a selected date as function argument |

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website.

## License

_MIT_
