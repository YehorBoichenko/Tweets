/**

@component
LoaderSpinner - A React class component that renders a loader spinner using react-loader-spinner package.
@prop {string} type - type of spinner to be displayed
@prop {string} color - color of the spinner
@prop {number} height - height of the spinner
@prop {number} width - width of the spinner
@return JSX.Element
*/
import React, { Component } from "react";
import styles from "./Loader.module.css";
import { BallTriangle } from "react-loader-spinner";
export default class LoaderSpinner extends Component {
  render() {
    return (
      <div className={styles.loader}>
        <BallTriangle
          type="BallTriangle"
          color="#3f51b5"
          height={200}
          width={200}
        />
      </div>
    );
  }
}
