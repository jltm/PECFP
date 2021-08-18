import styled from 'styled-components/native'
import * as Dimensions from '../../dimensions'


export const Wrapper = styled.View`
flex:1;
flexDirection:column;
justifyContent:center;
marginLeft:20px;
`

export const ImageContainer = styled.TouchableOpacity`
width:70px;
height:70px;
borderRadius:35px;
backgroundColor:rgba(255,255,255,0.4);
alignItems:center;
justifyContent:center
`

export const Label = styled.Text`
fontSize:${Dimensions.DIMENS_H1}px;
color:#fff;
alignItems:center;
fontWeight:bold;
`