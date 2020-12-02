package com.dyvrspages3.demo.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexPageController {

	@GetMapping("/")
	public String indexPage() {
		// no need to cap I or use indexPage bc thymeleaf pathway
		return "index";
	}

	@GetMapping("/about")
	public String about() {
		return "about";
	}

	@GetMapping("/businessOwner")
	public String businessOwner() {
		return "businessOwnerPage";
	}

	@GetMapping("/categories")
	public String categories() {
		return "categories";
	}

	@GetMapping("/contact")
	public String contact() {
		return "contactUs";
	}

	@GetMapping("/store")
	public String store() {
		return "individualStore";
	}

	@GetMapping("/newUser")
	public String newUser() {
		return "newUserForm";
	}

	@GetMapping("/suggestions")
	public String suggestions() {
		return "suggestion";
	}

	@GetMapping("/team")
	public String team() {
		return "team";
	}

	@GetMapping("/ownerLogIn")
	public String ownerLogIn() {
		return "ownerLogIn";
	}
}
