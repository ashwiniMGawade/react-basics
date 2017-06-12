import React from 'react';

export class Home extends React.Component {
    render() {
        return (
            <div>
                In a new component
                <hr/>
                <span>Welcome <b>{this.props.user.name}!</b></span>
            </div>
            );
    }
}