package com.ToDoiVar.ShoesPee;

import com.ToDoiVar.ShoesPee.auth.AuthenticationService;
import com.ToDoiVar.ShoesPee.auth.RegisterRequest;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

import static com.ToDoiVar.ShoesPee.Models.Role.ADMIN;
import static com.ToDoiVar.ShoesPee.Models.Role.USER;

@SpringBootApplication
//@EnableJpaAuditing(auditorAwareRef = "auditorAware")
public class ShoesPeeApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(ShoesPeeApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

	}

//	@Bean
//	public CommandLineRunner commandLineRunner(
//			AuthenticationService service
//	) {
//		return args -> {
//			var admin = RegisterRequest.builder()
//					.username("ADMIN")
//					.email("admin@mail.com")
//					.password("admin")
//					.role(ADMIN)
//					.build();
//			System.out.println("Admin token: " + service.register(admin).getAccessToken());
////		return args -> {
////			var user1 = RegisterRequest.builder()
////					.username("USER1")
////					.email("user1@mail.com")
////					.password("user")
////					.role(USER)
////					.build();
////			System.out.println("Admin token: " + service.register(user1).getAccessToken());
////		};
//
//		};
//	}
}