import { InfinitySpin } from 'react-loader-spinner';
import { Component } from 'react';
import style from './loader.module.css';
export class Spinner extends Component {
  render() {
    return (
      <div className={style.Loader}>
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }
}
