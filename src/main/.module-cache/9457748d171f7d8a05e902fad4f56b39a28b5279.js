var people;
	$.get("/rest", function(data){
		people = data;	

var PeopleBox = React.createClass({
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
				<div>
					<h2>List</h2>
					<PeopleList data={this.state.people} />
				</div>
		)
				
	}
})
var PeopleList = React.createClass({
  render: function() {
	var listItems = this.props.people.map(function(item){
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
	
