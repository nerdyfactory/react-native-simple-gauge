import React from 'react';
import PropTypes from 'prop-types';
import { View, Animated, ViewPropTypes, AppState,Easing } from 'react-native';
import GaugeProgress from './GaugeProgress';
const AnimatedProgress = Animated.createAnimatedComponent(GaugeProgress);
const ActiveState = "active"

export default class AnimatedGaugeProgress extends React.Component {

  state = {
    chartFillAnimation: new Animated.Value(this.props.prefill || 0)
  }

  componentDidMount() { 
    this.animateFill();
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (nextAppState === ActiveState) this.animateFill();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fill !== this.props.fill) {
      this.animateFill();
    }
  }

  animateFill() {
    const { tension, friction, onAnimationComplete, prefill } = this.props;

    var chartFillAnimation = new Animated.Value(prefill || 0)
    this.setState({chartFillAnimation})

    Animated.spring(
      chartFillAnimation,
      {
        toValue: this.props.fill,
        tension,
        friction
      }
    ).start(onAnimationComplete);
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
