import React from 'react';
import { Text } from 'react-native';
import {Container,TopHalf,BottomHalf,TopLayer,Header,HeaderLabel,Body, InnerLayer } from './styles';
import UpdateForm from '../../components/Auth/UpdateForm';
export default function Update({route}){

    const currentUser = route.params.user

    return (
        <Body>
            <Container>
                <TopHalf>
  
                    <Header>
                        <HeaderLabel>Informações</HeaderLabel>
                    </Header>
            </TopHalf>

            <BottomHalf>
                <TopLayer>
                        
                    <InnerLayer>
                        <UpdateForm
                        user={currentUser}></UpdateForm>
                    </InnerLayer>
                </TopLayer>
                </BottomHalf>
           
            </Container>
    
        </Body>

    );
}