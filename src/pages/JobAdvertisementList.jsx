import React, { useEffect, useState } from 'react'
import JobAdvertisementService from '../services/jobAdvertisementService'
import { Item, Label, Segment } from 'semantic-ui-react'
import { Table } from 'evergreen-ui'
export default function JobAdvertisementList() {

    const [jobAdvertisements, setJobAdvertisements] = useState([])
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getAdvertisements().then(result => setJobAdvertisements(result.data.data))
    }, [jobAdvertisements])

    return (
        <Segment>
                     <Table>
                            <Table.Head>
                             
                              <Table.TextHeaderCell>Şirket İsmi</Table.TextHeaderCell>
                              <Table.TextHeaderCell>Açıklama</Table.TextHeaderCell>
                              <Table.TextHeaderCell>Bitiş Tarihi</Table.TextHeaderCell>
                              <Table.TextHeaderCell>Başlangıç Tarihi</Table.TextHeaderCell>
                            </Table.Head>
                            <Table.Body height={240}>
                              {jobAdvertisements.map((profile) => (
                                <Table.Row key={profile.id} isSelectable onSelect={() => alert(profile.description)}>
                                  <Table.TextCell>{profile.employerCompanyName}</Table.TextCell>
                                  <Table.TextCell>{profile.description}</Table.TextCell>
                                  <Table.TextCell isNumber>{profile.endDate}</Table.TextCell>
                                  <Table.TextCell isNumber>{profile.createdDate}</Table.TextCell>
                                </Table.Row>
                              ))}
                            </Table.Body>
                          </Table>

                <Item.Group divided>

                    {
                        jobAdvertisements.map(advertisement => (



                            <Item key={advertisement.id} >
                                <Item.Image src='https://www.sabancivakfi.org/i/content/1792_1_logo-k-1.jpg' />

                                <Item.Content >
                                    <Item.Header  as='a'>{advertisement.jobName}</Item.Header>
                                    <Item.Meta>
                                        <span className='cinema'>{advertisement.employerCompanyName}</span>
                                    </Item.Meta>
                                    <Item.Description style={{fontFamily:""}}>{advertisement.description}</Item.Description>
                                    <Item.Extra style={{marginTop:"20px",marginRight:"30px"}}>
                                        <Label icon='calendar alternate outline' content={advertisement.endDate}></Label>
                                        <Label  icon='map marker alternate' content={advertisement.cityName} />
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                          


                        ))
                        

                    }
                </Item.Group>
               
          
                        
        </Segment>
    )
}
