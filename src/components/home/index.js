import React from 'react'
import Services from './Services'
import Layout from '../layout'
import Provide from './Provide'
import Landing from '../Landing'
import Oc from './Oc'
import Products from './Products'
import {Link} from '@reach/router'
import './styles.css'
export default function index(){
    return(
        <Layout>
        <Landing 
        header="Welcome to Plastic Box"
        subheader="We offer the best packing box out there"
        >
        
        <button className="l-btn">
        <Link to="/contact">
        Get In Touch
        </Link>
        </button>
        </Landing>
     {/*
     */}
     <Services />
     <Products />
    <Provide />
        <Oc />
        </Layout>
    )
}