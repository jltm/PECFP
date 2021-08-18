import styled from 'styled-components/native'
import * as Dimensions from '../../dimensions'

export const Container = styled.SafeAreaView`
`

export const Body = styled.ScrollView`

    backgroundColor:#F2F5FE
`

export const TopHalf = styled.View`
    backgroundColor:#679CFF;
    height:${Dimensions.HEIGHT*0.3}
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
    height:${Dimensions.HEIGHT*0.7}
`

export const Header= styled.View`
    flexDirection:column
    justifyContent:center
    backgroundColor:#679CFF;
    height:${Dimensions.HEIGHT*0.3}
    borderBottomLeftRadius:50px;
`

export const HeaderLabel=styled.Text`
    fontSize:${Dimensions.DIMENS_H1}px;
    color:#fff;
    alignItems:center;
    fontWeight:bold;
    margin-left:20px
`

export const InnerLayer= styled.View`
    flex:1
    backgroundColor:#F2F5FE
    borderTopRightRadius:50px;

`