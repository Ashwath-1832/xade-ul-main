import './styles.css'
import React, { useRef, useEffect, useLayoutEffect, forwardRef, useState } from "react";
import "../styles/style.css";
const App = () => {

  return (
    <><><>
    <section class="container">
      <div class="left-half" style={{}}>
        <div className='line2'>
          <div style={{ fontFamily: 'Benzin-Medium', fontSize: '0.6rem', letterSpacing: '10px', color: '#E86D6F' }}><span>GLOBAL PAYMENTS </span> </div>
          <div style={{ fontSize: '2rem', fontWeight: 500, lineHeight: 1.2, fontFamily: 'Benzin-Bold' }}>
          <h3>GLOBAL GASLESS PAYMENTS TO ANY IDENTITY</h3>
          </div>
          <div style={{ fontSize: '1rem', fontFamily: 'Regular', }}>
          <span>Send Payments to any email address, mobile number, DID and more in a gasless manner irrespective of the fact whether the recipient has a wallet or not with programmable payments.</span>
          </div>
        </div>
      </div>
      <div class="right-half" style={{}}>
        <img className='credimg' src = {process.env.PUBLIC_URL + '/Media/payments.png'} alt="payment image"></img>
      </div>
    </section>
    <section class="container" id='container2' >
        <div class="left-half" >
          <img className='credimg' src='https://res.cloudinary.com/xade-finance/image/upload/v1684697496/payments-4_tmxt1z.png' alt="image"></img>
        </div>
        <div class="right-half" >
          <div className="line2" style={{ textAlign: 'left'}}>
            <div style={{ fontFamily: 'Benzin-Medium', fontSize: '0.6rem', letterSpacing: '10px', color: '#A15EFF' }}>HIGH YIELD SAVINGS </div>
            <div style={{ fontSize: '2rem', fontWeight: 500, lineHeight: 1.2, fontFamily: 'Benzin-Bold' }}>
         <h3>BEAT INFLATION WITH A STABLE SAVINGS ACCOUNT</h3>
            </div>
            <div style={{ fontSize: '1rem', fontFamily: 'Regular' }}>
              <span>Get a savings account created specifically to beat inflation by financing real world loans powered by our innovative savings protocol SabeX.</span>
            </div>
          </div>
        </div>
      </section></><section class="container" >
        <div class="left-half" style={{}}>
          <div className="line2" style={{}}>
            <div style={{ fontFamily: 'Benzin-Medium', fontSize: '0.6rem', letterSpacing: '10px', color: '#FFCE40' }}><span>PRO TRADING </span></div>
            <div style={{ fontSize: '2rem', fontWeight: 500, lineHeight: 1.2, fontFamily: 'Benzin-Bold' }}>
             <h3>TRADE ANYTHING WITH 10X LEVERAGE</h3>
            </div>
            <div style={{ fontSize: '1rem', fontFamily: 'Regular' }}>
            <span>  Go Long or Short with upto 10x leverage on stocks, crypto, forex and more powered by DeriveX with almost guranteed liquidity and improved risk engines.
            </span> </div>
          </div>
        </div>
        <div class="right-half">
          <img className='credimg' src='https://res.cloudinary.com/xade-finance/image/upload/v1684697594/Mask_group-13_rnxtfy.png' alt='image'></img>
        </div>
      </section></><section class="container"  id='container4'>
        <div class="left-half" >
          <img className='credimg' src='https://res.cloudinary.com/xade-finance/image/upload/v1684697495/payments-3_ccnbii.png' alt='image'></img>

        </div>
        <div class="right-half" >
          <div className="line2" style={{ textAlign: 'left' }}>
            <div style={{ fontFamily: 'Benzin-Medium', fontSize: '0.6rem', letterSpacing: '10px', color: '#40CEFF' }}><span>INSTANT LOANS </span></div>
            <div style={{ fontSize: '2rem', fontWeight: 500, lineHeight: 1.2, fontFamily: 'Benzin-Bold' }}>
             <h3 >FINANCE YOUR LOANS EASILY AND INSTANTLY</h3>
            </div>
            <div style={{ fontSize: '1rem', fontFamily: 'Regular' }}>
             <span> Finance your real world loans such as EMIs or Mortgages or against ERC-20 Tokens in various manners with no paperwork powered by SabeX. </span>
            </div>
            <br></br>
          </div>

        </div>

      </section>          <br />
      <br /><br /></>
  );
};
export default App;

