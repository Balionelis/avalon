import React from 'react';
import '../styles/AboutProject.css';
import floor from '../images/floor.png'

export default function AboutProject() {
    return (
        <aboutme>
            <div className='floor'><img src={floor}/></div>
            
            {/* <div className='contents'>
                <h1>Hello</h1>
            </div> */}
        </aboutme>
    );
}