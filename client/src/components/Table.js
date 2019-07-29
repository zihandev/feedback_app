import React from 'react'
import { FaCalendarCheck, FaRupeeSign, FaMailBulk, FaRegCreditCard, FaListUl } from 'react-icons/fa';
import classes from '../CSS/table.module.css'

const Table = () => {
    return (<main style={{marginTop: '30px'}}>
        <table >
        <thead >
          <tr style={{textAlign:'center'}}>
              
            <th scope="col" style={{borderBottom:'1px solid black'}} colspan="5">INSTRUCTIONS</th>
            
            </tr>
        </thead>
        <tbody>
          <tr scope="col" colspan="5">
          <td></td>
        <td >Purchase Credits to create Surveys </td>
             <td><FaRupeeSign /></td>
            </tr>
          <tr><td></td>
            <td>Create Surveys with a title and a question </td>
            <td><FaCalendarCheck /></td> 
            
          </tr>
          <tr><td></td>
            <td>Send surveys to single/multiple email addresses </td>
            <td><FaMailBulk /></td>
           
          </tr>
          <tr><td></td>
            <td>To View all Surveys, go to the Surveys tab </td> 
            <td><FaListUl /> </td>
          
            
          </tr>
          <tr><td></td>
            <td>To Add Credits, go to the Credits tab </td>
            <td><FaRegCreditCard /></td>
            
          </tr>
        </tbody>
      </table></main>
      
    )
}

export default Table



