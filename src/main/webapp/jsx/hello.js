

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


//		$.post("/rest", person, function(){
//				var newList = people.concat([person]);
//              this.setState({people: newList});
//		}.bind(this));

		$.ajax({
			url: "/rest",
			type: "POSt",
			contentType: "application/json",
			data: JSON.stringify(person),
			success: function(){
				var newList = people.concat([person]);
                this.setState({people: newList});
			}.bind(this)
		})
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

		var idValue = React.findDOMNode(this.refs.id).value.trim();
		var rankValue = React.findDOMNode(this.refs.rank).value.trim();

		var person = {};
		person.id = idValue;
		person.rank = rankValue;
		this.props.onPersonSubmit(person);

		React.findDOMNode(this.refs.id).value = '';
        React.findDOMNode(this.refs.rank).value = '';
		return;
	},
	render: function(){
		return (
				<form onSubmit={this.handleSubmit}>
				<input type="text" ref="id" placeholder="id" />
				<input type="text" ref="rank" placeholder="rank" />
				<input type="submit" value="Create" />
				</form>
		)
	}
})

React.render(
    <PeopleBox />,
    document.getElementById('target')
);
	
