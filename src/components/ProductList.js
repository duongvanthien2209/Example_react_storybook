import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Table } from 'reactstrap';

import db from '../db';

export default class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        db.collection("products").get().then((querySnapshot) => {
            let data = [];
            querySnapshot.forEach((doc) => {
                // console.log(`${doc.id} => ${doc.data()}`);
                data.push({ id: doc.id, ...doc.data() });
            });
            this.setState({
                products: data
            });
        });
    }

    render() {
        return (
            <div className="ProductList">
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem><a href="#">Products</a></BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div>
                    <h1>Products</h1>
                    <Button color="success">Thêm</Button>
                    <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Sửa</th>
                                    <th>Xóa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map((item,index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{index+1}</th>
                                                <td>{item.name}</td>
                                                <td><Button color="primary">Sửa</Button></td>
                                                <td><Button color="danger">Xóa</Button></td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}