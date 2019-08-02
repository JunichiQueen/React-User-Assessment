import React, { Component } from 'react';
import { isTemplateElement } from '@babel/types';

function User (props){
    const {
        username
    } = props
    
    return(
        <div>
            <p>{username}</p>
        </div>
    )
}

export default User;