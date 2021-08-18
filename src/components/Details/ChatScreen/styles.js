import styled from 'styled-components/native'
import * as Dimensions from '../../../dimensions'

export const Container = styled.SafeAreaView`
`

export const Header= styled.View`

    flexDirection:row
    margin:20px

`
export const HeaderLabel= styled.Text`
    flexDirection:row
    marginLeft:10px
    fontSize:${Dimensions.DIMENS_H2}
    fontWeight:bold
    fontFamily:Roboto
    color:#21305A
`
export const Wrapper=styled.View`
    position:absolute
    height: ${Dimensions.HEIGHT*0.95}px
    bottom:0
    width:100%
    backgroundColor:#FFF;
    borderTopLeftRadius:40px;
    borderTopRightRadius:40px;
`

export const Body = styled.ScrollView.attrs(()=>({

    showsVerticalScrollIndicator:false
    
}))`
    flex:1
    marginLeft:20px
    marginRight:20px
    marginBottom:70px
    
 
`
export const ChatMessage=styled.TouchableOpacity`
    flex:1
    flexDirection:column
    margin: 10px 10px
    padding:20px
    background-color:rgba(103, 156, 255,0.2)
    borderRadius:8px
`
export const ChatWrapper=styled.View`

    flex:1
    flexDirection:row
`
export const ChatIcon=styled.View`

`
export const ChatContent=styled.Text`
    fontFamily:Roboto
    fontWeight:bold
    fontSize:${Dimensions.DIMENS_REGULAR}
    marginBottom:5px
`
export const DetailsWrapper=styled.View`
    flex:1
    flexDirection:row`
export const TimeStamp=styled.Text`
    margin-left:5px
    alignSelf:flex-end
`
export const Username=styled.Text`
    flex:1
    fontSize:${Dimensions.DIMENS_H3}
`
export const InputWrapper=styled.View`
    position:absolute;
    flexDirection:row
    bottom:0
    padding: 20px 0px
    backgroundColor:#fff
    marginLeft:20px
    marginRight:20px
    borderRadius:8px

`

export const TextInput=styled.TextInput`
    backgroundColor:#ececec
    flex:1
    height:40px
    borderRadius:20px
    paddingLeft:10px
    marginRight:5px

`

export const SendButton=styled.TouchableOpacity`
    alignSelf:center
`
export const SendPlaceholder=styled.View`
    alignSelf:center
`

export const CloseWrapper=styled.TouchableOpacity`
    flex:1
    flexDirection:row
    justifyContent:flex-end
    marginRight:10px
   
`

export const CloseInnerWrapper=styled.View`
    background-color:rgba(103, 156, 255,0.2)
    height:30px;
    padding: 0px 10px
    borderRadius:20px;
    flexDirection:row
    justifyContent:center
`

export const CloseLabel=styled.Text`
    fontSize:${Dimensions.DIMENS_H4}px
    alignSelf:center
    color:#21305A
    margin-left:5px

`