import styled from 'styled-components/native'
import * as Dimensions from '../../../dimensions'


export const ScrollView=styled.ScrollView.attrs(()=>({
    horizontal:true,
    showsHorizontalScrollIndicator:false,
}))
`

`

export const ChatHeader=styled.View`
    flexDirection:row
`
export const ChatMessage=styled.View`
    flex:1
    width:${Dimensions.WIDTH*0.7}
    height:${120}
    flexDirection:column
    margin: 10px 10px
    padding:20px
    background-color:rgba(103, 156, 255,0.2)
    borderRadius:8px
`
export const ChatMessageWrapper=styled.View`

    flex:1
    flexDirection:row
`

export const ChatUser=styled.View`
    width:50px
    height:50px
    borderRadius:25px
    backgroundColor:#fff
    alignItems:center
    flexDirection:column
    justifyContent:center
`

export const ChatNickName=styled.Text`
    fontFamily:Roboto
    fontWeight:bold
    color:#21305A
`
export const ChatContent=styled.Text`
    fontFamily:Roboto
    fontWeight:bold
    fontSize:${Dimensions.DIMENS_REGULAR}
    alignSelf:center
    marginLeft:10px
    marginRight:50px
`
export const DetailsWrapper=styled.View`
    flex:1
    flexDirection:row
    marginTop:10px
    alignItems:center`
export const TimeStamp=styled.Text`
    margin-left:5px
    alignSelf:flex-end
`
export const StationName=styled.Text`
    flex:1
    fontSize:${Dimensions.DIMENS_H3}
`