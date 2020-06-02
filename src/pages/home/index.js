import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  
  componentDidMount(){
    this.props.changeHomeData();
    this._bindEvents()
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }
  _bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
  _handleScrollTop(){
    let scrollToTop = window.setInterval(function() {
      let pos = window.pageYOffset;
      if ( pos > 0 ) {
          window.scrollTo( 0, pos - 20 ); 
      } else {
          window.clearInterval( scrollToTop );
      }
  }, 2);
  }
  render() { 
    return ( 
      <HomeWrapper>
        <HomeLeft>
          <img src="https://upload.jianshu.io/admin_banners/web_images/4960/c69cc6bc664709251411512244bfed0da650bee2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" className="banner-img" alt=''/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {this.props.showScroll?
        <BackTop onClick={this._handleScrollTop}>回到顶部</BackTop>: null}
      </HomeWrapper>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(["home","showScroll"])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData: () => {
      dispatch(actionCreators.getHomeData())
    },
    changeScrollTopShow: ()=>{
      if(document.documentElement.scrollTop > 100){
        dispatch(actionCreators.changeTopShow(true))
      }else{
        dispatch(actionCreators.changeTopShow(false))
      }
      
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);