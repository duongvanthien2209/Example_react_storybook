import React, { Component } from 'react';
import {Button} from 'reactstrap';

import db from '../db';

export default class Example extends Component {
    componentDidMount() {
        console.log('Component did mount');
        db.collection("products").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                console.log(doc.data());
            });
        }).catch(err => console.log('Error'));
    }

    render() {
        console.log('Example render');
        return (
            <div className="Example">
                <Button type="primary">ADD</Button>
            </div>
        );
    }
}