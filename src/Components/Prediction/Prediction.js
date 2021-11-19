import React, { Component } from 'react'

export class Prediction extends Component {
    
    async componentDidMount() {
        const test = await fetch('/token')
        const resp = await test.json()
        const cp4d_token = resp.access_token
        const data = { token: cp4d_token, url: "https://us-south.ml.cloud.ibm.com/ml/v4/deployments/a7d2373c-7141-42c0-93e1-07b11cc1bec3/predictions?version=2021-10-11" }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        const response = await fetch('/test', options)
        const qwer = await response.json()
        console.log(qwer)
    }

    render() {
        return (
            <>
                Prediction
            </>
        )
    }
}

export default Prediction
