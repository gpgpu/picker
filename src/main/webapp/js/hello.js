var people;
	$.get("/rest", function(data){
		people = data;	

var PeopleList = React.createClass({displayName: "PeopleList",
  render: function() {
	var listItems = people.map(function(item){
		return React.createElement("li", null, item.id, " - ", item.rank)
	});
    return React.createElement("ul", null, listItems)
   
  }
});

 React.render(
    React.createElement(PeopleList, null),
    document.getElementById('target')
  );
});
	
