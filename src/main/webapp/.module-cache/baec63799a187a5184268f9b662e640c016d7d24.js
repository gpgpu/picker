var people;
	$.get("/rest", function(data){
		people = data;	

var Plist = React.createClass({displayName: "Plist",

  render: function() {
	var listItems = people.map(function(item){
	return React.createElement("li", null, item.id, React.createElement("br", null), item.rank)
});
    return React.createElement("ul", null, listItems)
   
  }
});

 React.render(
    React.createElement(Plist, null),
    document.getElementById('target')
  );
});
	
