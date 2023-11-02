package com.ToDoiVar.ShoesPee;

import com.ToDoiVar.ShoesPee.Security.auth.AuthenticationService;
import com.ToDoiVar.ShoesPee.Security.auth.RegisterRequest;
import org.modelmapper.ModelMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import static com.ToDoiVar.ShoesPee.Models.Role.ADMIN;

@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
public class ShoesPeeApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShoesPeeApplication.class, args);
	}
	@Bean
	public ModelMapper mapper(){
		return new ModelMapper();
	}
}
//	@Bean
//	public CommandLineRunner commandLineRunner(
//			AuthenticationService service
//	) {
////		return args -> {
////			var admin = RegisterRequest.builder()
////					.username("Admin")
////					.email("admin@mail.com")
////					.password("password")
////					.role(ADMIN)
////					.build();
////			System.out.println("Admin token: " + service.register(admin).getAccessToken());
//
//
//
////		};
////	}
//}


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

