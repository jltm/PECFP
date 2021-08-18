import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { HEIGHT } from '../../dimensions'


export const Container = styled.SafeAreaView`
backgroundColor:#F2F5FE
`
export const Container2 = styled.View`
flex: 1;
flexDirection:row;
backgroundColor:#fff;
marginTop:10;
marginBottom:20;
marginLeft:20px;
marginRight:20px;
borderRadius:8px;

`
export const Container3 = styled.View`

    flexDirection:column;

`
export const Container4 = styled.View`
    flexDirection:row;
`
export const Container5 = styled.View`
    flexDirection:column;
    alignItems:center;
    backgroundColor:#679CFF
    padding: 10px 10px
    borderRadius:8px
    alignSelf:center
    marginRight:20px
    width:105px
`
export const Body = styled.ScrollView`
    backgroundColor:#fff
`

export const TopHalf = styled.View`
backgroundColor:#F2F5FE
height:${HEIGHT*0.25}
borderBottomLeftRadius:50px;
`
export const TopLayer = styled.View`
    width:100%
    backgroundColor:#F2F5FE
    borderTopRightRadius:50px;
    flex:1;
    flexDirection:column;
    justifyContent:center;

`
export const ImageLayer = styled.View`
    width:100%
    backgroundColor:#fff;
    flex:1;
    flexDirection:column;
    justifyContent:center;

`

export const BottomHalf = styled.View`
    flexDirection:column;
    alignItems:center
    backgroundColor:#F2F5FE
    flex:1
`

export const StyledView = styled.View`
  border-width: 1;
  border-radius: 2;
  border-color: #ddd;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 1;
  margin-left: 5;
  margin-right: 5;
  margin-top: 10;
`
export const Wrapper = styled.View`
    marginBottom:${Dimensions.HEIGHT*0.07+40}
`
;