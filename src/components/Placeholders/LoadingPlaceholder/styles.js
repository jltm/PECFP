import styled from 'styled-components/native'
import { WIDTH,HEIGHT } from '../../../dimensions'

export const ScrollView = styled.ScrollView.attrs(()=>({
    horizontal:true,
    showsHorizontalScrollIndicator:false,
    snapToAlignment:'center',
    scrollEventThrottle:17,
    decelerationRate:0,
    snapToInterval:WIDTH*0.8+20,
    contentContainerStyle:{
        alignItems:'center',
       
    }
}))
`
    paddingBottom:${HEIGHT*0.07+40}px
    width:${WIDTH}
`

export const Card = styled.View`

    width:${WIDTH*0.8}px;
    height:${HEIGHT*0.25}px;
    borderRadius:8px;
    marginLeft:20px;
    marginRight:20px
    
`