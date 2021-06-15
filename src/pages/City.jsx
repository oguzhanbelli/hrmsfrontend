import React, { useEffect, useState } from 'react'
import { Accordion, Menu, Dropdown, Input } from 'semantic-ui-react'
import { Combobox,Select,Autocomplete } from 'evergreen-ui'
import CityService from '../services/cityService'


export default function City() {

  

    const [city, setCity] = useState([])

    useEffect(() => {
        let cityService = new CityService();
        cityService.getAll().then(result => setCity(result.data.data))
    }, [])




    return (
        <div  style={{display:"flex",alignContent:"center",justifyContent:"center",marginTop:10}}>
            
            <Select search  onChange={event => console.log(event.target.value)}>
                                {
                                    city.map(c =>(
                                        <option key={c.cityId} defaultValue="0" value={c.cityId} data-key={c.cityId}  >
                                        {c.cityName}
                                    </option>

                                    ))
                                }
                              
                            </Select>
                
        </div>
    )
}
