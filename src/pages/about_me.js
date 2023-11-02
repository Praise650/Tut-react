import React from "react"
import '../App.css';
import GeneralInputField from '../components/general_input_field';

function AboutMePage() {
    return (
        <div className="home-header">
            <div className='home-container'>
                <div className='about'>
                    <div class="item">
                        <GeneralInputField placeholder="Department" type='text' />
                        <GeneralInputField placeholder="Year of Graduation" type='text' />
                        <GeneralInputField placeholder="Are you a Worker" type='text' />
                        <GeneralInputField placeholder="Unit Position" type='text' />
                        <GeneralInputField placeholder="Are you an Executive?" type='text' />
                    </div>
                    <div class="item">
                        <a
                            className="about-link"
                            href="/pages/about_me"
                            // target="_blank"
                            rel="noopener noreferrer">
                            About Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMePage;