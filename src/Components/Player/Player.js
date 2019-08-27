import React,{Component} from "react"
const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

class Player extends Component{
constructor(props){
    super(props)
    this.state={
        targetID: 'twitch-embed',
        width: '940',
        height: '480',
    }
}
    componentDidMount() {
    let embed;
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      EMBED_URL
    );
    script.addEventListener('load', () => {
      embed = new window.Twitch.Embed(this.state.targetID);
    });
        document.body.appendChild(script);
  }

  render() {

    return (
        <div>
        {this.props.targetID} {this.state.width} {this.state.height}
        <div id={this.state.targetID}></div>
      </div>
    )
  }
}



export default Player