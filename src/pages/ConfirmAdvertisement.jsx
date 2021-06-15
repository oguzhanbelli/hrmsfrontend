import React, { useEffect, useState } from 'react'
import JobAdvertisementService from '../services/jobAdvertisementService'
import { Item, Image, Container, Segment, Label, Button, Menu, Icon } from 'semantic-ui-react'

import styled from 'styled-components'
export default function ConfirmAdvertisement() {


    const handleClick = function (id) {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.passiveAdvertisementsActive(id, "true").then()
    };

    const [jobAdvertisements, setJobAdvertisements] = useState([])
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getPassiveAdvertisements().then(result => setJobAdvertisements(result.data.data))
    }, [jobAdvertisements])

    const itemStyle = {
        borderRadius: 20,
        border: "1px solid #f1f5f8",
        background: "#f1f5f8",
        maxWidth: 850,
        fontFamily: "Poppins",


    }


    return (


        <Segment basic style={{ overflowX: "hidden", overflowY: "auto", maxWidth: "850px", }}>

            {
                jobAdvertisements.map(advertisement => (

                    <Item.Group key={advertisement.id} divided>

                        <Item as='a' style={itemStyle}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 5 }}>
                                <div style={{ padding: ".25rem", background: "#fff", border: "1px solid #dee2e6", width: "58px", height: "58px", alignItems: "center", display: "flex" }}>
                                    <Item.Image rounded size="medium" src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Sabanc%C4%B1_Holding_logo.svg/1200px-Sabanc%C4%B1_Holding_logo.svg.png' />

                                </div>
                            </div>
                            <Item.Content style={{

                                marginLeft: 20,
                                paddingTop: 20
                            }}  >
                                <Item.Header style={{ fontFamily: "Poppins", fontWeight: "bolder", fontSize: 17 }} >{advertisement.jobName}</Item.Header>
                                <Item.Meta>
                                    <span>{advertisement.employerCompanyName}</span>

                                </Item.Meta>
                                <Item.Description style={{}}>

                                    {advertisement.cityName}


                                </Item.Description>

                                <Item.Description>
                                    {advertisement.description}
                                </Item.Description>

                                <Container style={{ display: "flex", justifyContent: "space-between" }}>

                                    <Item.Extra>
                                        <Label style={{
                                            borderRadius: 10, margin: "auto", fontWeight: 600
                                        }} content={advertisement.workingTimeTitle} />
                                    </Item.Extra>

                                    <Item.Extra  >

                                        <Label style={{ borderRadius: 10, marginBottom: 0, fontWeight: 600 }} icon='time' content="7 gün önce" />
                                    </Item.Extra>
                                </Container>
                            </Item.Content>


                        </Item>
                        <Container style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginTop: "10px" }}    >
                            <Item.Extra   >

                                <Button circular basic  >
                                    <Icon style={{ color: "#840dc3" }} name='delete' />
                                    Reddet
                                </Button>

                            </Item.Extra>
                            <Item.Extra >


                                <Button onClick={e => handleClick(advertisement.id)} circular style={{
                                    backgroundColor: "#840dc3",
                                    borderColor: "#840dc3",
                                    color: "white",
                                }} >
                                    <Icon name='checkmark' />Onayla</Button>
                            </Item.Extra>
                        </Container>
                    </Item.Group>

                ))
            }

        </Segment>

    )
}
