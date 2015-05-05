

var PeopleBox = React.createClass({
	displayName: "PeopleBox",
	getInitialState: function(){
		return {people: []};
	},
	getData: function(){
		$.get("/rest", function(data){
			this.setState({people: data});
		}.bind(this));
	},
	componentDidMount: function(){
		this.getData();
	},
	handleNewPersonSubmit: function(person){
		var people = this.state.people;
		var newOne = {"id": "wei", "rank": 11};

		$.post("/rest", newOne, function(){
				var newList = people.concat([newOne]);
                            this.setState({people: newList});
		}.bind(this));
	},
	render: function(){
		return (
				<div>
					<h2>List</h2>
					<PeopleList data={this.state.people} />
					<NewPersonForm onPersonSubmit={this.handleNewPersonSubmit} />
				</div>
		);				
	}
})

var PeopleList = React.createClass({displayName: "PeopleList",
  render: function() {
	var listItems = this.props.data.map(function(item){
		return React.createElement("li", null, item.id, " - ", item.rank)
	});
    return <ul>{listItems}</ul>
   
  }
});

 

var NewPersonForm = React.createClass({
	handleSubmit: function(e){
		e.preventDefault();

		this.props.onPersonSubmit({id: "aa", rank: 12});
		return;
	},
	render: function(){
		return (
				<form onSubmit={this.handleSubmit}>
				<input type="text" placeholder="id" />
				<input type="text" placeholder="rank" />
				<input type="submit" value="Create" />
				</form>
		)
	}
})

React.render(
    <PeopleBox />,
    document.getElementById('target')
);
	
