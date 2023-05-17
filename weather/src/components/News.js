import {useState, useEffect} from 'react';
import NewsInfo from './NewsInfo';
export default function News() {
    const url = new URL("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=0LaWQvxGpyTXBd1MCsk1ueAWZn6rEZqS");
    const [newsData, setNewsData] = useState([]);
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setNewsData(data))
        .catch((error) => console.log("Error:",error))
      }, [])
    return (
        <>
        {newsData.length === 0? <h3>Loading</h3> : 
        <div className= "newsBox">
            <div className= "innerNewsBox">
            {newsData.results.splice(0,5).map((element, index) =>
            <NewsInfo data= {element} index= {index}/>
            )}
            </div>
        </div>
        
    }
    </>
        
    );
}