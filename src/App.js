import React from 'react';
import logo from './assets/techstars-logo-white.svg';
import attendees from './assets/happy-attendees.jpg';
import { Header, Footer, Wrapper, Heading, Content } from './styled';
import Signup from './Signup.js';

function App() {
  return (
    <>
      <Header>
        <img src={logo} alt="Techstars" />
      </Header>
      <main>
        <Wrapper>
          <Heading>Seattle Startup Week</Heading>
          <p>August 3-8 2020 - Free</p>

          <Content className="row">
            <div className="col-12 col-md-6">
              <Signup />
            </div>
            <div className="col-12 col-md-6">
              <h3>Join Five Days of Fun</h3>
              <p>We're thrilled that you're interested in Startup Week. Startup Week is a free, five-day celebration of our community that builds momentum and opportunity around entrepreneurship. We're led by local entrepreneurs and hosted in amazing spaces all over town. And we want you involved! Take a second to sign up for our list to keep up with all the updates we'll have for you over the next few months.</p>
              <img src={attendees} alt="Happy attendees" />
            </div>
          </Content>
        </Wrapper>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
