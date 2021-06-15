import React, { useState } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { Button, Menu, Dropdown, Grid, Header, Segment, Item } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { routes } from "../Routing"
import styled from 'styled-components'

export default function Navi() {

    const [state, setState] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    let history = useHistory()
    function handleSignOut(params) {
        setIsAuthenticated(false);
        history.push("/")

    }
    function handleSignIn(params) {
        setIsAuthenticated(true);


    }


    const buttonStyle2 = {
        width: "auto",
        maxHeight:"50px",
        maxWidth:"130px",
        height: "auto",
        color: "#f1f5f8",
        textAlign:"center",
        borderColor: "#f1f5f8",
        marginRight: 20,
        borderRadius: 10,
    
    
    
    }

    const Title = styled.h1`
        font-family: Poppins;
        font-weight: 400;
        font-size: 1.1rem;
        color: grey;
    `;



    const handleItemClick = (e, { name }) => setState({ activeItem: name })
    const { activeItem } = state
    return (

       

        <Menu stackable fixed="top" secondary style={{
            padding: "10px 0",
            position: "relative",
            border: "1px solid #f1f5f8"
        }} >

            <Menu.Item style={{ marginLeft: 80 }}  >
                <img src='https://imgur.com/ftlUP5V.png' />
            </Menu.Item>

            <Menu.Item style={{ marginRight: 20 }} active={activeItem === "/"}    onClick={handleItemClick} as={NavLink} exact to="/" content="home">
                <Title >Ana Sayfa</Title>
            </Menu.Item>
            <Menu.Item style={{ marginRight: 20 }} active={activeItem === "/cvList"} onClick={handleItemClick} as={NavLink}  exact to="/cvList">
                <Title >Cv Listesi</Title>
            </Menu.Item>
            <Menu.Item style={{ marginRight: 20 }} active={activeItem === "/jobAdvertisementList"} onClick={handleItemClick} as={NavLink} exact to="/jobAdvertisementList">
                    
                <Title >İş İlanları</Title>
            </Menu.Item>
          






            <Menu.Menu stackable="true" position="right">
           
                {


                    isAuthenticated ?
                    <div style={{display:"flex",alignContent:"center",alignItems:"center"}}> 
                     
                        <Button  color="purple"  style={ buttonStyle2 }  onClick={handleItemClick} as={NavLink} to="/addAdvertisement">
                        <Title style={{color:"white"}} >İlan Ekle</Title>
                    </Button>
                    <Button  color="purple"  style={ buttonStyle2 }  onClick={handleItemClick} as={NavLink} to="/confirmAdvertisement">
                        <Title style={{color:"white"}} >İlan Onayla</Title>
                    </Button>
                    <SignedIn signOut={handleSignOut} bisey="1" />
                    </div>:
                      
                        <SignedOut signIn={handleSignIn} />
                      
                    
                
        

                    


                }
            </Menu.Menu>


        </Menu>







    )
}