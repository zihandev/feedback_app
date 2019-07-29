
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import moment from 'moment'
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";


export default class Schedule extends Component {
    state ={
        schedule : null,
        isLoading : false,
        appointmentDate : '2019-7-9'
    }
    
    checkDisableDate(day) {
        const dateString = moment(day).format("YYYY-DD-MM");
        return (
          this.state.schedule[dateString] === true ||
          moment(day)
            .startOf("day")
            .diff(moment().startOf("day")) < 0
        );
      }

    
          
        handleDBReponse(response) {
            const appointments = response;
            const today = moment().startOf("day"); //start of today 12 am
            const initialSchedule = {};
            // initialSchedule[today.format("YYYY-DD-MM")] = true;
            console.log(`Appoinments is ${appointments}`)
            this.state.schedule = !appointments.length
              ? initialSchedule
              : appointments.reduce((currentSchedule, appointment) => {
                  const { slot_date, slot_time } = appointment;
                  console.log(`Slot Date is ${slot_date}`)
                  const dateString = moment(slot_date, "YYYY-DD-MM").format(
                    "YYYY-DD-MM"
                  );
                  
                  console.log(`CURRENT Date String is ${currentSchedule[slot_date]}`)
                  !currentSchedule[dateString] //filling the array with respective dates and "NOT" slot TIME
                    ? (currentSchedule[dateString] = Array(8).fill(false))
                    : (currentSchedule[dateString])
                  Array.isArray(currentSchedule[dateString])
                    ? (currentSchedule[dateString][slot_time] = true)
                    : null;
                  return currentSchedule;
                }, initialSchedule);
                console.log(this.state.schedule);
            }

        // for (let day in schedule) {
        //   let slots = schedule[day];
        //   slots.length
        //     ? slots.every(slot => slot === true) ? (schedule[day] = true) : null
        //     : null;
        //     console.log(slots);
            
        // }}
          

        // -----------------------------------------------------------------------------------------------------------------------
            

       

         
       
    
    
    render() {

        // setTimeout(() => {
        //     this.setState({
        //         schedule: schedule
        //        })
        //     }, 5000);
        const renderAppointmentTimes=() =>{

            if (this.state.schedule) {
              const slots = [...Array(8).keys()];
              console.log(`Slots is ${slots}`)
              return slots.map(slot => {
                const appointmentDateString = moment(this.props.take).format(
                  "YYYY-DD-MM"
                );
                console.log(`Appointment date is ${appointmentDateString}`);
                const time1 = moment()
                  .hour(9)
                  .minute(0)
                  .add(slot, "hours");
                  console.log(`time 1 is ${time1}`);
                  
                const time2 = moment()
                  .hour(9)
                  .minute(0)
                  .add(slot + 1, "hours");
                const scheduleDisabled = this.state.schedule[appointmentDateString]  //COMPARE Appointment PROP Date with BACKEND Date (we looped through and created a Object).
                  ? this.state.schedule[                                                //See if SLOT is BOOKED(true)
                      moment(this.props.take).format("YYYY-DD-MM")
                    ][slot]
                  : 'falseyy';
                  console.log(`schedule disabled is ${scheduleDisabled}`);
                  
                const meridiemDisabled = this.state.appointmentMeridiem
                  ? time1.format("a") === "am"
                  : time1.format("a") === "pm";
                return (
                    
                   <input
                    type='text'
                
                     label={time1.format("h:mm a") + " - " + time2.format("h:mm a")}
                     key={slot}
                    value={scheduleDisabled===true?'SLOT BOOKED':slot}
                    style={{
                       marginBottom: 15,
                       textAlign : 'center'
                //       display: meridiemDisabled ? "none" : "inherit"
                   }}
                    disabled={!scheduleDisabled }
              />
                );
              });
              
            } else {
              return null;
            }
        }
    


        const res= [{
            _id: '5a7578oe7h38d',
            name : 'john',
            email : 'smith',
            phone : 683768379234,
           
           
                _id : '5a7578oe7h38d',
                slot_time : '1',
                slot_date : '2019-10-7',
                created_at : '2018-02-03T08:18:54.432Z',
                __v : 0    
        },{
            _id: '5a7578oe7h38d',
            name : 'john',
            email : 'smith',
            phone : 683768379234,
           
           
                _id : '5a7578oe7h38d',
                slot_time : '4',
                slot_date : '2019-10-7',
                created_at : '2018-02-03T08:18:54.432Z',
                __v : 0    
        }, 
        {
            _id: '5a7578oe7h38d',
            name : 'john',
            email : 'smith',
            phone : 683768379234,
           
                _id : '5a7578oe7h38d',
                slot_time : '5',
                slot_date : '2019-27-7',
                created_at : '2018-02-03T08:18:54.432Z',
                __v : 0    
        }]
         this.handleDBReponse(res);
         

 

        return (
            <div style={{textAlign:'center'}}>
                <h2 style={{textAlign:'center'}}>BOOK YOUR APPOINTMENT</h2>
               {renderAppointmentTimes()}
            </div>
        )
    }
}



// const dateString = moment(day).format("YYYY-DD-MM");
// return (
//   this.state.schedule[dateString] === true ||
//   moment(day)
//     .startOf("day")
//     .diff(moment().startOf("day")) < 0
// );
// }



/* 
{2019-10-07: true, 2019-09-07: Array(8), 2019-27-07: Array(8)}
2019-09-07: (8) [false, true, false, false, true, false, false, false]
2019-10-07: true
2019-27-07: (8) [false, false, false, false, false, true, false, false]
__proto__: Object
*/

// {2019-10-07: true, 2019-09-07: Array(8), 2019-27-07: Array(8)}
// 2019-09-07: (8) [false, true, false, false, true, false, false, false]
// 2019-27-07: (8) [false, false, false, false, false, true, false, false]
// __proto__: Object
// Slots is 0,1,2,3,4,5,6,7
// chechpay.js:89 Appointment date is 2019-09-07
// chechpay.js:94 time 1 is Wed Jul 10 2019 09:00:16 GMT+0530
// chechpay.js:105 schedule disabled is falseyy