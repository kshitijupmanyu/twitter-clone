import React from 'react';
import './Widgets.css';
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className="widgets">
        <div className="widgets--input">
          <SearchIcon className="widgets--searchIcon" />
          <input placeholder="Search Twitter" type="text" />
        </div>
        <div className="widgets--widgetContainer">
          <h2>What's happening?</h2>
          <TwitterTweetEmbed tweetId={"1570458446545432578"} />
          <TwitterTimelineEmbed sourceType="profile" screenName="upmanyukshitij" options={{height: 400}} />
          <TwitterShareButton
    url={'https://facebook.com/kshitijupmanyu'}
    options={{ text: '#reactjs is awesome', via: 'upmanyukshitij' }}
  />
        </div>
    </div>
  )
}

export default Widgets