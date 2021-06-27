/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import JobAdvertisementService from '../services/jobAdvertisementService'
import { Item, Image, Container, Segment, Label, Pagination, Input,Icon } from 'semantic-ui-react'
import JobPositions from '../pages/JobPositions'
import { Select } from 'evergreen-ui';
import City from '../pages/City'
import styled from 'styled-components'
import { Button } from 'bootstrap';

export default function JobAdvertisementList() {

  function calculateDay(value) {
  
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
          return 'Şimdi';
      const intervals = {
          'yıl': 31536000,
          'ay': 2592000,
          'hafta': 604800,
          'gün': 86400,
          'saat': 3600,
          'dakika': 60,
          'saniye': 1
      };
      let counter;
      for (const i in intervals) {
          counter = Math.floor(seconds / intervals[i]);
          if (counter > 0)
              if (counter === 1) {
                  return counter + ' ' + i + ' önce'; // singular (1 day ago)
              } else {
                  return counter + ' ' + i + ' önce'; // plural (2 days ago)
              }
      }
  }
  return value;
  }
  const [filters, setFilters] = useState('')
  const handleFilters = (filters, category) => {
    setFilters(filters)

  }


  const handleClick = function (e) {
    console.log(e.target.value);

  };
  const countryOptions = [
    { key: '10', value: '10', text: '10 Ar Sayfala' },
    { key: '20', value: '20', text: '20 Ar Sayfala' },
    { key: '50', value: '50', text: '50 Ar Sayfala' },
    { key: '100', value: '100', text: '100 Ar Sayfala' },
  ]
  const [jobAdvertisements, setJobAdvertisements] = useState([])

  const [pageNo, setActivePage] = useState(1);
  const handleInputChange = (e, { value }) => setPageSize(value)
  const handlePaginationChange = (e, { activePage }) => setActivePage(activePage)
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();

    jobAdvertisementService.getPageable(pageNo, pageSize).then(result => setJobAdvertisements(result.data.data))
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
                    }} icon='time' content={calculateDay(advertisement.createdDate)} />

                  </Item.Extra>
                </Container>
              </Item.Content>
            </Item>

          </Item.Group>

        ))
      }
    
      <Select onChange={e => setPageSize(e.target.value)} width={240} height={40}>
        <option  value="10" selected>
          10
        </option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </Select>
      <Pagination

        activePage={pageNo}
        onPageChange={handlePaginationChange}
        totalPages={pageSize}
        ellipsisItem={null}
      />
    </Segment>

  )
}
