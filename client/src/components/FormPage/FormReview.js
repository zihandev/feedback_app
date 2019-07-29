import React from 'react';
import { connect, getIn } from 'formik';
import { useAlert } from 'react-alert'
import classes from '../../CSS/formReview.module.css';

// This component renders an error message if a field has
// an error and it's already been touched.
const ErrorMessage = props => {

    const alert = useAlert()
    
    const tried =()=>{
        alert.show('Oh look, an alert!');
    }

return (<div ><form  style={{border:'5px solid black', borderRadius: '30px'}} className={classes.formStyle7}>
<ul>
<li>
    <label for="title" >Title</label>
    <input type="text" name="title"  disabled  value={props.title}/>
    <span>Title of the Survey</span>
</li>
<li>
    <label for="subject">Subject</label>
    <input type="email" name="subject"  disabled  value={props.subject}/>
    <span>Subject to be Mailed</span>
</li>
<li>
    <label for="body">Body</label>
    <input type="text" name="body" disabled   value={props.body}/>
    <span>Body of The Survey </span>
</li>
<li>
<label for="recipients">Recipients</label> 
    <input type="text" name="recipients" disabled  value={props.recipients}/>
    <span>Your list of Recipients </span>
</li>
<li>
    <input type="button" onClick={props.clicked}  value=" Go Back" style={{marginRight:'60px'}} />
    <input  type='button' onClick={props.finished}    value="Confirm Submission" />
   
</li>

</ul>
</form></div>)}

export default ErrorMessage;




// const error = getIn(props.formik.errors, props.name);
// const touch = getIn(props.formik.touched, props.name);
// console.log(getIn(props.formik.title))
// console.log(props.formik.values.title)