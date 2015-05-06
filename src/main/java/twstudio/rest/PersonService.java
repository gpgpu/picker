package twstudio.rest;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import twstudio.domain.Person;
import twstudio.repository.PersonRepo;
import org.apache.log4j.*;
@Named
@Path("/")
public class PersonService {
	
	@Inject
	private PersonRepo repo;
	
	private static Logger log = LogManager.getLogger(PersonService.class);
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Person> hello(){
		log.info("calling rest services...");
		List<Person> pList = repo.findAll();
		Person p = new Person("jingming", 0);
		pList.add(p);
		
		return pList;
	}

/*	@POST
//	@Consumes(MediaType.APPLICATION_JSON)
	public void add(@FormParam("id") String id, @FormParam("rank") int rank) {
		Person p = new Person(id, rank);
		repo.save(p);
	} */
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void add(Person person){
		repo.save(person);
	}

}
