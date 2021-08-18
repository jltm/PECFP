import styled from 'styled-components/native'
import * as Dimensions from '../../../dimensions'

export const InputWrapper=styled.View`
    flexDirection:column
    justifyContent:center
    background-color:#fff
    margin: 20px 20px
    borderRadius:8
    padding:10px
    height:${Dimensions.HEIGHT*0.07}px
`

export const TextInput=styled.TextInput`
    color:#21305A
`

export const LoginButton=styled.TouchableOpacity`
    background-color:#fff
    border-radius:8
    height:${Dimensions.HEIGHT*0.05}
    width:${Dimensions.WIDTH*0.4}
    margin: 20px 20px
    alignItems:center
    flexDirection:column
    justifyContent:center
`

export const ButtonWrapper=styled.View`
    flex:1
    flexDirection:row
    alignItems:center

`

export const ButtonLabel=styled.Text`

    color:#679CFF
    fontWeight:bold
    text-align:center;
    margin-right:10px
    fontFamily:Roboto
    fontSize:${Dimensions.DIMENS_H3}
`

export const ErrorWrapper=styled.View`
    background-color:#21305A
    border-radius:8
    width:${Dimensions.WIDTH*0.55}
    margin-left:20px
    padding:10px 20px
    alignItems:center
    flexDirection:row
    justifyContent:center

`

export const ErrorLabel=styled.Text`

    color:#FFF
    fontWeight:bold
    text-align:center;
    margin-left:10px
    fontFamily:Roboto
    fontSize:${Dimensions.DIMENS_H4}
`