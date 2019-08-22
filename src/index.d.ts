import React from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';

type GaugeProgressProps = {
  style?: StyleProp<ViewStyle>;
  size: number;
  fill: number;
  width: number;
  tintColor?: string;
  stroke?: number[];
  strokeCap?: string;
  backgroundColor?: string;
  rotation?: number;
  cropDegree?: number;
};

type GaugeProgressState = {
  isVisible: boolean;
};

export class GaugeProgress extends React.Component<
  GaugeProgressProps,
  GaugeProgressState
> {}

type AnimatedGaugeProgressProps = GaugeProgressProps & {
  prefill?: number;
  tension?: number;
  friction?: number;
  onAnimationComplete?: (callback: { finished: boolean }) => void;
};
type AnimatedGaugeProgressState = {
  chartFillAnimation: Animated.Value;
};

export class AnimatedGaugeProgress extends React.Component<
  AnimatedGaugeProgressProps,
  AnimatedGaugeProgressState
> {}
