

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
				React.createElement("input", {type: "text", name: "id", placeholder: "id"}), 
				React.createElement("input", {type: "text", name: "rank", placeholder: "rank"}), 
				React.createElement("input", {type: "submit", value: "Create"})
				)
		)
	}
})

React.render(
    React.createElement(PeopleBox, null),
    document.getElementById('target')
);
	
