import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

import classes from '../../CSS/form.module.css';
import FormReview from './FormReview';
import { Persist } from 'formik-persist'

const FormApp = ({values, errors, touched, isSubmitting}) => {

 
    return  ( <>
    <h1 style={{textAlign:'center', borderBottom:'1px solid black', marginBottom:'40px'}}>CREATE A SURVEY</h1>
    <div className={classes.formStyle5}>
        <Form>
            <div>
                {touched.title && errors.title &&<p className={classes.errors}>{errors.title}</p>}
                <Field type='text' name='title' placeholder='Survey Title'/>
            </div>
            <div>
                {touched.subject && errors.subject &&<p className={classes.errors}>{errors.subject}</p>}
                <Field type='text' name='subject' placeholder='Enter The Subject'/>
            </div>
            <div>
                {touched.body && errors.body &&<p className={classes.errors}>{errors.body}</p>}
                <Field type='text' name='body' placeholder='Enter the body'/>
            </div>
            <div>
                {touched.recipients && errors.recipients &&<p className={classes.errors}>{errors.recipients}</p>}
                <Field type='text' name='recipients' placeholder='Enter the Recipients. Eg: ben@gmail.com, tim@yahoo.in, ..'/>
            </div>
            <button  type='submit'>Submit</button>
              <Persist name="signup-form" />  
        </Form></div></>
    ) }

export default withFormik({
    mapPropsToStatus(){
       return{ title : 'hi'
    }},
    mapPropsToValues({title, subject, body, recipients}){
        return {
            title : title || '',
            subject : subject || ""
        }
    },
    validationSchema : Yup.object().shape({
        title : Yup.string().required('Title Is Required'),
        body : Yup.string().required('Body Field cannot be empty'),
        recipients : Yup.string('Enter Emails separated by Commas').required('Recipients is required').matches(/^(\s?[^\s,]+@[^\s,]+\.[^\s,]+\s?,)*(\s?[^\s,]+@[^\s,]+\.[^\s,]+)$/, 'Invalid email format')
    }),
    handleSubmit(values, {setSubmitting,props}){
       setTimeout(()=>{ 
            props.give(values.title, values.body, values.recipients, values.subject)  
           props.onSurveySubmit()
       setSubmitting(false)
       },2000) 
    }
})(FormApp);
