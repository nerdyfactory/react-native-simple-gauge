# react-native-simple-gauge

Gauge progress module for React Native  

Based on [react-native-circular-progress](https://github.com/bgryszko/react-native-circular-progress)  

![image](screenshot.gif)  

## Requirement
RN 0.45+

RN <= 0.44 supported by 0.1.2

## Install  
1) `npm i --save react-native-simple-gauge`  
2) Link the ART library to your ReactNative project ([how to link a library](https://facebook.github.io/react-native/docs/linking-libraries-ios.html#content)). You'll find the React ART library in `node_modules/react-native/Libraries/ART/ART.xcodeproj`
## Usage  

```js
import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge';
```  

```jsx
<AnimatedGaugeProgress
  size={200}
  width={15}
  fill={100}
  rotation={90}
  cropDegree={90}
  tintColor="#4682b4"
  delay={0}
  backgroundColor="#b0c4de"
  stroke={[2, 2]} //For a equaly dashed line
  strokeCap="circle" />
```  

Use `cropDegree` to vary the size of arc  

Refer to below example to add something inside gauge.
```js
const size = 200;
const width = 15;
const cropDegree = 90;
const textOffset = width;
const textWidth = size - (textOffset*2);
const textHeight = size*(1 - cropDegree/360) - (textOffset*2);
```

```jsx
      <GaugeProgress
        size={size}
        width={width}
        fill={this.state.fill}
        cropDegree={cropDegree}
        ......
      >
        <View style={styles.textView}>
          <Text style={styles.text}>hello</Text>
        </View>
      </GaugeProgress>
```

```js
  textView: {
    position: 'absolute',
    top: textOffset,
    left: textOffset,
    width: textWidth,
    height: textHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
```


## License

MIT
