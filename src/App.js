import React, { Component } from 'react';
import LayoutBox from "@/layout/LayoutBox"
import '@/App.scss';  // 引入样式文件

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <LayoutBox />
    );
  }
}
export default App;