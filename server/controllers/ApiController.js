const axios = require("axios");
const {KEY}= process.env
let getTopTwitchGames = async (req,res) =>{

	let info = await axios.get(`https://api.twitch.tv/kraken/games/top`,{
		headers:{
			"Client-ID":KEY
		}
	})
	let results= info.data;
	if(results){
		res.status(200).json(results)
	}
}

let getLiveStreams= async (req,res) =>{
	let info = await axios.get(`https://api.twitch.tv/kraken/streams/`,{
		headers:{
			"Client-ID":KEY
		}
	})
	let results = info.data;
	if(results){
		res.status(200).json(results)
	}
}

let getMyFollowedStreams = async (req,res) =>{
	let {Token} = req.body;
	let info = await axios.get(`https://api.twitch.tv/kraken/streams/followed`,{
		headers:{
			"Client-ID":KEY,
			"Authorization":`OAuth ${Token}`
		}
	})
	let results = info.data;
	if(results){
		res.status(200).json(results)
	}
}

let getSearchChannels = async (req,res) =>{
	let {search}= req.body;
	let info= await axios.get(`https://api.twitch.tv/kraken/search/channels?query=${search}`,{
		headers:{
			"Client-ID":KEY,
		}
	})
	let results = info.data;
	if(results){
		res.status(200).json(results)
	}
}


module.exports = { getTopTwitchGames,getLiveStreams,getMyFollowedStreams,getSearchChannels };
