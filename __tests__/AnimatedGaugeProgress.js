import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { AnimatedGaugeProgress } from '..'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <AnimatedGaugeProgress
      size={200}
      width={15}
      fill={100}
      cropDegree={90}
      tintColor="#4682b4"
      backgroundColor="#b0c4de" />
  ).toJSON()
  expect(tree).toMatchSnapshot()
});
