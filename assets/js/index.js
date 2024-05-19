document.addEventListener("DOMContentLoaded", () => {
    
    const submitForm = () => {
        var contactName = window.userName;
        var subject = window.subject;
        var contactEmail = window.email;
        var contactMessage = window.message;
        if (!!contactName && !!subject& !!contactEmail && !!contactMessage) {
            window.open(
            `mailto:${contactEmail}?subject=${encodeURIComponent(
                subject
            )}&body=${encodeURIComponent(contactName)} (${encodeURIComponent(
                contactEmail
            )}): ${encodeURIComponent(contactMessage)}`
            );
        }
    };

    const submit = document.getElementById("submit");
    if ( submit){
        submit.addEventListener("click", (e) => {
            submitForm();
            e.preventDefault();
        })
    }
})