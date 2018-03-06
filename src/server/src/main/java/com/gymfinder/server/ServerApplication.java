package com.gymfinder.server;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Collection;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}
}

@Entity
class Location {
	@Id
	@GeneratedValue
	private long id;
	private String name;

	public Location() {
	}

	public Location(String name) {
	    this.name = name;
    }

    public long getId() {
	    return id;
    }

    public void setId(Long id) {
	    this.id = id;
    }

    public String getName() {
	    return name;
    }
}

interface LocationRepository extends JpaRepository<Location, Long> {

}

@Component
class LocationCommandLineRunner implements CommandLineRunner {
    private final LocationRepository repository;
    public LocationCommandLineRunner(LocationRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        Stream.of("Tere5", "Tere2", "Tere3", "Tere4").forEach(name -> repository.save(new Location(name)));
        repository.findAll().forEach(System.out::println);
    }
}

@RestController
class LocationController {
    private LocationRepository repository;

    public LocationController(LocationRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/good-locations")
    public Collection<Location> list() {
        return repository.findAll().stream().filter(this::isGood).collect(Collectors.toList());
    }

    private boolean isGood(Location location) {
        return !location.getName().equals("Tere");
    }
}