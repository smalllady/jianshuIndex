import React, { PureComponent } from 'react';
import { DetailWrapper,Content } from './style'
import {connect} from 'react-redux'
import {actionCreators} from './store'
class Detail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount(){
    this.props.getDetail(this.props.match.params.id)
  }
  render() {
    const {detailInfo} = this.props
    return (
      <DetailWrapper>
        <h1>{detailInfo.toJS().title}</h1>
        <Content dangerouslySetInnerHTML={{__html: detailInfo.toJS().content}} />
      </DetailWrapper>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    detailInfo: state.getIn(['detail','detailInfo'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getDetail: (id) => {
      dispatch(actionCreators.getDetailInfo(id))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Detail);