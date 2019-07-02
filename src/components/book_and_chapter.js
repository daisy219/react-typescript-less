/**
* 课本选择公共组件
*/
// 问题记录：级联选择器默认值设置不上

import React from 'react';
// import { Cascader, Row, Col, Tree  } from 'antd';
import { get_textbooks, get_onebook, get_child_node } from '../services/home';
import './style/choose_textbook.less';
import ChooseTextbook from '../store/containers/textbook';
class BookAndChapterTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_chapter: undefined,
      tree_data: [],
      bookid: '',
    };
  // this.method = this.method.bind(this);
  }
  componentWillMount() {
    // this.get_textbooks();
  }
  changeNode(nodeid) {
    // console.log(nodeid);
    this.props.changeNode(nodeid);
  }
  getCurrentBook(bookid) {
    this.props.getCurrentBook(bookid);
  }

  render(){
   return (
     <div className="choose_textbook_model">
        <ChooseTextbook
          changeNode={this.changeNode.bind(this)}
          getCurrentBook={this.getCurrentBook.bind(this)}/>
     </div>
   )
  }
}
export default BookAndChapterTree