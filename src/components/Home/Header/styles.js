import styled from 'styled-components/native'
import { DIMENS_H1, WIDTH } from '../../../dimensions'


export const Wrapper = styled.View`
flex:1;
flexDirection:column;
justifyContent:center;
marginLeft:20px;
`

export const ImageContainer = styled.TouchableOpacity`
width:${WIDTH*0.18};
height:${WIDTH*0.18};
borderRadius:${WIDTH*0.09};
backgroundColor:rgba(255,255,255,0.4);
alignItems:center;
justifyContent:center
`

export const Label = styled.Text`
fontSize:${DIMENS_H1}px;
color:#fff;
alignItems:center;
fontWeight:bold;
`