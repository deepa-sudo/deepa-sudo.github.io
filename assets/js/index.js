document.addEventListener("DOMContentLoaded", () => {
    
    const submitForm = () => {
        var contactName = window.userName.value;
        var subject = window.subject.value;
        var contactEmail = window.email.value;
        var contactMessage = window.message.value;
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