import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Platform,
  ViewPropTypes,
  AppState,
  Dimensions,
} from 'react-native';
import { Surface, Shape, Path, Group, Text } from '@react-native-community/art';
import MetricsPath from 'art/metrics/path';
const ActiveState = 'active';

const { height, width } = Dimensions.get('window');
const vw = width / 100;
const vh = height / 100;

const max = 50;
const ticksGapfromProgressBar = 12;

export default class GaugeProgress extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      this.setState({
        isVisible: true,
      });
    });
  }

  circlePath(cx, cy, r, startDegree, endDegree) {
    let p = Path();
    p.path.push(0, cx + r, cy);
    p.path.push(
      4,
      cx,
      cy,
      r,
      (startDegree * Math.PI) / 180,
      (endDegree * Math.PI) / 180,
      1
    );
    return p;
  }

  ticksPath(cx, cy, r, startDegree, endDegree) {
    let p = Path();
    p.path.push(0, cx + r, cy);
    p.path.push(
      4,
      cx,
      cy,
      r,
      (startDegree * Math.PI) / 180,
      (endDegree * Math.PI) / 180,
      1
    );
    return p;
  }

  extractFill(fill) {
    if (fill < 0.01) {
      return 0;
    } else if (fill > max) {
      return max;
    }

    return fill;
  }

  render() {
    const {
      size,
      width,
      tintColor,
      backgroundColor,
      style,
      stroke,
      strokeCap,
      rotation,
      cropDegree,
      children,
    } = this.props;
    const backgroundPath = this.circlePath(
      size / 2,
      size / 2,
      size / 2 - width / 2,
      0,
      (360 * 99.9) / 100 - cropDegree
    );
    const ticksPath = this.ticksPath(
      size / 2,
      size / 2,
      size / 2 + ticksGapfromProgressBar,
      0,
      (360 * 99.9) / 100 - cropDegree
    );

    const fill = this.extractFill(this.props.fill);
    const circlePath = this.circlePath(
      size / 2,
      size / 2,
      size / 2 - width / 2,
      0,
      (((360 * 99.9) / 100 - cropDegree) * fill) / max
    );
    if (!this.state.isVisible) {
      return null;
    }
    const originX = vw < 3.9 ? (size + 10 * vw) / 2 : (size + 8 * vw) / 2;
    const originY = (size + 8 * vh) / 2;

    // console.log('=== originX ===', originX);
    // console.log('=== originY ===', originY);

    return (
      <View style={style}>
        <Surface width={size + 100} height={vh > 8.4 ? size + 100 : size + 70}>
          <Group
            rotation={rotation + cropDegree / 2}
            originX={originX}
            originY={originY}
          >
            <Shape d={ticksPath} stroke={backgroundColor} strokeWidth={2} />
            <Shape
              d={backgroundPath}
              strokeDash={stroke}
              stroke={backgroundColor}
              strokeWidth={width}
              strokeCap={strokeCap}
            />
            <Shape
              d={circlePath}
              strokeDash={stroke}
              stroke={tintColor}
              strokeWidth={width}
              strokeCap={strokeCap}
            />
          </Group>
          <Group x={originX + 174} y={originY - 35}>
            <Text
              font={`14px "Roboto-Regular", "Roboto", Arial`}
              fill="#c7c7cc"
              alignment="center"
            >
              40
            </Text>
          </Group>
          <Group x={originX - 110} y={originY - 35}>
            <Text
              font={`14px "Roboto-Regular", "Roboto", Arial`}
              fill="#c7c7cc"
              alignment="center"
            >
              10
            </Text>
          </Group>
          <Group x={originX + 90} y={originY - 125}>
            <Text
              font={`14px "Roboto-Regular", "Roboto", Arial`}
              fill="#c7c7cc"
              alignment="center"
            >
              30
            </Text>
          </Group>
          <Group x={originX - 30} y={originY - 125}>
            <Text
              font={`14px "Roboto-Regular", "Roboto", Arial`}
              fill="#c7c7cc"
              alignment="center"
            >
              20
            </Text>
          </Group>
          <Group x={originX - 107} y={originY + 70}>
            <Text
              font={`14px "Roboto-Regular", "Roboto", Arial`}
              fill="#c7c7cc"
              alignment="center"
            >
              0
            </Text>
          </Group>
          <Group x={originX + 175} y={originY + 70}>
            <Text
              font={`14px "Roboto-Regular", "Roboto", Arial`}
              fill="#c7c7cc"
              alignment="center"
            >
              Max
            </Text>
          </Group>
        </Surface>
        {typeof children === 'function' ? children(fill) : children}
      </View>
    );
  }
}

GaugeProgress.propTypes = {
  style: ViewPropTypes.style,
  size: PropTypes.number.isRequired,
  fill: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  tintColor: PropTypes.string,
  stroke: PropTypes.arrayOf(PropTypes.number),
  strokeCap: PropTypes.string,
  backgroundColor: PropTypes.string,
  rotation: PropTypes.number,
  cropDegree: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.array,
  ]),
};

GaugeProgress.defaultProps = {
  tintColor: 'black',
  backgroundColor: '#e4e4e4',
  rotation: 90,
  cropDegree: 90,
  strokeCap: 'butt',
};