import styled from 'styled-components/native'
import * as Dimensions from '../../../dimensions'

export const Container= styled.SafeAreaView`
    flex: 1
`

export const Card= styled.TouchableOpacity`

    backgroundColor: #fff
    flexDirection:row
    alignItems:center
    justifyContent:flex-start
    padding: 20px 10px
    margin: 10px 20px
    borderRadius:8px
`
export const Wrapper=styled.View`
    flexDirection:column
    marginLeft:10px

`
export const CardTitle=styled.Text`
    fontSize: ${Dimensions.DIMENS_LABELS}px
    color:#21305A
    fontWeight:bold
    fontFamily:Roboto
    width:${Dimensions.WIDTH*0.4}
`

export const CardImg=styled.Image`

    width:${Dimensions.WIDTH*0.2}px
    height:${Dimensions.WIDTH*0.2}px
    borderRadius:8

`

export const CardLocation=styled.Text`
    fontSize:${Dimensions.DIMENS_H3}px
    color:#21305A
    margin-left:5px
`

export const OptionWrapper=styled.View`
    flex:1
    flexDirection:row
    justifyContent:flex-end
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
    border-radius:8px
    color:#fff
    height:${Dimensions.WIDTH*0.2}
    flexDirection:row
    justifyContent:flex-end
    alignItems:center
    padding:40px 0px
    margin: 10px 0px
`