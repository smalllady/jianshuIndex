import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWraper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem } from './style'
import { CSSTransition } from 'react-transition-group';
import {Link} from 'react-router-dom'

class Header extends Component {
  getListArea() {
    const { focused, list,mouseIn, page,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage } = this.props;
    const jsList = list.toJS();
    const pageList = []
    if(jsList.length){
      for(let i = (page-1)*10;i<page*10;i++){
        pageList.push(
          <SearchInfoItem key={jsList[i]}> {jsList[i]} </SearchInfoItem>
        )
      }
    }
    
    if (focused||mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave = {handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick = {()=> handleChangePage(page,totalPage,this.spinIcon)}>
              <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont icon-refresh spin">&#xe607;</i> 换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            {pageList}
          </div>
        </SearchInfo>

      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur,list,login,logout } = this.props
    return (
      <HeaderWrapper>
        <Link to="/"><Logo /></Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {login?
            <NavItem className="right" onClick={logout}>退出</NavItem>:
            <Link to="/login"><NavItem className="right">登录</NavItem></Link>
          }
          
          <NavItem className="right"><i className="iconfont icon-Aa">&#xe655;</i></NavItem>
          <SearchWraper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                onFocus={()=>handleInputFocus(list)}
                onBlur={handleInputBlur}
                className={focused ? 'focused' : ''}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont icon-search' : 'iconfont icon-search'}>&#xe605;</i>
            {this.getListArea()}
          </SearchWraper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className="writing"><i className="iconfont icon-pen">&#xe71b;</i>写文章</Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    // focused: state.header.focused
    // focused: state.get('header').get('focused')  
    focused: state.getIn(['header', 'focused']), //等价于上面那种写法
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login']),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus: (list) => {
      console.log(list);
      list.size ===0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur: () => {
      const action = actionCreators.searchBlur()
      dispatch(action)
    },
    handleMouseEnter:() =>{
      const action = actionCreators.mouseEnter()
      dispatch(action)
    },
    handleMouseLeave:() =>{
      const action = actionCreators.mouseLeave()
      dispatch(action)
    },
    handleChangePage:(page,total,spin) =>{
      let origionAngle = spin.style.transform.replace(/[^0-9]/ig,'')
      if(origionAngle){
        origionAngle = parseInt(origionAngle,10)
      }else{
        origionAngle= 0
      }
      spin.style.transform = 'rotate('+(origionAngle+360)+'deg)'
      console.log(spin.style.transform);
      if(page<total){
        dispatch(actionCreators.changePage(page+1))
      }else{
        dispatch(actionCreators.changePage(1))
      }
      
    },
    logout:()=>{
      dispatch(loginActionCreators.logout())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);