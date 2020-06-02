import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterItem } from '../style'
class Writer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { writerList } = this.props
    return (
      <WriterWrapper>
        <h2>推荐作者 <span>换一批</span></h2>
        {
          writerList.map((item) => {
            return (
              <WriterItem key={item.get('id')}>
                <img src={item.get('url')} alt="" />
                <h3>{item.get('title')}</h3>
                <p>{item.get('desc')}</p>
              </WriterItem>
            )
          })
        }

      </WriterWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    writerList: state.getIn(['home', 'writerList'])
  }
}
export default connect(mapStateToProps)(Writer);