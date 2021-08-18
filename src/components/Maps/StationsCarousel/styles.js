import styled from 'styled-components/native'
import * as  Dimensions from '../../../dimensions'

export const ScrollView=styled.ScrollView.attrs(()=>({
    horizontal:true,
    showsHorizontalScrollIndicator:false,
    snapToAlignment:'center',
    decelerationRate:0,
    scrollEventThrottle:17,
    snapToInterval:Dimensions.WIDTH*0.8+40,
    contentContainerStyle:{
        paddingHorizontal: Platform.OS === 'android' ? Dimensions.WIDTH*0.1-20 : 0
    }
}))
`
    position:absolute
    bottom:${Dimensions.HEIGHT*0.07+20}px
`
export const Card=styled.View`

    
    width:${Dimensions.WIDTH*0.8}px
    height:${Dimensions.HEIGHT*0.24}px
    backgroundColor:#fff;
    borderRadius:8px;
    marginLeft:20px;
    marginRight:20px;
    elevation:7
    padding:20px
`
export const CardHeader=styled.View`


    flexDirection:row
    justify-content:flex-start
    margin-top:10px

`

export const HeaderWrapper=styled.View`
    flexDirection:column
    justify-content:center
    margin-left:20px
    margin-right:20px
    padding-right:100px
`
export const CardBody=styled.View`
    flex:1
    flexDirection:row
    justify-content:flex-start
    alignItems:center
    margin-top:15px
`

export const CardLabel=styled.Text`
    flexWrap:wrap
    fontSize:${Dimensions.DIMENS_LABELS}px
    fontWeight:bold
    alignSelf:stretch
    text-align:left
    fontFamily:Roboto
    color:#21305A

`

export const CardLocation=styled.Text`
    fontSize:${Dimensions.DIMENS_H3}px
    margin-left:5px
    color:#21305A

`
export const CardImg=styled.Image`

    width:${Dimensions.WIDTH*0.3}px
    height:${Dimensions.HEIGHT*0.12}px
    borderRadius:8

`
export const CloseButton=styled.TouchableOpacity`

    background-color:rgba(103, 156, 255,0.2)
    border-radius:8
    height:30px
    Dimensions.WIDTH:120px
    alignItems:center
    flexDirection:row
    justifyContent:center
`

export const CloseButtonLabel=styled.Text`
    color:#fff
    fontWeight:bold
    align-self:stretch;
    text-align:center;
    alignSelf:stretch
`

export const InfoDiv=styled.TouchableOpacity`

    background-color:rgba(103, 156, 255,0.2)
    border-radius:8
    height:${Dimensions.HEIGHT*0.04}px
    width:${Dimensions.WIDTH*0.4}px
    alignItems:center
    flexDirection:row
    justifyContent:center
    align-self:center
  
`

export const InfoWrapper=styled.View`
    
    flexDirection:row
    justifyContent:flex-end
`

export const InfoLabel=styled.Text`
    flex:1
    color:#fff
    fontWeight:bold
    align-self:stretch;
    text-align:center;
    alignSelf:center
    color:#21305A
    fontSize:${Dimensions.DIMENS_H4}px
    
`
export const OptionsWrapper=styled.View`

    flex:1
    flexDirection:column
    justifyContent:center
    alignSelf:center
 
`

export const OptionsButton=styled.TouchableOpacity`
    
    background-color:rgba(103, 156, 255,0.2)
    width:${Dimensions.HEIGHT*0.04}px;
    height:${Dimensions.HEIGHT*0.04}px;
    borderRadius:8px;
    flexDirection:column
    justifyContent:center
    alignItems:center
    margin:0px 10px
    

`

export const InnerWrapper=styled.View`
    

    flexDirection:row
    justify-content:flex-end

`
