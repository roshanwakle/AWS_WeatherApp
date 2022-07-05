// import axios from 'axios'
const axios = require('axios')
// import express from 'express'

exports.handler = async (event) => {
    
    console.log('>>>>>>>>>>>>>>>>> inside lambda function')
    let API_KEY  = "74f8cf364bb8557c47cbb569d5dad64f"
    // var location = JSON.parse(event.body.city);
    let location = event.body.city;
    //  let location = "nagpur";

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        const response = await axios.get(url);
        
        console.log("-------------->>>>>>>>>",response.data)
        
        const apiResponse = {
        statusCode: 200,
        body: JSON.stringify(response.data),
    };
    
    return apiResponse;
       
    } catch (error) {
        console.log(error.message)
    }
}