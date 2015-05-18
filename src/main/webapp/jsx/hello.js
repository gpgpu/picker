var SearchBox = React.createClass({
	handleChange: function(){
		var filterText = this.refs.filterTextInput.getDOMNode().value;
		this.props.onUserInput(filterText);
	},
	render: function(){
		return <input
			type="text"
			placeholder="Search..."
			value={this.props.filterText}
			ref="filterTextInput"
			onChange={this.handleChange}
			 />
	}
})



var PeopleList = React.createClass({displayName: "PeopleList",
  render: function() {
  	var listItems = [];
  	this.props.data.forEach(function(person){
  		if (person.id.indexOf(this.props.filterText) === -1 )
  			return;
  		listItems.push(<li>{person.id} - {person.rank}</li>)
  	}.bind(this));

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

var PeopleBox = React.createClass({
	displayName: "PeopleBox",
	getInitialState: function(){
		return {
			people: [],
			filterText: ""
		};
	},
	getData: function(){
		$.get("/rest", function(data){
			this.setState({people: data});
		}.bind(this));
	},
	componentDidMount: function(){
		this.getData();
	},
	handleSearchInput: function(filterText){
		this.setState({
			filterText: filterText
		})
	},
	handleNewPersonSubmit: function(person){
		var people = this.state.people;


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
					<SearchBox  filterText={this.state.filterText} onUserInput={this.handleSearchInput} />
					<PeopleList data={this.state.people} filterText={this.state.filterText} />
					<NewPersonForm onPersonSubmit={this.handleNewPersonSubmit} />
				</div>
		);
	}
})

React.render(
    <PeopleBox />,
    document.getElementById('target')
);
	
