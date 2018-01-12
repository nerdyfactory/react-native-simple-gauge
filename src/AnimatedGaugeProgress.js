import React from 'react';
import PropTypes from 'prop-types';
import { View, Animated, ViewPropTypes, AppState,Easing } from 'react-native';
import GaugeProgress from './GaugeProgress';
const AnimatedProgress = Animated.createAnimatedComponent(GaugeProgress);

export default class AnimatedGaugeProgress extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState,
      chartFillAnimation: new Animated.Value(props.prefill || 0)
    }
  }

  componentDidMount() { 
    this.animateFill();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fill !== this.props.fill) {
      this.animateFill();
    }
  }

  animateFill() {
    const { tension, friction, onAnimationComplete, prefill } = this.props;
    const { chartFillAnimation } = this.state

    if (!chartFillAnimation) {
      var newChartFillAnimation = new Animated.Value(prefill || 0)
      this.setState({chartFillAnimation: newChartFillAnimation})
    }

    Animated.spring(
      chartFillAnimation || newChartFillAnimation,
      {
        toValue: this.props.fill,
        tension,
        friction
      }
    ).start(onAnimationComplete);
  }
  
  performLinearAnimation(toValue, duration) {
    const { onLinearAnimationComplete } = this.props;
    Animated.timing(this.state.chartFillAnimation, {
      toValue: toValue,
      easing: Easing.linear,
      duration: duration
    }).start(onLinearAnimationComplete);
  }

  render() {
    const { fill, prefill, ...other } = this.props;

    return (
      <AnimatedProgress
        {...other}
        fill={this.state.chartFillAnimation}
        />
    )
  }
}

AnimatedGaugeProgress.propTypes = {
  style: ViewPropTypes.style,
  size: PropTypes.number.isRequired,
  fill: PropTypes.number,
  prefill: PropTypes.number,
  width: PropTypes.number.isRequired,
  tintColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  tension: PropTypes.number,
  friction: PropTypes.number,
  onAnimationComplete: PropTypes.func,
  onLinearAnimationComplete: PropTypes.func,
}

AnimatedGaugeProgress.defaultProps = {
  tension: 7,
  friction: 10
};
