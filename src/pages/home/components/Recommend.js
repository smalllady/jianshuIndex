import React, { PureComponent } from 'react';
import {connect} from "react-redux"
import {RecommendWrapper,RecommendItem} from '../style'
class Recommend extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const {recommendList} = this.props
    return ( 
      <RecommendWrapper>
        {
          recommendList.map((item)=>{
            return(
              <RecommendItem key={item.get('id')} imgUrl = {item.get('imgUrl')}></RecommendItem>
            )
          })
        }
      </RecommendWrapper>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recommendList: state.getIn(['home','recommendList'])
  }
}
export default connect(mapStateToProps)(Recommend);