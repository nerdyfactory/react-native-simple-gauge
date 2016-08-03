# react-native-simple-gauge

Gauge progress module for React Native  

Based on [react-native-circular-progress](https://github.com/bgryszko/react-native-circular-progress)  
![image](screenshot.gif)  

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
  backgroundColor="#b0c4de" />
```  

Use `cropDegree` to vary the size of arc  


## License

MIT
