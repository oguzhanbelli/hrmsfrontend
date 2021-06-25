/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import JobAdvertisementService from '../services/jobAdvertisementService'
import { Item, Image, Container, Segment, Label } from 'semantic-ui-react'
import JobPositions from '../pages/JobPositions'
import City from '../pages/City'
import styled from 'styled-components'
import { Button } from 'bootstrap';

export default function JobAdvertisementList() {

  const [filters, setFilters] = useState('')
  const handleFilters = (filters, category) => {
  setFilters(filters)

  }


  const handleClick = function (e) {
    console.log(e.target.value);

  };

  const [jobAdvertisements, setJobAdvertisements] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getAdvertisements().then(result => setJobAdvertisements(result.data.data))
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

      <JobPositions handleFilters={filters => handleFilters(filters, "continents")}></JobPositions>
      <City handleFilters={filters => handleFilters(filters, "continents")}></City>
   
      {
        jobAdvertisements.filter(value => {
          if (setFilters === '') {
            return value
          } else if (value.jobName.toLocaleLowerCase().includes(filters.toLocaleLowerCase()) || value.cityName.toLocaleLowerCase().includes(filters.toLocaleLowerCase())) {

            return value
          }
        }).map((advertisement, index) => (



          <Item.Group key={advertisement.id} divided>

            <Item onClick={e => console.log(advertisement.id)} as='a' style={itemStyle}>
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
                <Item.Description style={{ fontFamily: "Segoe UI", fontWeight: 500 }}>
                  {advertisement.cityName}
                </Item.Description>
                <Item.Description>
                  {advertisement.description}
                </Item.Description>
                <Container style={{ display: "flex", justifyContent: "space-between", alignItems: "left", right: 30 }}>
                  <Item.Extra>
                    <Label style={{
                      borderRadius: 10, margin: "auto",
                      marginRight: "30px", marginBottom: 10, fontWeight: 600
                    }} content={advertisement.workingTimeTitle} />
                  </Item.Extra>

                  <Item.Extra >
                    <Label style={{
                      borderRadius: 20, margin: "auto",
                      marginLeft: "30px", fontWeight: 600
                    }} icon='time' content="7 gün önce" />

                  </Item.Extra>
                </Container>
              </Item.Content>
            </Item>

          </Item.Group>

        ))
      }

    </Segment>

  )
}
