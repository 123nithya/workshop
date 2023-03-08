package com.nithya.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nithya.employee.entity.Employee;
import com.nithya.employee.service.EmployeeService;

@RestController
@CrossOrigin("http://localhost:3000")
public class EmployeeController {
	@Autowired
	private EmployeeService empser;
	
	@GetMapping("/get")
	private List<Employee>add(){
		return empser.getAllDetails();
	}
	
	@PostMapping("/post")
	private String post(@RequestBody Employee e) {
		empser.saveDetails(e);
		return "Value Added";
	}
	
	@PutMapping("/put")
	private String put(@RequestBody Employee e) {
		empser.updateDetails(e);
		return "Value updated";
	}
	
	@DeleteMapping("/delete/{empId}")
	private void delete(@PathVariable int empId) {
		empser.deleteDetails(empId);
	}
}
