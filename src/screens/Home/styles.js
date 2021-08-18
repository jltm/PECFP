import styled from 'styled-components/native'
import { HEIGHT } from '../../dimensions'


export const Container = styled.SafeAreaView`
`

export const Body = styled.View`
    backgroundColor:#F2F5FE;
 
`

export const TopHalf = styled.View`
    backgroundColor:#679CFF;
    height:40%
    borderBottomLeftRadius:50px;

`

export const BottomHalf = styled.View`
    flexDirection:column;
    alignItems:center
    backgroundColor:#679CFF;
    height:60%
`

export const TopLayer = styled.View`
    width:100%
    backgroundColor:#F2F5FE;
    borderTopRightRadius:50px;
    flex:1;
    flexDirection:row;
    justifyContent:center;


`