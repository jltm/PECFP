import { exp } from 'react-native-reanimated'
import styled from 'styled-components/native'
import * as Dimensions from '../../../dimensions'

export const ScrollView = styled.ScrollView.attrs(()=>({
    horizontal:true,
    showsHorizontalScrollIndicator:false,
    snapToAlignment:'center',
    scrollEventThrottle:17,
    decelerationRate:0,
    snapToInterval:Dimensions.WIDTH*0.8+20,
    contentContainerStyle:{
        alignItems:'center',
       
    }
}))
`
    marginBottom:${Dimensions.HEIGHT*0.07+10}px
    width:${Dimensions.WIDTH}px
`

export const Card = styled.TouchableOpacity`

    width:${Dimensions.WIDTH*0.8}px;
    height:${Dimensions.HEIGHT*0.25}px;
    backgroundColor:#fff;
    borderRadius:8px;
    marginLeft:20px;
    marginRight:20px
    elevation:20
    
`

export const Image=styled.ImageBackground`
    flex:1
    resizeMode:cover;
    flexDirection:column
    justifyContent:flex-end
    overflow:hidden
    borderTopLeftRadius:8px;
    borderTopRightRadius:8px;
`
export const CardFooter=styled.View`
    backgroundColor:#fff;
    width:100%
    flexDirection:column
    justifyContent:center
    padding:10px
    borderBottomLeftRadius:8px;
    borderBottomRightRadius:8px;
 
`

export const InnerWrapper=styled.View`
    flexDirection:row
    margin-top:10px;
`
export const LocationWrapper=styled.View`
    flexDirection:row
    justifyContent:center
    alignSelf:center

`

export const TimeWrapper=styled.View`
    flex:1
    flexDirection:row
    justifyContent:flex-end
   
`

export const TimeInnerWrapper=styled.View`
    background-color:rgba(103, 156, 255,0.2)
    height:30px;
    padding: 0px 10px
    borderRadius:20px;
    flexDirection:row
    justifyContent:center
`

export const TimeLabel=styled.Text`
    fontSize:${Dimensions.DIMENS_H4}px
    alignSelf:center
    color:#21305A
    margin-left:5px

`

export const CardLabel=styled.Text`
    fontSize:${Dimensions.DIMENS_LABELS}px
    fontWeight:bold
    alignSelf:stretch
    

`

export const CardLocation=styled.Text`
    fontSize:${Dimensions.DIMENS_H3}px
    margin-left:10px;
`