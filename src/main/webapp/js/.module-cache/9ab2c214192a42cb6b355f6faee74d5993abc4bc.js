

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
		var newOne = {id: "wei", rank: 11};
		var newList = people.concat([newOne]);
		this.setState({people: newList});
	},
	render: function(){
		return (
				React.createElement("div", null, 
					React.createElement("h2", null, "List"), 
					React.createElement(PeopleList, {data: this.state.people}), 
					React.createElement(NewPersonForm, {onPersonSubmit: this.handleNewPersonSubmit})
				)
		);				
	}
})

var PeopleList = React.createClass({displayName: "PeopleList",
  render: function() {
	var listItems = this.props.data.map(function(item){
		return React.createElement("li", null, item.id, " - ", item.rank)
	});
    return React.createElement("ul", null, listItems)
   
  }
});

 

var NewPersonForm = React.createClass({displayName: "NewPersonForm",
	handleSubmit: function(e){
		e.preventDefault();

		this.props.onPersonSubmit({id: "aa", rank: 12});
		return;
	},
	render: function(){
		return (
				React.createElement("form", {onSubmit: this.handleSubmit}, 
				React.createElement("input", {type: "text", placeholder: "id"}), 
				React.createElement("input", {type: "text", placeholder: "rank"}), 
				React.createElement("input", {type: "submit", value: "Create"})
				)
		)
	}
})

React.render(
    React.createElement(PeopleBox, null),
    document.getElementById('target')
);
	
