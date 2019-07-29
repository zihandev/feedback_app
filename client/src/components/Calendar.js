import React, { Component } from 'react'
import Calendar from 'react-calendar';
import moment from 'moment'
import Schedule from './chechpay';

export default class Calendars extends Component {
    state = {
       
        showSlot : false
      }
   
      handleChange = (value) =>{
    //    let cal= moment(value).format(
    //         "YYYY-DD-MM"
    //       );
         this.setState({date :value, showSlot : true })
         console.log(this.state.date)
      }
    
      


    render() {
        return (<>
            <div style={{marginLeft:'500px', marginBottom:'100px'}}>
            <div>
                  <Calendar
         onChange={(value) => this.handleChange(value) }
        />
        </div>
        </div>
       {this.state.date ? (<Schedule take={this.state.date}/>) : null}
            </>
        )
    }
}


