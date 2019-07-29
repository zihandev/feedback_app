import React, { Component } from 'react'
import * as actions from '../actions/stripePay'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import classes from '../CSS/listsurvey.module.css';
import grids from '../CSS/grid.module.scss';


var moment = require('moment');

class SurveyList extends Component {

    componentWillMount(){
       this.props.fetchSurveys()
    }

    render() {
        let list = null;

       const now = moment();
       console.log(now)


if(this.props.surveys.length>0){

    let getTime 
     let result

    console.log(this.props.surveys);
    
         list = this.props.surveys.map((survey,i)=>{
            if(survey.createdAt) { getTime = moment(survey.createdAt); 
                result = now.diff(getTime, 'days'); console.log(result); } 
            return (
                <main style={{marginTop:'30px', marginBottom:'20px', border: '1px solid black',  boxShadow: '10px 10px 8px #888888' }}>
     
                  <div className={classes.title}>  
                 <strong>{i+1}. Title </strong>: {survey.title}
                 </div>  
                  <h5 className={classes.subject}> <strong>Subject</strong> : {survey.subject}</h5>
                  <p className={classes.body}> <strong>Body</strong> : {survey.body}</p>
                  <p className={classes.response}> <strong>Responses  </strong> </p>
                  <div className={classes.flexy}>
                  <button disabled className={classes.btn}>Yes : {survey.no}</button>
                   <button disabled className={classes.btn1}>No: {survey.no}</button>
                   </div>
                <div className={classes.footer} >
                {result==0 ? 'Sent Today' : ` ${result}  Days ago` }
                </div>
            </main>
            )
        })
    }
        return (<>
            <div className={classes.container}>
              {list}
            </div>
            <div className={classes.container1}>
             <button className={`${classes.btnclick} ${classes.home__btn}`}> <Link className={classes.link} to={`/forms`}>Create New Survey</Link> </button></div>
       </> )
    }
}


const mapStateToProps = (state)=>{
    return{
        surveys : state.surveys
    }
}


const mapDispatchToProps = (dispatch) =>{
    return{
        fetchSurveys : ()=>dispatch(actions.fetchSurveys())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyList)

{/* <div className={grids.col1Of3}>
<div className={classes.card}>
    <div className={`${classes.card__side} ${classes.card__sideFront}`}>
         <div className={`${classes.card__picture} ${classes.card__picture3}`}>
             &nbsp;
         </div>
         <h4 className={classes.card__heading}>
             <span className={`${classes.card__headingSpan} ${classes.card__headingSpan3}`}>Pro $15</span>
         </h4>
         <div className={classes.card__details}>
             <ul>
                 <li>Unlimited Surveys</li>
                 <li>Over 200 survey templates</li>
                 <li>2 tour guides</li>
                 <li>Share on social</li>
                 <li>Embed survey in website</li>
             </ul>
         </div>
    </div> */}