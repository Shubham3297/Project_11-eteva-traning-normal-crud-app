import React from 'react'
// import { Button } from 'reactstrap'
// import { Card, CardImgOverlay, CardImg, CardTitle, CardText } from 'reactstrap'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia } from '@mui/material';

function ButtonR() {
    return (
        <div>
            {/* <Button color="primary" outline>
                primary
            </Button>
            <Button color="primary">
                Primary
            </Button> */}


            {/* <Card inverse>
                <CardImg
                    alt="Rose 1"
                    src="./Images/Rose1.jpg"
                    width="100%"
                />
                <CardImgOverlay>
                    <CardTitle tag="h5">
                        Rose 1
                    </CardTitle>
                    <CardText>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                            Last updated 4 mins ago
                        </small>
                    </CardText>
                </CardImgOverlay>
            </Card> */}


            {/* <Navbar color="light" expand="md" light>
                <NavbarBrand href="/">
                    reactstrap
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">
                                Components
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                GitHub
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown inNavbar nav>
                            <DropdownToggle caret nav>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>
                        Simple Text
                    </NavbarText>
                </Collapse>
            </Navbar> */}

            {/* <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button> */}


            {/* <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}

            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        image="./Images/Rose2.jpg"
                        alt="Rose2"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Rose2
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Rose is very beautiful. It is very attractive.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </div>
    )
}

export default ButtonR
