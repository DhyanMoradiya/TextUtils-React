import PropTypes from 'prop-types'
import React from 'react'

export default function Navbar(props) {
    const black = ()=>{
        props.changeMode('white', '#212529', '#007bff', '#303033', 'white', 'dark')
    }
    const white = ()=>{
        props.changeMode('black', 'white', '#212529', '#f8f9fa', 'white', 'light')
    }
    const green = ()=>{
        props.changeMode('#fff', '#004245', '#1b797f', '#0c2e29', '#fff', 'dark')
    }
    const blue = ()=>{
        props.changeMode('#fff', '#050830', '#5be1ff', '#0064ff', "#000", 'dark')
    }
    const broun = ()=>{
        props.changeMode('#5d4031', '#fffbf7', '#f9ebdb', '#5d4031', "#5d4031", 'dark')
    }

    return (
        <nav style={{
            color: props.mode.navColor,
            background: props.mode.navBackground
        }} className={`navbar navbar-expand-lg navbar-brand navbar-${props.mode.navColor}`} >
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">{props.aboutText}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                    </ul>
                    <div className="palettes mx-5">
                        <div className="colorPalette" onClick={black} style={{background: `linear-gradient(120deg, black, #007bff)`}}></div>
                        <div className="colorPalette" onClick={white} style={{background: `linear-gradient(120deg, white, #212529)`}}></div>
                        <div className="colorPalette" onClick={green} style={{background: `linear-gradient(120deg, #004245, #1b797f)`}}></div>
                        <div className="colorPalette" onClick={blue} style={{background: `linear-gradient(120deg, #050830, #5be1ff)`}}></div>
                        <div className="colorPalette" onClick={broun} style={{background: `linear-gradient(120deg, #fffbf7, #5d4031)`}}></div>
                    </div>
                    {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-4`}>
                        <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label mx-2" htmllFor="flexSwitchCheckDefault">{`Enable ${props.mode === 'light' ? 'dark' : 'light'} mode`}</label>
                    </div> */}
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn" style={{
                            color: props.mode.btnColor,
                            background: props.mode.btnBackground,
                            border: `1px solid ${props.mode.btnBackground}`
                        }} type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Title here",
    aboutText: "About"
}
