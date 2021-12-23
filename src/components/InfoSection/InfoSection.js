import React, { Component } from 'react'
import './InfoSectionStyles.css'
import styled from 'styled-components'

export class InfoSection extends Component {


    render() {

        const Paragraph = styled.p`
        color: #fff;
    `
        return (
            <div className='hero-img'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <Paragraph>{this.props.text}</Paragraph>
                </div>
            </div>
        )
    }
}

export default InfoSection
