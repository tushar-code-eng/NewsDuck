import React, { Component } from 'react'
import duck from './duck.png'
import Contact from './contact.png'

export class contact extends Component {
    constructor() {
        super();
        document.body.style.backgroundColor = "#b34747"
    }
    render() {
        console.log("hello")
        return (
            <div>

                <div className=' d-flex justify-content-center' style={{ marginTop: '90px' }}>
                    <a class="navbar-brand" href="/"><img src={duck} alt="NewsBytes" width="60" height="60" /></a>
                    <h1 className='remove-me' >-NewsBytes</h1>
                </div>
                <div class="container text-center my-3" style={{backgroundColor:"#d37070"}}>
                    <div class="row">
                        <div class="col">
                        <img src={Contact} alt="Contact" />
                        </div>
                        <div class="col">
                            Column
                        </div>
                    </div>
                </div>

            </div>


        )
    }
}
export default contact
