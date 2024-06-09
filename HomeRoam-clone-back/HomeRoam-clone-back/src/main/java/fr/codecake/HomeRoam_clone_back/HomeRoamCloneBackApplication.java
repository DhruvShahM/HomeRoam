package fr.codecake.HomeRoam_clone_back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HomeRoamCloneBackApplication {

	public static void main(String[] args) {
		SpringApplication.run(HomeRoamCloneBackApplication.class, args);
        System.out.println("successfull");

		//  String url = "jdbc:postgresql://localhost:5432/mydatabase";
        // String user = "postgres";
        // String password = "root";

        // try (Connection connection = DriverManager.getConnection(url, user, password)) {
        //     System.out.println("Connected to the PostgreSQL server successfully.");
        // } catch (SQLException e) {
        //     System.out.println(e.getMessage());
        // }
	}

}
