import React, {Component} from 'react';
import axios from 'axios';
import Loader from './component/loader';
import './App.css';

class UserList extends Component {
	state={
	    userList:[],
	    isLoading:false
	}

	componentDidMount() {
	    this.getData();
	    console.log('2');
	}

	getData=()=>{
	  	console.log('3');
	    axios.get("http://api.planetshare.in/public/api/getHomeData").then((res)=>{	 
	    	if(res.data.success===1) {         
		    	this.setState({userList:res.data.gallery_list[1].listing});
		    	setTimeout(()=>this.setState({isLoading:true}),1000)
		    	console.log('3');
		    }
	    })
	}

	render() {
		console.log('1');
		const {userList,isLoading}=this.state;
		const listContent=(userList.length >0?userList.map((res,key)=>{
			return(
				<li key={key}>
					<img src={res.large_thumb} alt="" />
				</li>
			)
		}):<li><span class="noresult">No Result Found</span></li>
		)
		console.log(userList)
		if(isLoading)
    	{
		    return (
				<div>
					<div className="container">
						<Header />
						<ConentList />
						<ul className="img_list">
							{listContent}
						</ul>
					</div>
				</div>
			)
		}
		else {
		    return(<div id="content"><Loader/></div>);
		}
	}
}

class ConentList extends Component {
	constructor() {
		super();
		this.state = {
			data: [
				{
					"id":1,
					"name":"rohit",
					"post":"UI Developer"

				},
				{
					"id":2,
					"name":"atul",
					"post":"Laravel Developer"

				},
				{
					"id":3,
					"name":"amar",
					"post":"Laravel Developer"

				}
			]
		}
	}
	render() {
		return(<div>
				<table border="1">
					<tbody>
						{this.state.data.map((person, i)=><TableRow key={i} data={person} />)}
					</tbody>
				</table>
			</div>
		)
	}
}

class TableRow extends Component {
	render() {
		return(
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.post}</td>
			</tr>
		)
	}
}

class Header extends Component {
	render() {
		return(
			<h1>Header</h1>
		)
	}
}

export default UserList;