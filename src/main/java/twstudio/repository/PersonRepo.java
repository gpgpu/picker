package twstudio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import twstudio.domain.*;

public interface PersonRepo extends JpaRepository<Person, String> {
	Person findById(String id);
}
