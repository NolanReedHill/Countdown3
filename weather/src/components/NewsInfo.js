export default function NewsInfo({data, index}) {
    function handleClick() {
        document.getElementById("d"+index).click();
    }
    return (
        <div 
        className= "newsStory" 
        id= {"c"+index}
        onClick={handleClick}
        >
        <a id={"d"+index} href={data.url} target= "_blank"/>
        {data.media.length === 0? <h2>No Picture</h2> :
        <img src={data.media[0]["media-metadata"][1].url} className="newsPics"/>
    }
        <h4>{data.title}</h4>
        </div>
    );
}