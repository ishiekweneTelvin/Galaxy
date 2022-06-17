import React from 'react'
import './Footer.css'
import {FaFacebook,FaLinkedin,FaMailBulk,FaPhone,FaSearchLocation,FaTwitter} from 'react-icons/fa' 

const Footer= () => {
  return (
    <div className= 'footer'>
        <div className='footer-container'>
<div className ='left'>
<div className='location'>
<FaSearchLocation size={20} style={{color:'#fffff', marginRight:'2rem'}}/>

    </div>

<div>
    <p>234 Acem Jnction</p>
    <p>London,U.K.</p>
</div>
</div>
<div className='phone'>
    <h4><FaSearchLocation size={20} style={{color:'#fffff', marginRight:'2rem'}}/>1-800-3453-345</h4>

</div>
<div className='email'>
    <h4><FaMailBulk size={20} style={{color:'#fffff', marginRight:'2rem'}}/>1-800-3453-345</h4>

</div>
        </div>
<div className ='right'>
    <h4>About the company</h4>
    <p>leorem frjr sjd,f dkmkfkdf  fjrjrk gt fd vjfnf
        doipt erwset geroinh dslr sjf rot p djfjfds
        doipt erwset geroinh dslr sjf rot p djfjfds
        doipt erwset geroinh dslr sjf rot p djfjfds
        doipt erwset geroinh dslr sjf rot p djfjfds 
    </p>
    <div className='social'>
        <FaFacebook size={30} style={{color:'#fffff', marginRight:'2rem'}}/>
        <FaTwitter size={30} style={{color:'#fffff', marginRight:'2rem'}}/>
        <FaLinkedin size={30} style={{color:'#fffff', marginRight:'2rem'}}/>
    </div>
</div>
    </div>
    
  )
}

export default Footer