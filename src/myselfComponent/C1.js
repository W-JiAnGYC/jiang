import React, { Component } from 'react';

import './C1.css';

class C1 extends Component{
  render(){
    return (
      <div className="c1">
        Hello,我是在src/myselfComponent目录下的C1.js文件中的C1组件 我引入了相同目录下的 C1.css 文件，用来给我包含的文字设为红色
      </div>
    )
  }
}

export default C1;