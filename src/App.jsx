import { useState } from 'react'
import './App.css'
import { Assets } from './assets/assets.js'

function App() {
  return (
    <>
      <header>
        <div className='backgound'>
          <img src={Assets.background} alt="" />
        </div>

        <div className='nav-main'>
          <nav>
            <img src={Assets.netflix} alt="netflix logo" />
            <a href="#">Sign In</a>
          </nav>

          <div className='header-content'>
            <h2>Unlimited movies, TV shows, and more</h2>
            <p>Starts at Ksh 200. Cancel anytime.</p>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='subscribe'>
              <label for="email"> 
                <span id='email-click'>Email address</span>
                <input type="email" name='email' className='email' id='email' placeholder='Email address' />
              </label>
              <button>Get Started <span class="material-symbols-outlined">chevron_right</span></button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="trends">
          <div className="trends-top">
            <div className="strip"></div>
          </div>
          <h6>Trending Now</h6>
          <div className='trends-content'>
            <div className='left-button btn'><span class="material-symbols-outlined">chevron_left</span></div>
            <div className='trend-cards'>
              <div className="card"><img src={Assets.youngfamousandafrican} alt="card1" /></div>
              <div className="card"><img src={Assets.squidgame} alt="card2" /></div>
              <div className="card"><img src={Assets.nightagent} alt="card3" /></div>
              <div className="card"><img src={Assets.backaction} alt="card4" /></div>
              <div className="card"><img src={Assets.sandcastle} alt="card5" /></div>
              <div className="card"><img src={Assets.fakeprofile} alt="card6" /></div>
              <div className="card"><img src={Assets.advitam} alt="card7" /></div>
              <div className="card"><img src={Assets.xokutty} alt="card8" /></div>
              <div className="card"><img src={Assets.prisonbreak} alt="card9" /></div>
              <div className="card"><img src={Assets.beautyinblack} alt="card10" /></div>
            </div>
            <div className='right-button btn'><span class="material-symbols-outlined">chevron_right</span></div>
          </div>
        </div>

        <div className="reasons">
          <h6>More Reasons to Join</h6>
          <div className="reasons-content">
            <div className="card1">
              <h3>Enjoy on your TV</h3>
              <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
              <img src={Assets.tv} alt="" />
            </div>

            <div className="card1">
              <h3>Download your shows to watch offline</h3>
              <p>Save your favorites easily and always have something to watch.</p>
              <img src={Assets.download} alt="" />
            </div>

            <div className="card1">
              <h3>Watch everywhere</h3>
              <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
              <img src={Assets.watch} alt="" />
            </div>

            <div className="card1">
              <h3>Create profiles for kids</h3>
              <p>Send kids on adventures with their favorite characters in a space made just for them — free with your membership.</p>
              <img src={Assets.createaccount} alt="" />
            </div>
          </div>

        </div>

        <div className="faqs">
          <h6>Frequently Asked Questions</h6>
          <div className="faqs-content">
            <div className="card2">
              <div className="show-card"> 
                <span>What is Netflix? </span>
                <span class="material-symbols-outlined close">close</span>
                <span class="material-symbols-outlined add">add</span>
              </div>
              <p>
                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, 
                documentaries, and more on thousands of internet-connected devices.
                You can watch as much as you want, whenever you want without a single commercial -
                all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
              </p>
            </div>

            <div className="card2">
              <div className="show-card">
                <span>How much does Netflix cost? </span>
                <span class="material-symbols-outlined close">close</span>
                <span class="material-symbols-outlined add">add</span>
              </div>
              <p>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range from Ksh 200 to Ksh 1,100 a month. No extra costs, no contracts.
              </p>
            </div>
            <div className="card2">
              <div className="show-card">
                <span>Where can I watch? </span>
                <span class="material-symbols-outlined close">close</span>
                <span class="material-symbols-outlined add">add</span>
              </div>
              <p>
                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer 
                or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet
                connection. Take Netflix with you anywhere.
              </p>
            </div>

            <div className="card2">
              <div className="show-card">
                <span>How do I cancel? </span>
                <span class="material-symbols-outlined close">close</span>
                <span class="material-symbols-outlined add">add</span>
              </div>
              <p>
                Netflix is flexible. There are no pesky contracts and no commitments. 
                You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.
              </p>
            </div>

            <div className="card2">
              <div className="show-card">
                <span>What can I watch on Netflix? </span>
                <span class="material-symbols-outlined close">close</span>
                <span class="material-symbols-outlined add">add</span>
              </div>
              <p>
                Netflix has an extensive library of feature films, documentaries, TV shows, anime, 
                award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
              </p>
            </div>
            <div className="card2">
              <div className="show-card">
                <span>Is Netflix good for kids? </span>
                <span class="material-symbols-outlined close">close</span>
                <span class="material-symbols-outlined add">add</span>
              </div>
              <p>
                The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch 
                and block specific titles you don't want kids to see.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="footer-top">
          <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
          <div className='subscribe'>
              <label for="email"> 
                <span id='email-click'>Email address</span>
                <input type="email" name='email' className='email' id='email' placeholder='Email address' />
              </label>
              <button>Get Started <span class="material-symbols-outlined">chevron_right</span></button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className='bottom-frame1'><a href="#">Questions? Contact us.</a></div>
          <div className="footer-bottom-content">
            <div className="card3">
              <ul>
                <li><a href="">FAQ</a></li>
                <li><a href="">Investor Relations</a></li>
                <li><a href="">Privacy</a></li>
                <li><a href="">Speed Test</a></li>
              </ul>
              <button><span class="material-symbols-outlined">translate</span> English <span class="material-symbols-outlined">arrow_drop_down</span></button>
              <h6>Netflix Kenya</h6>
            </div>

            <div className="card3">
              <ul>
                <li><a href="">Help Center</a></li>
                <li><a href="">Jobs</a></li>
                <li><a href="">Cookie Preferences</a></li>
                <li><a href="">Legal Notices</a></li>
              </ul>
            </div>

            <div className="card3">
              <ul>
                <li><a href="">Account</a></li>
                <li><a href="">Ways to Watch</a></li>
                <li><a href="">Corporate Information</a></li>
                <li><a href="">Only on Netflix</a></li>
              </ul>
            </div>

            <div className="card3">
              <ul>
                <li><a href="">Media Center</a></li>
                <li><a href="">Terms of Use</a></li>
                <li><a href="">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
