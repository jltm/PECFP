import styled from 'styled-components/native'
import * as Dimensions from '../../dimensions'



export const Wrapper = styled.View`
flex:1;
flexDirection:column;
justifyContent:center;
marginLeft:20px;
`

export const Label = styled.Text`
fontSize:${Dimensions.DIMENS_H1}px;
marginLeft:10px;
marginBottom:5px;
color:#fff;
alignItems:center;
fontWeight:bold;
`

export const ImageContainer = styled.TouchableOpacity`
width:${Dimensions.WIDTH*0.12};
height:${Dimensions.WIDTH*0.12};
borderRadius:${Dimensions.WIDTH*0.06};
backgroundColor:rgba(255,255,255,0.4);
alignItems:center;
justifyContent:center
`