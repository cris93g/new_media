import React,{Component} from "react"
import {Link} from "react-router-dom"

 class Home extends Component{
constructor(props){
    super(props)
    this.state={
        token:""
    }
    // this.getToken= this.getToken.bind(this)
}
componentDidMount(){
        let url = document.location.hash,
        hash = url.split('&')[0];
        if (hash) {
        let splitted= hash.split("").slice(16).join('')
        this.setState({token:splitted})
    }
}

    render(){
const{token}=this.state
console.log(token)
        return(
            <div>
                <h1>HOME</h1>
                {console.log()}
                <Link to={`/followers/${token}`}><button>follows</button></Link>
              
            </div>
        )
    }
}

export default Home