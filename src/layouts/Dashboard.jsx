import React from 'react'
import { Container, Grid, Image, Message, Segment } from 'semantic-ui-react'
import Filter from './Filter'
import { Route } from 'react-router'
import CvList from '../pages/CvList'
import HeaderCont from '../layouts/HeaderCont'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import AddAdvertisement from '../pages/AddAdvertisement'
import ConfirmAdvertisement from '../pages/ConfirmAdvertisement'
export default function Dashboard() {
    return (
     
      <Grid   >
        <Grid.Row>
          <Grid.Column >
          <Route exact path="/" component={HeaderCont}/>
          </Grid.Column>

      
        </Grid.Row>
          <Grid.Row>
              <Grid.Column  mobile={12} tablet={6} computer={4}>
              <Route exact path="/jobAdvertisementList" component={Filter}/>
                
                  
              </Grid.Column>
             
            
              <Grid.Column  mobile={16} tablet={10} computer={12}>
              <Route exact path="/confirmAdvertisement" component={ConfirmAdvertisement}/>
             <Route exact path="/cvList" component={CvList}/>
             <Route exact path="/addAdvertisement" component={AddAdvertisement}/>
             <Route exact path="/jobAdvertisementList" component={JobAdvertisementList}/>
             {/* <Route path="/products/:name" component={ProductDetail}/> */}
             {/* <Route path="/cart" component={CartDetail}/> */}
              </Grid.Column>
          </Grid.Row>
      </Grid>

  
              
       
    
    )
}
