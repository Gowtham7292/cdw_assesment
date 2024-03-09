import React, { useState } from 'react';
import { Navbar, Container, Col, Form, InputGroup } from 'react-bootstrap';

const NavbarComp = () => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <>
            <Navbar expand='lg' variant='dark' style={{ backgroundColor: '#88a4f4' }}>
                <Container>
                    <Navbar.Brand href='/'><h4>Team</h4></Navbar.Brand>
                    <Col xs={3} className="d-flex justify-content-end">
                        <InputGroup>
                            <Form.Control 
                                placeholder={isFocused ? "" : "🔍 Search"} 
                                className="rounded-pill"
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </InputGroup>
                    </Col>
                </Container>
            </Navbar>
        </>
    )
}
export default NavbarComp;
