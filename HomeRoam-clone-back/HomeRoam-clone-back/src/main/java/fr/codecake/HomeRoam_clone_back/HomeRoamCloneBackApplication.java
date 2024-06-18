package fr.codecake.HomeRoam_clone_back;

import org.springframework.boot.SpringApplication;
// import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

import io.github.cdimascio.dotenv.Dotenv;
// @SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class HomeRoamCloneBackApplication {

	public static void main(String[] args) {
		Dotenv dotenv = Dotenv.configure().load();
		dotenv.entries().forEach(entry -> System.setProperty(entry.getKey(), entry.getValue()));
		SpringApplication.run(HomeRoamCloneBackApplication.class, args);
	}

}
