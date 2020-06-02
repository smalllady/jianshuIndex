import styled from 'styled-components'
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom:1px solid #f0f0f0;
  position: relative;
`;
export const Logo = styled.div`
  position: 'absolute';
  top:0;
  left:0;
  display:block;
  width:100px;
  height:56px;
  background: url(${logoPic});
  background-size:contain;
  float:left
`
export const Nav = styled.div`
  width:960px;
  height:100%;
  margin:0 auto;
  float:left;
  box-sizing:border-box;
`;
export const NavItem = styled.div`
  line-height:56px;
  padding:0 15px;
  font-size:17px;
  color: #333;
  &.left{
    float:left
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active{
    color:#ea6f5a;
  }
`;
export const SearchWraper = styled.div`
  float:left;
  position:relative;
  .icon-search{
    position:absolute;
    right:4px;
    top:13px;
    width:30px;
    line-height:30px;
    display:inline-block;
    border-radius:15px;
    text-align:center;
    &.focused{
      background: #777;
      color: #fff;
    }
  }
`
export const SearchInfo = styled.div`
  width:240px;
  position:absolute;
  left: 0;
  top:58px;
  padding: 0 20px;
  box-shadow:0 0 8px rgba(0,0,0,.2);
  padding-bottom:10px;
  background: #fff;
  z-index:1
`
export const SearchInfoTitle = styled.div`
 margin-top:20px;
 margin-bottom:15px;
 line-height:20px;
 font-size:14px;
 color: #969696;
`
export const SearchInfoSwitch = styled.span`
  float:right;
  font-size:13px;
  cursor: pointer;
  .spin{
    transition:all .2s ease-in;
    transform-origin:center center;
    display:inline-block;
   
  }
`
export const SearchInfoItem = styled.a`
  line-height:20px;
  padding :0 5px;
  font-size:12px;
  border:1px solid #ddd;
  color: #787878;
  display:inline-block;
  border-radius:2px;
  margin-right:10px;
  margin-bottom:10px;
  &:hover{
    color: #333;
    cursor: pointer;
  }
`
export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  width:160px;
  height:38px;
  border:none;
  outline:none;
  border-radius:19px;
  margin-top:9px;
  background:#eee;
  padding:0 30px 0 20px;
  box-sizing:border-box;
  font-size:14px;
  margin-left:20px;
  &::placeholder{
    color: #999;
  }
  &.focused{
    width:240px;
  }
  &.slide-enter{
    transition: all .2s ease-out;
  }
  &.slide-enter-active{
    width:240px;
  }
  &.slide-exit{
    transition: all .2s ease-out;
  }
  &.slide-exit-active{
    width:160px;
  }
`
export const Addition =  styled.div`
 position: 'absolute';
 height: 56px;
 right:0;
 top:0;
`
export const Button =  styled.div`
 float:right;
 margin-top:9px;
 height: 38px;
 line-height:38px;
 border-radius:19px;
 border:1px solid #ec6149;
 margin-right:20px;
 padding: 0 20px;
 font-size:14px;
 &.reg{
   color: #ec6149;
 }
 &.writing{
   background: #ec6149;
   color: #fff;
 }
`