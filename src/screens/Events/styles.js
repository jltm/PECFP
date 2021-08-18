import styled from 'styled-components/native'
import { DIMENS_H3, DIMENS_LABELS, HEIGHT } from '../../dimensions'

export const Container = styled.SafeAreaView`
`

export const Body = styled.ScrollView`
    backgroundColor:#F2F5FE;
   
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

export const Label= styled.Text`
    fontSize:${DIMENS_LABELS}
    fontWeight:bold
    color:#21305A
    marginLeft:20px
    marginTop:25px
    marginBottom:25px
`
export const SubscriptionsWrapper=styled.TouchableOpacity`
    flex:1
    flexDirection:row
    margin: 10px 20px
    padding:20px
    background-color:#fff
    borderRadius:8px
`

export const SubscriptionsLabel=styled.Text`
    
    fontWeight:bold
    color:#21305A
`
