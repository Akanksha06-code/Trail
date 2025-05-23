import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import { useState } from 'react'
import Card from '../components/card'
import ContactForm2 from '../components/contact-form2'
import './home.css'
import Footer  from '../components/footer'






  const handleClick = async () => {
      window.open('https://trail-frontend-new.onrender.com', '_self')
  }
  const  handleClick1 = async() => {
      window.open('https://trail-frontend-new.onrender.com', '_self')
  }
  


const Home = (props) => {
  
  return (
    <div className="home-container1">
      <Helmet>
        <title>Trail</title>
        <meta property="og:title" content="Trail" />
      </Helmet>
      <div className="home-navbar navbar-container ">
        <div className="max-width">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <div className="home-logo1">
              <img alt="image" src="/group%202.svg" className="home-image1" />
              <span className="brandName">Trail</span>
            </div>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <div className="home-links1">
                <button onClick={handleClick} className="button-secondary button">Log in</button>
                <button onClick={handleClick1} className="button button-primary">Get started</button>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu " >
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu ">
              <div className="home-nav">
                <div className="home-top">
                  <div className="home-logo2">
                    <img
                      alt="image"
                      src="/group%202.svg"
                      className="home-image2"
                    />
                    
                  </div>
                  <div data-thq="thq-close-menu" className="home-close-menu" >
                    <svg viewBox="0 0 1024 1024" className="home-icon12">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                
                <div className="home-buttons">
                  <button onClick={handleClick}  className="button-secondary button">Log in</button>
                  <button onClick={handleClick1} className="button button-primary">Get started</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon14"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon16"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon18"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
      </div>
      <div className="hero-container section-container">
        <div className="home-max-width2 max-width">
          <div className="home-content1">
            <span className="home-subtitle Content">
              Trail Expense And Subscription Management
            </span>
            <h1 className="home-title1">
              <span>
                Follow the Trail. Master Your
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text20">Budget.</span>
            </h1>
            <span className="home-description">
              Trail helps you track expenses and manage subscriptions
              effortlessly, all in one place. Stay in control of your finances
              and never miss a charge again.With Trail, you never lose track of
              where your money goes—because every rupee should count.
            </span>
            <div className="home-container2">
              <button onClick={handleClick1}  className="button button-gradient">Get started</button>
              <button onClick={handleClick} className="button button-transparent">Log in</button>
            </div>
          </div>
          <div className="home-image3">
            <img
              alt="image"
              src="/hero-600w.png"
              className="home-hero-image1"
            />
            <img
              alt="image"
              src="/union-400w.png"
              className="home-graphic-top"
            />
            <img
              alt="image"
              src="/group%2018-1200w.png"
              className="home-image4"
            />
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width3 max-width">
          <div className="home-image5">
            <img
              alt="image"
              src="/group%2020-1200w.png"
              className="home-hero-image2"
            />
          </div>
          <div className="home-content2">
            <span className="home-text21 beforeHeading">how it works</span>
            <h1 className="home-text22">
              <span>
                Take control of your
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text24">finances</span>
              <span>one entry at a time!</span>
            </h1>
            <span className="home-text26">
              Easily manage your subscriptions and expenses by manually entering
              them, tracking your spending, and setting reminders for due dates.
              Stay organized, save money, and never miss a payment.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="home-section2 section-container">
        <div className="home-max-width4 max-width">
          <div className="home-content3">
            <span className="home-text27 beforeHeading">save money</span>
            <h1 className="home-text28">
              <span className="home-text29">Get a Reminder</span>
              <span> to Cancel Subscriptions on Time</span>
            </h1>
            <span className="home-text31">
              By keeping a close eye on your subscriptions and expenses, the app
              helps you identify unnecessary or unused services, so you can cut
              back and save money. Tracking spending habits also encourages
              smarter budgeting and ensures you're not overpaying for
              recurring bills.
            </span>
          </div>
          <div className="home-image6"></div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1742240216264-f0aac25ef4ba?ixid=M3w5MTMyMXwxfDF8YWxsfDExfHx8fHx8fHwxNzQ2NzY2OTAxfA&amp;ixlib=rb-4.1.0&amp;w=1200"
            className="home-hero-image3"
          />
        </div>
      </div>
      <div className="home-section3 section-container">
        <div className="home-max-width5 max-width">
          <div className="home-image7">
            <img
              alt="image"
              src="/jc-gellidon-fnc3yctccoi-unsplash%2014%20%5B1%5D-1200w.png"
              className="home-hero-image4"
            />
          </div>
          <div className="home-content4">
            <span  className="home-text32 beforeHeading">get started</span>
            <h1 className="home-text33">Open your account today</h1>
            <div className="home-step1">
              <div className="home-number1">
                <span className="home-text34">1</span>
              </div>
              <div className="home-container3">
                <span className="home-title2">Open the Trail App</span>
              </div>
            </div>
            <div className="home-step2">
              <div className="home-number2">
                <span className="home-text35">2</span>
              </div>
              <div className="home-container4">
                <span className="home-title3">Create your free account</span>
              </div>
            </div>
            <div className="home-step3">
              <div className="home-number3">
                <span className="home-text36">3</span>
              </div>
              <div className="home-container5">
                <span className="home-title4">Add all Your Expenses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width6 max-width">
          <span  className="home-text37 beforeHeading">get started</span>
          <h1 className="home-text38">
            <span>No matter what you do,Trail</span>
            <span> will save you money</span>
          </h1>
          <div className="home-cards-container">
            <Card rootClassName="cardroot-class-name"></Card>
            <Card text="Personal" rootClassName="cardroot-class-name2"></Card>
            <Card text="Family" rootClassName="cardroot-class-name1"></Card>
          </div>
        </div>
      </div>
      <div className="home-section5 section-container">
        <div className="home-max-width7 max-width">
          <div className="home-banner">
            <span className="home-text41 beforeHeading">get started</span>
            <h1 className="home-text42">
              <span>Push your finances to</span>
              <br></br>
              <span>the next level.</span>
            </h1>
            <div className="home-btns">
              <button onClick={handleClick} className="home-button7 button button-gradient">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <ContactForm2 
        content1={
          <Fragment>
            <span className="home-text46">
              Have a question or need support?
            </span>
          </Fragment>
        }
        email={
          <Fragment>
            <span className="home-text47">trail.finance1@gmail.com</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text48">
              Fill out the form and we'll get back to you as soon as
              possible.
            </span>
          </Fragment>
        }
        action={
          <Fragment>
            <span className="home-text49">Submit</span>
          </Fragment>
        }
        phone={
          <Fragment>
            <span className="home-text50">7437902678</span>
          </Fragment>
        }
        adress={
          <Fragment>
            <span className="home-text51">Muzaffarpur, Bihar</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text52">Contact Us</span>
          </Fragment>
        }
        rootClassName="contact-form2root-class-name"
      ></ContactForm2>
    <Footer />
    </div>
  )
}

export default Home;
