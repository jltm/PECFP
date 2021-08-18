import styled from 'styled-components/native'
import * as Dimensions from '../../../dimensions'



export const Wrapper = styled.View`
    marginBottom:${Dimensions.HEIGHT*0.07+40}px
`

export const HeaderWrapper = styled.View`
    flexDirection:row
`

export const Dropdown=styled.TouchableOpacity`

    background-color:#FFF
    border-radius:8px
    color:#fff
    height:${Dimensions.WIDTH*0.2}px
    flexDirection:row
    justifyContent:flex-start
    alignItems:center
    margin:20px
    padding:40px 0px

`

export const HeaderLabel=styled.Text`
    width:${Dimensions.WIDTH*0.6}
    marginLeft:10
    fontFamily:Roboto
    fontWeight:bold
    alignSelf:center
    fontSize:${Dimensions.DIMENS_LABELS}
`

export const TitleLabel=styled.Text`
    marginTop:10
    fontFamily:Roboto
    fontWeight:bold
    color:#21305A
`

export const YearLabel=styled.Text`
    fontFamily:Roboto
    fontWeight:bold
    color:#21305A
    fontSize:${Dimensions.DIMENS_H3}
   
`

export const YearWrapper=styled.View`
    background-color:rgba(103, 156, 255,0.2)
    height:${Dimensions.HEIGHT*0.04};
    padding: 0px 10px
    borderRadius:8px;
    flexDirection:column
    justifyContent:center
    marginLeft:10px
    alignSelf:center
`

export const DescriptionLabel=styled.Text`
    marginTop:40px
    fontFamily:Roboto
    textAlign:justify
    fontSize:${Dimensions.DIMENS_REGULAR}px
`

export const Body=styled.View`
    marginLeft:20px
    marginRight:20px
    backgroundColor:#FFF
    borderRadius:8px
`

export const InnerDiv=styled.View`

    padding:20px
`

export const Image=styled.Image`
    width:100%
    height:200px
`

export const Indicator=styled.View`
    flex:1
    alignItems:flex-end
    alignSelf:center
    margin-right:10px
` 