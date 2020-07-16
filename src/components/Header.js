import React, { Component } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">BootStore</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Products</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Dương Văn Thiện</NavbarText>
                </Navbar>
            </div>
        );
    }
}