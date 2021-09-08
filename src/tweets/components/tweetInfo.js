import './tweetInfo.css';
const value = "safdfhgfad"
const TweetInfo = () => {
    return (
       <div className="TweetInfo">
        <div className="image-section">
        <img alt="sachin"/>
        </div>
          <div className="text-section">
              <textarea defaultValue={value} rows="5" cols="55" />
              <div className="tweet-bottom">
              <span></span>
              <span></span>
              </div>
              
              </div>   
       </div>
    )
}

export default TweetInfo;