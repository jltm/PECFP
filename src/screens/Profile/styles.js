import styled from 'styled-components/native'
import * as Dimensions from '../../dimensions'

export const Container = styled.SafeAreaView`
`

export const Body = styled.ScrollView`

    backgroundColor:#F2F5FE
`

export const TopHalf = styled.View`
    backgroundColor:#679CFF;
    height:${Dimensions.HEIGHT*0.3}
    borderBottomLeftRasdius:50px;
`
export const TopLayer = styled.View`
    width:100%
    backgroundColor:#F2F5FE;
    borderTopRightRadius:50px;
    flex:1;
    flexDirection:column;
    justifyContent:center;

`

export const BottomHalf = styled.View`
    flexDirection:column;
    alignItems:center
    backgroundColor:#679CFF;
    height:${Dimensions.HEIGHT*0.7}
`

export const Header= styled.View`
    flexDirection:column
    justifyContent:center
    backgroundColor:#679CFF;
    height:${Dimensions.HEIGHT*0.3}
    borderBottomLeftRadius:50px;
`

export const HeaderLabel=styled.Text`
    fontSize:${Dimensions.DIMENS_H1}px;
    color:#fff;
    alignItems:center;
    fontWeight:bold;
    margin-left:20px
`

export const ProfileDiv= styled.TouchableOpacity`
    background-color:rgba(103, 156, 255,0.2)
    border-radius:8
    color:#fff
    height:80px
    flexDirection:row
    justifyContent:flex-start
    alignItems:center
    margin: 20px 20px
`

export const InnerLayer= styled.View`
    flex:1
    backgroundColor:#F2F5FE
    borderTopRightRadius:50px;

`

export const InnerWrapper= styled.View`
    flex:1
    marginLeft:20px
    marginRight:20px

`

export const ProfileAvatar= styled.View`

    backgroundColor:#fff
    width:40px;
    height:40px;
    borderRadius:20px;
    flexDirection:column
    justifyContent:center
    alignItems:center
    margin:10px

`

export const ProfileWrapper=styled.View`

    flexDirection:column
    justifyContent:center
    margin-left:10px
`

export const ProfileName=styled.Text`
    fontSize:${Dimensions.DIMENS_H3}px
    font-weight:bold
    color:#21305A
    

`

export const ProfileEmail=styled.Text`

    fontSize:${Dimensions.DIMENS_H3}px
    color:#21305A

`

export const OptionIcon=styled.View`

    background-color:rgba(103, 156, 255,0.2)
    width:${Dimensions.WIDTH*0.1}
    height:${Dimensions.WIDTH*0.1}
    borderRadius:8px;
    flexDirection:column
    justifyContent:center
    alignItems:center
    margin:10px
`

export const OptionsButton= styled.TouchableOpacity`
    background-color:#FFF
    border-radius:8
    color:#fff
    height:70px
    flexDirection:row
    justifyContent:flex-start
    alignItems:center
    padding:40px 0px
    margin: 10px 0px
`

export const OptionsLabel= styled.Text`
    margin-left:10px
    fontSize:${Dimensions.DIMENS_LABELS}px
    color:#21305A
    fontWeight:bold
    fontFamily:Roboto
`