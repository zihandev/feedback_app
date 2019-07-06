const sendgrid = require ('sendgrid');
const helper = sendgrid.mail;


class Mailer extends helper.Mail {          //helper is an object that contains a Mail class || Or is helper a clas that contains Mail subclass?
constructor({subject, recipients}, content) {
    super();

    this.sgApi = sendgrid('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');
    this.from_email = new helper.Email('no-reply@emaily.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);  //helper Mail's class method
    this.addClickTracking();
    this.addRecipients();
}

formatAddresses (recipients) {       //return an array of new helper.Email recipients 
    return recipients.map(({email})=>{
        return new helper.Email(email);
    })
}


addClickTracking(){
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);  //this instance receives methods from new Helper class
    this.addTrackingSettings(trackingSettings);

}


//Like an envelope, personalizations are used to identify who should receive the email as well as specifics about how you would like the email to be handled. 
addRecipients(){
    const personalize = new helper.Personalization();

    //loop through each recipients and add personalization
    this.recipients.forEach(recipient=>{
        personalize.addTo(recipient);
    })
    this.addPersonalization(personalize);
}


async send() {
    const request = this.sgApi.emptyRequest({      //request being created
        method : 'POST',
        path : '/v3/mail/send',
        body : this.toJSON()
    });

    const response = await this.sgApi.API(request);  //actual request being made
    return response ;
}
}

module.exports = Mailer;