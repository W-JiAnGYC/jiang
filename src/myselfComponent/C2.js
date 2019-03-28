import React, { Component } from 'react';

import './C2.css';

class C2 extends Component {
  render() {
    return (
      <div className="c2">
        Hello,我是在src/myselfComponent目录下的C2.js文件中的C1组件 我引入了相同目录下的 C2.css 文件，用来给我包含的文字设为蓝色
      </div>
    )
  }
}

export default C2;