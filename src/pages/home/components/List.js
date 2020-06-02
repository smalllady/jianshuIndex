import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { ListWrapper, ListItem, ListInfo,LoadMore } from '../style'
import {actionCreators} from '../store'
import {Link} from 'react-router-dom'
class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { articleList,getMoreList ,page} = this.props
    return (
      <ListWrapper>
        {
          articleList.map((item,index) => {
            return (
              <Link key={index} to={"/detail/"+item.get('id')}>
                <ListItem >
                  <img src={item.get('imgUrl')} alt='' />
                  <ListInfo>
                  <h2>{item.get('title')}</h2>
                  <p>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
              
            )
          })
        }
        <LoadMore onClick={()=>getMoreList(page)}>阅读更多</LoadMore>

      </ListWrapper>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList']),
    page: state.getIn(['home','articalPage'])
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getMoreList: (page) => {
      dispatch(actionCreators.getMoreList(page))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(List);