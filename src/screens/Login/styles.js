import styled from 'styled-components/native'
import * as Dimensions from '../../dimensions'

export const SafeAreaView=styled.View`
    flex:1
    background-color:#fff
`
export const TopHalf=styled.View`

    background-color:#679CFF
    height:${Dimensions.HEIGHT*0.3}


`

export const TopInnerLayer=styled.View`
    flex:1
    background-color:#fff
    borderBottomLeftRadius:50px
    flexDirection:row
    justifyContent:flex-start
    alignItems:center

`

export const HeaderWrapper=styled.View`
    flexDirection:row
    justifyContent:flex-start


`

export const HeaderLabel=styled.Text`

    flex:1
    font-size:${Dimensions.DIMENS_H1}px
    color:#679CFF
    fontWeight:bold
    align-self:stretch
    text-align:left

`

export const BottomInnerLayer=styled.View`

    flex:1
    background-color:#fff
    borderTopLeftRadius:50px
    flexDirection:column
    justifyContent:center
    alignItems:center
    

`

export const MiddleHalf=styled.View`

    background-color:#679CFF
    borderTopRightRadius:50px
    borderBottomRightRadius:50px
    height:${Dimensions.HEIGHT*0.5}
    marginRight:20px
    paddingLeft:45px
    flexDirection:row
    justifyContent:flex-start
    alignItems:center

`
export const BottomHalf=styled.View`

    flex:1
    flexDirection:column
    justifyContent:center
    background-color:#679CFF

`

export const Button=styled.TouchableOpacity`
    background-color:#679CFF
    border-radius:8px
    color:#fff
    height:50px
    width:200px
    flexDirection:column
    justifyContent:center
    elevation:7
`

export const ButtonLabel=styled.Text`

    color:#fff
    fontWeight:bold
    align-self:stretch;
    text-align:center;
`

