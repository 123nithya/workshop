package com.nithya.employee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nithya.employee.entity.Employee;
import com.nithya.employee.repository.EmployeeRepo;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepo emprepo;
	
	public List<Employee> getAllDetails(){
		return emprepo.findAll();
	}
	
	public Employee saveDetails(Employee e) {
		return emprepo.save(e);
	}
	
	public Employee updateDetails(Employee e) {
		return emprepo.save(e);
	}
	
	public void deleteDetails(int empId) {
		emprepo.deleteById(empId);
	}
}
