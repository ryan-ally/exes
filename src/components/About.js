import React from 'react';
import bg from './pp.jpeg';
import Quote from './Quote.js';
import QuoteAndAuthor from './QuoteAndAuthor.js';
import QuotesDatabase from './QuotesDatabase.js';
import './Form.css';
import img from './nb.jpeg';


const About = () => {
   return (
      <div>
         <h1>About US</h1>
         <br/>
         <h1><Quote /></h1><br/>
                                 <p>About US page body content</p><br/>
                           <img src={bg} className="App-pp" alt="pp"/><br/>
                           <br/>
                                                      <img src={img} className="App-nb" alt="nb"/><br/>
                                                      <hr/>
<h2>Responsive Pricing Tables</h2>
<p>Resize the browser window to see the effect.</p>
<br/>
<hr/>
<br/>
<div class="columns">
  <ul class="price">
    <li class="header">Basic</li>
    <li class="grey">$ 9.99 / year</li>
    <li>10GB Storage</li>
    <li>10 Emails</li>
    <li>10 Domains</li>
    <li>1GB Bandwidth</li>
    <li class="grey"><a href="#" class="button">Sign Up</a></li>
  </ul>
  <br/>
  <hr/>
</div>
<br/>
<div class="columns">
  <ul class="price">
    <li class="header">Pro</li>
    <li class="grey">$ 24.99 / year</li>
    <li>25GB Storage</li>
    <li>25 Emails</li>
    <li>25 Domains</li>
    <li>2GB Bandwidth</li>
    <li class="grey"><a href="#" class="button">Sign Up</a></li>
  </ul>
  <br/>
  <hr/>
</div>
<br/>
<div class="columns">
  <ul class="price">
    <li class="header">Premium</li>
    <li class="grey">$ 49.99 / year</li>
    <li>50GB Storage</li>
    <li>50 Emails</li>
    <li>50 Domains</li>
    <li>5GB Bandwidth</li>
    <li class="grey"><a href="#" class="button">Sign Up</a></li>
  </ul>
  <br/>
</div>
      </div>

  );
}

export default About;