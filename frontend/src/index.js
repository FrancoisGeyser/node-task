import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import List from './components/filelist'

const Data = (url, callback) => {
    fetch(`http://localhost:4000/url?site=${url}`)
        .then(res => {
        return res.json()
        }).then(res => callback(res))
            Promise.resolve()
}

const Index = () => {
    const [url, setUrl] = useState(null)
    const [data, setData] = useState(null)

    return (
        <div>
            <h1>Home</h1>
            <div>
            <p>Tested with:</p>
            <ul>
                <li>https://news.ycombinator.com</li>
                <li>https://francoisg.dev</li>
            </ul>
            <p>Endpoint: http://localhost:4000/url?site=http://example.com</p>
            </div>
        <div>
            <h2>Please enter your Url below to request file list</h2>
            <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
            <button onClick={()=> {Data(url, setData)}}>Submit</button>
        </div>
        <div>
            <h2>Files:</h2>
            <ul>
                {data ? <List list={data} /> : null} 
            </ul>
        </div>
    </div>
)}

export default Index

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Index/>, wrapper) : false;