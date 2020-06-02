import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width:960px;
  margin:0 auto;
  overflow:hidden;
  .banner-img{
    width:625px;
    height: 270px;
  }
`
export const HomeLeft = styled.div`
  padding-top:30px;
  width:625px;
  margin-left:15px;
  float:left;
`
export const HomeRight = styled.div`
  padding-top:30px;
  width:280px;
  float:right;
`
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow:hidden;
  margin-right:-18px;
  border-bottom:1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  float:left;
  line-height:32px;
  background: #f7f7f7;
  color:#333;
  border: 1px solid #dcdcdc;
  border-radius:4px;
  font-size:14px;
  padding-right:10px;
  margin-right:18px;
  margin-bottom:18px;
  .topic-img{
    width:32px;
    height: 32px;
    float:left;
    display:block;
    margin-right:10px;
  }
`
export const ListWrapper = styled.div`
  
`
export const ListItem = styled.div`
  position:relative;
  height: 100px;
  padding: 10px 165px 10px 0;
  img{
    width:150px;
    height: 100px;
    border-radius:4px;
    position:absolute;
    right:0;
    top:10px;
  }
`
export const ListInfo = styled.div`
  h2{
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom:4px;
  }
  p{
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`
export const RecommendWrapper = styled.div`
  width:280px;
  margin-bottom:30px;
`
export const RecommendItem = styled.div`
  width:280px;
  height: 50px;
  margin-bottom:10px;
  background: url(${(props)=>props.imgUrl});
  background-size:contain;
  background-repeat:no-repeat;
`
export const WriterWrapper = styled.div`
  width:280px;
  h2{
    font-size: 14px;
    color: #969696;
    overflow:hidden;
    margin-bottom:20px;
    span{
      float:right
    }
  }
  
`
export const WriterItem = styled.div`
  position:relative;
  padding-left:58px;
  height: 48px;
  margin-bottom:10px;
  img{
    width: 48px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 50%;
    margin-right:10px;
    position:absolute;
    left:0;
    top:0;
  }
  h3{
    font-size:14px;
    margin-bottom:4px;
    line-height:28px;
  }
  p{
    font-size:12px;
    color: #969696;
  }
`
export const LoadMore = styled.div`
    width: 100%;
    border-radius: 20px;
    background-color: #a5a5a5;
    height: 40px;
    line-height:40px;
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    color: #fff;
    cursor: pointer;
`
export const BackTop = styled.div`
    position:fixed;
    width:60px;
    height: 60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    right:100px;
    bottom: 100px;
    font-size:12px;
    cursor: pointer;
`