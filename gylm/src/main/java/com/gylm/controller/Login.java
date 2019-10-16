package com.gylm.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Login {
	
	
	@RequestMapping(value="/")
	public String indexPage() {
		return "index";
	}
	
}
