// callAPI function that takes the name and email numbers as parameters
let callAPI = (name,email) => {

    alert(`Clicked with values: ${name} and ${email}`)
    
    // instantiate a headers object
    let myHeaders = new Headers();
    
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    
    // using built in JSON utility package turn object to string and store in a variable
    let raw = JSON.stringify({"name":name,"email":email});

    // create a JSON object with parameters for API call and store in a variable
    let requestOptions = {
        mode: 'no-cors',
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    // make API call with parameters and use promises to get response
    fetch("https://2p0xqeg642.execute-api.us-east-1.amazonaws.com/Dev/", requestOptions)
    .then(response => response.text())
    .then(result => alert(JSON.parse(result).body))
    .catch(error => console.log('error', error));
}