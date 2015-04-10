package twstudio.rest;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import twstudio.domain.Person;
import twstudio.repository.PersonRepo;

@Named
@Path("/")
public class PersonService {
	
	@Inject
	private PersonRepo repo;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Person> hello(){
		
		List<Person> pList = repo.findAll();
		Person p = new Person("jingming", 0);
		pList.add(p);
		
		return pList;
	}
}
