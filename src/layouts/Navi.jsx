import React from 'react'
import { Button, Container, Menu, Dropdown,Grid,Header} from 'semantic-ui-react'
import {Link} from "react-router-dom"
  import {routes} from "../Routing"
export default function Navi() {
    const options = [
        { key: 'edit', icon: 'sign-in', text: 'Giriş Yap', value: 'edit' },
        { key: 'delete', icon: 'sync alternate', text: 'Ücretsiz Dene', value: 'delete' },
        { key: 'hide', icon: 'tty', text: 'Sizi Arayalım', value: 'hide' },
    ]
    return (

         
        <Grid container columns={3} >
            <Grid.Row>
            <Grid.Column  mobile={8} tablet={10} computer={16}>
            <Menu fixed="top" size='tiny' >
            <Container>
                <Menu pointing secondary>
                <Menu.Item >
                       <Header color="violet"  style={{fontFamily:'SegoeUI',marginRight:50}}>HRMS</Header>
                    </Menu.Item>
                </Menu>
  
                 
            {routes.map(route=> (
                 <Menu pointing secondary>
                <Menu.Item   key={route.title} name = {route.title}> <Link style={{fontFamily:'SegoeUI Bold',color:"grey"}} to = {route.path}>{route.title}</Link> </Menu.Item>
                </Menu>
                ) ) }


                <Menu.Menu position='right' >
                <Menu.Item>
                        <Button >Üye Ol</Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button >Üye Girişi</Button>
                    </Menu.Item>
                    <Menu.Item>

                        <Button.Group color='violet'>
                            <Button>İş Veren</Button>
                            <Dropdown
                                className='button icon'
                                floating
                                options={options}
                                trigger={<></>}
                            />
                        </Button.Group>
                    </Menu.Item>
                    <Menu.Item>
                        <Button.Group>
                            <Button color='violet'>İlan Yayınla</Button>
                        </Button.Group>
                    </Menu.Item>



                    
                </Menu.Menu>
            </Container>
        </Menu>
                </Grid.Column>
                
              
            </Grid.Row>
        </Grid>


       

    )
}