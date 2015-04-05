package twstudio.rest;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

import twstudio.domain.Person;
import twstudio.repository.PersonRepo;

@Named
@Path("/")
public class PersonService {
	
	@Inject
	private PersonRepo repo;
	
	@GET
	public String hello(){
		
		Person p = repo.findById("ruidong");
		
		return p.toString();
	}
}
