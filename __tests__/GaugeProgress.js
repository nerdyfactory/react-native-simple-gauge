import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { GaugeProgress } from '..'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <GaugeProgress/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
});

const size = 200;
const width = 15;
const cropDegree = 90;
const textOffset = width;
const textWidth = size - (textOffset*2);
const textHeight = size*(1 - cropDegree/360) - (textOffset*2)
const styles = StyleSheet.create({
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
  }
})
const children = (
  <View style={styles.textView}>
    <Text style={styles.text}>hello</Text>
  </View>
)

it('renders correctly with children function', () => {
  const tree = renderer.create(
    <GaugeProgress
      size={size}
      width={width}
      fill={50}
      cropDegree={cropDegree} >
      {(fill) => children}
    </GaugeProgress>
  ).toJSON()
  expect(tree).toMatchSnapshot()
});

it('renders correctly with children components', () => {
  const tree = renderer.create(
    <GaugeProgress
      size={size}
      width={width}
      fill={50}
      cropDegree={cropDegree} >
      {children}
    </GaugeProgress>
  ).toJSON()
  expect(tree).toMatchSnapshot()
});
