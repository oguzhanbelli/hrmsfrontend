import React from 'react'
import { Button, Dropdown, DropdownItem, DropdownMenu, Image, Menu } from 'semantic-ui-react'
import styled from 'styled-components'
const fontStyle = {
    fontFamily: "Poppins",
    fontWeight: "Light",
    fontSize: "1.1rem",
    color: "grey"

}



export const StyledDItem = styled(Dropdown.Item)({
    backgroundColor:'red !important;'
   
});

export default function SignedIn({signOut}) {
    return (
        <div style={{backgroundColor:"#f1f5f8",borderRadius:20,display:"flex",alignItems:"center",justiftContent:"center"}}>
            <Menu.Item >
                <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/75687376?v=4" />
                <Dropdown style={fontStyle} pointing="top left" text="Oğuzhan Belli">
                    <Dropdown.Menu>
                        <StyledDItem text="Bilgilerim" icon="info" />
                        <StyledDItem onClick={signOut}  text="Çıkış Yap" icon="sign-out" /> 

                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>

        </div>
    )
}