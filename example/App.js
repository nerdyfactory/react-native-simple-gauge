/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @format
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { AnimatedGaugeProgress } from 'react-native-simple-gauge';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.gaugeTop}>
          <AnimatedGaugeProgress
            size={200}
            width={15}
            fill={100}
            cropDegree={90}
            tintColor="#4682b4"
            backgroundColor="#b0c4de"
          />
        </View>
        <View style={styles.gaugeBottom}>
          <View style={styles.rowItem}>
            <AnimatedGaugeProgress
              size={50}
              width={3}
              fill={100}
              rotation={0}
              cropDegree={90}
              tintColor="#4682b4"
              backgroundColor="#b0c4de"
            />
          </View>
          <View style={styles.rowItem}>
            <AnimatedGaugeProgress
              size={50}
              width={3}
              fill={100}
              rotation={180}
              cropDegree={90}
              tintColor="#4682b4"
              backgroundColor="#b0c4de"
            />
          </View>
          <View style={styles.rowItem}>
            <AnimatedGaugeProgress
              size={50}
              width={3}
              fill={100}
              rotation={90}
              cropDegree={0}
              tintColor="#4682b4"
              backgroundColor="#b0c4de"
            />
          </View>
          <View style={styles.rowItem}>
            <AnimatedGaugeProgress
              size={50}
              width={3}
              fill={100}
              rotation={0}
              cropDegree={180}
              tintColor="#4682b4"
              backgroundColor="#b0c4de"
            />
          </View>
          <View style={styles.rowItem}>
            <AnimatedGaugeProgress
              size={50}
              width={3}
              fill={100}
              rotation={90}
              cropDegree={180}
              tintColor="#4682b4"
              backgroundColor="#b0c4de"
              strokeCap="circle"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gaugeTop: {
    padding: 20,
  },
  rowItem: {
    flex: 0.2,
    alignItems: 'center',
  },
  gaugeBottom: {
    flexDirection: 'row',
    paddingTop: 20,
  },
});
