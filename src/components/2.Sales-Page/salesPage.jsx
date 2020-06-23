import React from "react";

import "./salesPage.scss";
import Img1 from '../../assets/dvd-large.png';
import Img2 from '../../assets/bundle-medium.png';

const SalesPage = (props) => {
  console.log(props)
  return (
    <div className="sales-container">
      <div className="upper-container">
        <p className="upper-title">
          <strong>ATTENTION:</strong> Business owners, bloggers, marketers,
          coaches, product owners...
        </p>
      </div>
      <div className="title">
        <span>
          "Discover The Step-By-Step Blueprint To Building a Thriving Email List
          and Increase Your Profits Starting Today"
        </span>
      </div>
      <div>
        <p className="scarcity">FREE For A Limited Time</p>
      </div>
      <div className="top-panel-container">
        <div className="bullet-points">
          <ul>
            <li>
              Do you still feel like you're spinning the wheels trying to make a
              profit online?
            </li>
            <br />
            <li>
              Not getting the returns you would like to see from paid
              advertising sources such as Facebook Ads?
            </li>
            <br />
            <li>
              Are you struggling you build a loyal audience who buy everything
              you put out?
            </li>
            <br />
            <li>Do you want an easy way to follow-up on your subscribers?</li>
            <br />
            <li>If you answered 'Yes' to any of these, then read on...</li>
            <br />
          </ul>
        </div>
        <div className="ebook-img">
          <img
            alt=""
            src={Img1}
            width="380"
            onClick={() => props.history.push("/sales2")}
          />
        </div>
      </div>
      <div>
        <div className='sp-middle-section'>
          <h1>Why Your Business Needs To Build An Email List</h1>
        </div>
        <div className='sp-text-container'>
          <p className='sp-text-paragraph'>
            If you run a business, a website or a blog and you want to increase your audience as well as increasing engagement, then the single most effective way to do that is with email marketing.<br /><br />

            If you listen to pretty much any top marketer, then they will almost always tell you this. They will almost always say that the most important aspect of their marketing – the thing that led to their success – was email.<br /><br />

            And there’s a very good reason for this. Or ten…<br /><br />

            Email marketing allows you to reach your audience in an incredibly direct manner.<br /><br />

            Unlike other forms of marketing, you’ll actually be able to reach your audience directly in their inboxes without having to go through any third party.<br /><br />

            That means that you’re not reliant on a platform like Facebook or Twitter, or at the mercy of potential changes to policies that could render your messages unheard.<br /><br />

            It wasn’t that long ago that Facebook made the decision to change its system so that only a small percentage of posts from pages got through to followers.<br /><br />

            With email, your messages are going directly to the users. That means that nothing can prevent you from reaching them and you know that 100% of everything you send is going to reach the recipient.<br /><br />

            It means that you don’t lose your long list of subscribers if Facebook decides to inexplicably delete your account (this happens – in fact it has happened to me) or if they decide to delete their accounts.<br /><br />

            This is a relationship that is directly between you and the subscribers. But that’s only touching the very surface of what makes Email marketing so useful.<br /><br />
          </p>
        </div>
        <div className='sp-middle-section'>
          <h1>But Isn't Email Marketing Dead?</h1>
        </div>
        <div className='sp-text-container'>
          <p className='sp-text-paragraph'>
            Far from it!<br /><br />

            Just take a look at the follow stats:
          </p>
          <ul className='sp-ul-container'>
            <li><strong>Email marketing has a ROI of 4,300%</strong></li><br/>
            <li>91% of consumers check email daily (most people check it much more!)</li><br />
            <li>When surveyed, companies say that email marketing is more profitable than: PPC, content marketing, display advertising, mobile ads, social media marketing, direct marketing, affiliate marketing…</li><br />
            <li>66% of US consumers aged over 15 have made a purchase as a direct result of an email campaign</li><br />
            <li>1/3rd of consumers say that they open their emails on the basis of the subject line alone</li><br />
          </ul>
          <p className='sp-text-paragraph'>
            As you can see, this is a form of marketing with a truly gigantic ROI and that has the power to engage like no other.<br/><br/>

            The question you need to ask is whether you’re making the most from your list building activities.
          </p>

        </div>
        <div className='sp-middle-section'>
          <h1>How Do You Get Started With Email Marketing?</h1>
        </div>
        <div className='sp-text-container'>
          <p className='sp-text-paragraph'>
            Building an email list isn't as easy as it sounds.<br/><br/>

            There are many bits and pieces that go into email marketing.<br /><br />

            You have autoresponders, segmentations, email copy, landing pages and much more.<br /><br />

            Thankfully, I've created a comprehensive course guiding you through the process of building an email list and monetizing it, too.<br /><br />

            Let me introduce you to our brand new course:<br /><br />
          </p>
        </div>
        <div className='sp-middle-section'>
          <h1>EMAIL LIST SECRETS</h1>
          <h3 className='sp-subtitle-course'>A Complete 12-Part Step-By-Step Email Marketing Crash Course</h3>
          <img alt='' src={Img2} />
        </div>
      </div>
    </div>
  );
};

export default SalesPage;
