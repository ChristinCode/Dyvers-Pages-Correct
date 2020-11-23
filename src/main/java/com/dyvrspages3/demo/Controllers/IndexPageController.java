package com.dyvrspages3.demo.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexPageController {
	
	@GetMapping("/")
	public String IndexPage() {
		//no need to cap I or use indexPage bc thymeleaf pathway
		return "index";
	}
}
