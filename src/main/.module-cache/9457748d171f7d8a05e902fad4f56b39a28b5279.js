var people;
	$.get("/rest", function(data){
		people = data;	

var PeopleList = React.createClass({
  render: function() {
	var listItems = people.map(function(item){
		return <li>{item.id} - {item.rank}</li>
	});
    return <ul>{listItems}</ul>
   
  }
});

 React.render(
    <PeopleList />,
    document.getElementById('target')
  );
});
	
