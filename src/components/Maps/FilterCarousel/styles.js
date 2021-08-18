import styled from 'styled-components/native'
import * as Dimensions from '../../../dimensions'


export const ScrollViewWrapper=styled.View`
    position:absolute
    flexDirection:column
    backgroundColor:#fff
    borderRadius:20px
    margin:20px

`

export const ScrollView=styled.ScrollView.attrs(()=>({
    horizontal:true,
    showsHorizontalScrollIndicator:false,
    contentContainerStyle:{
        alignItems:'center',
    }
}))
`
 

   elevation:7
   margin: 0px 5px
`

export const FilterHeader=styled.View`
    width:${Dimensions.WIDTH*0.1}px;
    height:${Dimensions.WIDTH*0.1}px;
    backgroundColor:#679CFF
    flexDirection:column
    justifyContent:center
    alignItems:center
    border-radius:${Dimensions.WIDTH*0.05}
    margin:10px 20px 10px 10px
`

export const Filter=styled.TouchableOpacity`

    width:${Dimensions.WIDTH*0.2}px;
    height:${Dimensions.HEIGHT*0.04}px;
    margin-right:20px
    flexDirection:column
    justifyContent:center
    alignItems:center
    border-radius:${Dimensions.HEIGHT*0.02}px

`

export const FilterLabel=styled.Text`

    fontSize:${Dimensions.DIMENS_H3}px;
    color:#FFF
    fontWeight:bold
    fontFamily:Roboto

`

export const ResetWrapper=styled.TouchableOpacity`
    position:absolute
    bottom:${Dimensions.HEIGHT*0.24+Dimensions.HEIGHT*0.07+40}px
    borderRadius:20px
    marginLeft:20px
    marginBottom:10px
    flexDirection:row

`

export const ResetButton=styled.TouchableOpacity`
    borderRadius:25
    backgroundColor:#679CFF
    alignItems:center
    flexDirection:row
    justifyContent:center
    padding:10px
`

export const ResetButtonLabel=styled.Text`
    fontSize:${Dimensions.DIMENS_H3}
    color:#fff
    fontFamily:Roboto
    fontWeight:bold
`