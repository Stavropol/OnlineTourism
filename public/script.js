const submitButton = document.getElementById('submitButton')


submitButton.onclick = async function () {
    const form = document.getElementById('form-feedback')
    const name = form.name.value
    const email = form.email.value
    const place = form.place.value
    const feedbackInfo = {
        name: name,
        email: email,
        place: place
    }

    const feedbackInfoJSON = JSON.stringify(feedbackInfo)
    console.log(feedbackInfoJSON)
    const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: feedbackInfoJSON
    })
    if (response.ok) {
        console.log(await response.json())
    }
}