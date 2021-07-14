import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Repositories from './Repositories';

export default function Routes(){
    return(
        <BrowserRouter>
            <Swithc>
                <Route path='./repositories' component={Repositories}/>
            </Swithc>
        </BrowserRouter>
    )
}