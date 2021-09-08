import React, {useEffect} from  "react";
import TweetInfo from "./components/tweetInfo";
import axios from 'axios';
const list = [1,2,3,4,5,6,7,8];
const Tweets = () => {
    useEffect(() => {
        fetch('https://api.twitter.com/2/tweets/sample/stream?expansions=author_id&user.fields=created_at,profile_image_url',{
            headers:{
                'authorization':'Bearer AAAAAAAAAAAAAAAAAAAAAKqGGAEAAAAANP7Bov1%2Fhil2L8UVCvRi56BbEpc%3De2U28uf5uWLBaClPrC48PuzSjzrJJvp71mJfbqMhhT4nPxnIUM'
            }
        }
        )
       
    }, [])
    return (
      list.map(item =>(
<TweetInfo key={item}></TweetInfo>
      ))
        
    )
}

export default Tweets;