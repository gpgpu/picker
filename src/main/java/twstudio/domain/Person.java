package twstudio.domain;

import javax.persistence.Entity;
import javax.persistence.*;

@Entity
public class Person {
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public int getRank() {
		return rank;
	}
	public void setRank(int rank) {
		this.rank = rank;
	}

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
