

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
	var listItems = this.props.data.map(function(item){
		return React.createElement("li", null, item.id, " - ", item.rank)
	});
    return React.createElement("ul", null, listItems)
   
  }
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

React.render(
    React.createElement(PeopleBox, null),
    document.getElementById('target')
);
	
