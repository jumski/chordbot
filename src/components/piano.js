import React, { Component } from 'react';
import WhiteKey from './white-key';
import BlackKey from './black-key';

export default class Piano extends Component {
  render() {
    return <ul className="piano">
      <li className="key">
        <WhiteKey note="C"/>
        <BlackKey note="Cs"/>
      </li>
    </ul>;
  }

  // render() {
  //   return <ul className="piano">
  //     <li className="key">
  //       <span className="white-key" data-key="20" data-note="1C"></span>
  //       <span className="black-key" data-key="81" data-note="1Cs"></span>
  //     </li>
  //     <li className="key">
  //       <span className="white-key" data-key="65" data-note="1D"></span>
  //       <span className="black-key" data-key="87" data-note="1Ds"></span>
  //     </li>
  //     <li className="key">
  //       <span className="white-key" data-key="83" data-note="1E"></span>
  //     </li>
  //     <li className="key">
  //       <span className="white-key" data-key="68" data-note="1F"></span>
  //       <span className="black-key" data-key="82" data-note="1Fs"></span>
  //     </li>
  //     <li className="key">
  //       <span className="white-key" data-key="70" data-note="1G"></span>
  //       <span className="black-key highlighted" data-key="84" data-note="1Gs"></span>
  //     </li>
  //     <li className="key">
  //       <span className="white-key highlighted" data-key="71" data-note="2A"></span>
  //       <span className="black-key" data-key="89" data-note="2As"></span>
  //     </li>
  //     <li className="key">
  //       <span className="white-key" data-key="72" data-note="2B"></span>
  //     </li>
  //     <li className="key">
  //       <span className="white-key" data-key="74" data-note="2C"></span>
  //       <span className="black-key" data-key="73" data-note="2Cs"></span>
  //     </li>
  //     <li className="key">
  //       <span className="white-key" data-key="75" data-note="2D"></span>
  //       <span className="black-key" data-key="79" data-note="2Ds"></span>
  //     </li>
  //     <li className="key">
  //       <span className="white-key" data-key="76" data-note="2E"></span>
  //     </li>
  //     <li className="key">
  //       <span className="white-key" data-key="186" data-note="2F"></span>
  //       <span className="black-key" data-key="219" data-note="2Fs"></span>
  //     </li>
  //     <li className="key">
  //       <span className="white-key" data-key="222" data-note="2G"></span>
  //       <span className="black-key" data-key="221" data-note="2Gs"></span>
  //     </li>
  //     <li className="key">
  //       <span className="white-key" data-key="220" data-note="3A"></span>
  //       <span className="black-key" data-key="13" data-note="3As"></span>
  //     </li>
  //     <li className="key">
  //       <span className="white-key" data-key="37" data-note="3B"></span>
  //     </li>
  //   </ul>;
  // }
}
