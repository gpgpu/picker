var people;
	$.get("/rest", function(data){
		people = data;	

var PeopleBox = React.createClass({displayName: "PeopleBox",
	getInitialState: function(){
		return {people: []};
	},
	getData: function(){
		$.get("/rest", function(data){
			this.setState({people: data});
		}).bind(this)
	},
	componentDidMount: function(){
		this.getData();
	},
	render: function(){
		return (
				React.createElement("div", null, 
					React.createElement("h2", null, "List"), 
					React.createElement(PeopleList, {data: this.state.people}), 
					React.createElement(NewPersonForm, null)
				)
		);
				
	}
})
var PeopleList = React.createClass({displayName: "PeopleList",
  render: function() {
	var listItems = this.props.people.map(function(item){
		return React.createElement("li", null, item.id, " - ", item.rank)
	});
    return React.createElement("ul", null, listItems)
   
  }
});

 React.render(
    React.createElement(PoepleBox, null),
    document.getElementById('target')
  );
});

var NewPersonForm = React.createClass({displayName: "NewPersonForm",
	render: function(){
		return (
				React.createElement("form", null, 
				React.createElement("input", {type: "text", placeholder: "id"}), 
				React.createElement("input", {type: "text", placeholder: "rank"}), 
				React.createElement("input", {type: "submit", value: "Create"})
				)
		)
	}
})
	
