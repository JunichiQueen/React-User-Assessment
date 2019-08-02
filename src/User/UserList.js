import React, { Component } from 'react';
import { Table } from 'reactstrap';

import User from './User.js';

class UserList extends Component{
    render(){
        return(
            <div>
                <Table>
                    <tbody>
                        {this.props.data.map((item) => (
                            <tr key={item._id}><td><User username={item.username}/></td></tr>
                        )
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }


}

export default UserList