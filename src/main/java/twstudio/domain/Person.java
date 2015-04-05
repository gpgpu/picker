package twstudio.domain;

import javax.persistence.Entity;
import javax.persistence.*;

@Entity
public class Person {
	@Id
	private String id;
	private int rank;
	
	public Person(){
		
	}
	public Person(String id, int rank){
		this.id = id;
		this.rank = rank;
	}
	
	@Override
	public String toString(){
		return this.id + " " + this.rank;
	}

}
