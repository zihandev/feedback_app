import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import Form from './Form';
import FormReview from './FormReview';
import Axios from 'axios';
import * as actions from '../../actions/stripePay'
import {connect} from 'react-redux';

class SurveyNew extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  state = { showFormReview: false, title : '', body : '', recipients:'', subject: '' };

finish=()=>{
    const survey={
        title : this.state.title ,
subject : this.state.subject ,
recipients : this.state.recipients,
body : this.state.body
    }
    console.log(survey)
    this.props.submitSurvey(survey);
    this.props.history.push('/dashboard');
}

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <FormReview
          title = {this.state.title}
          body = {this.state.body}
          recipients = {this.state.recipients}
          subject = {this.state.subject}
          clicked ={()=>this.setState({showFormReview: false})}
           finished={()=>this.finish()}
        />
      );
    }

    return (
      <Form
      give = {(title, body, recipients, subject)=>this.setState({title, body, recipients, subject})}
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <main style={{marginTop: '70px'}}><div>
        {this.renderContent()}
      </div></main>
    );
  }
}

const mapDispatchToProps = dispatch =>{
  return {
      fetchUser : ()=>dispatch(actions.fetchUser()),
      submitSurvey : (fields)=>dispatch(actions.submitSurvey(fields))
  }
}

export default connect(null, mapDispatchToProps)(SurveyNew);

