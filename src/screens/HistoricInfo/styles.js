import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { HEIGHT } from '../../dimensions'


export const Container = styled.SafeAreaView`
`

export const Body = styled.ScrollView`

    backgroundColor:#F2F5FE
`

export const TopHalf = styled.View`
    backgroundColor:#679CFF;
    height:${HEIGHT*0.3}
    borderBottomLeftRadius:50px;
`
export const TopLayer = styled.View`
    width:100%
    backgroundColor:#F2F5FE;
    borderTopRightRadius:50px;
    flex:1;
    flexDirection:column;
    justifyContent:center;

`

export const BottomHalf = styled.View`
    flexDirection:column;
    alignItems:center
    backgroundColor:#679CFF;
    flex:1
`