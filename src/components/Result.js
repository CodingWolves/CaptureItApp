import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/components/_result.module.scss";

export default class Result extends React.Component {
  constructor(props) {
    super();
    this.state = {
      final_percentage: props.percentage,
      animation: {
        count: 0,
        cur_percentage: 0,
        timeout: false,
        ended: false,
      },
    };
    this.advState = this.advState.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  resetState() {
    this.setState((state) => {
      var animation = state.animation;
      animation.count = 0;
      animation.timeout = false;
      animation.ended = false;
      animation.cur_percentage = Math.round(Math.random() * 100);
      state.final_percentage = this.props.percentage;
      return state;
    });
  }

  advState() {
    if (this.state.animation.count < 10) {
      this.setState((state) => {
        var animation = state.animation;
        let randPer = Math.round(Math.random() * 100);
        while (Math.abs(randPer - animation.cur_percentage) < 10) {
          randPer = Math.round(Math.random() * 100);
        }
        animation.cur_percentage = randPer;
        animation.count++;
        animation.timeout = false;
        return state;
      });
    } else {
      this.setState((state) => {
        var animation = state.animation;
        animation.cur_percentage = state.final_percentage;
        animation.ended = true;
        animation.timeout = true;
        return state;
      });
    }
  }

  render() {
    let backColor = "";
    if (this.state.animation.ended === true) {
      if (this.props.percentage !== this.state.final_percentage) {
        setTimeout(this.resetState, 10);
      } else {
        backColor = "green";
      }
    }
    if (this.state.animation.timeout === false) {
      var animation = this.state.animation;
      animation.timeout = true;
      setTimeout(() => {
        this.advState();
      }, 500);
    }

    return (
      <div style={this.props.style}>
        <div className={styles.progressBar}>
          <div
            style={{
              width: this.state.animation.cur_percentage + "%",
              backgroundColor: backColor,
            }}
          ></div>
          <span>{this.state.animation.cur_percentage}%</span>
        </div>
      </div>
    );
  }
}

Result.propTypes = {
  percentage: PropTypes.number.isRequired,
};
