import React,{Component} from "react"
import axios from "axios";


 class Followers extends Component{
     constructor(props){
         super(props)
         this.state={
             follow:{}
         }
     }
     componentDidMount(){
        axios.post(`/api/streams/followed`,{
            Id:this.props.match.params.token
        }).then(response =>{
            this.setState({follow:response.data})
        })
     }
    render(){
       console.log( this.props.match.params.token)
       console.log(this.state)
        return(
            <div>
               <h1>Followers</h1>
            </div>
        )
    }
}

export default Followers