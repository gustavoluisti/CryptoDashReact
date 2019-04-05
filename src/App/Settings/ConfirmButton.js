import React from 'react';
import styled from 'styled-components';
import {AppContext} from '../AppProvider';

const ConfirmButtonStyled = styled.div`
    margin: 20px;
    color: green;
    cursor: pointer;
`
const CenterDiv = styled.div`
    display: grid;
    justify-content: center;
`

export default function() {
    return <AppContext.Consumer>
        {({confirmFavorites}) => 
        <CenterDiv>
            <ConfirmButtonStyled onClick={confirmFavorites}>
                Confirmar Favoritos
            </ConfirmButtonStyled>
        </CenterDiv>
    }
    </AppContext.Consumer>
}