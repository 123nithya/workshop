package com.nithya.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nithya.employee.entity.Employee;

public interface EmployeeRepo extends JpaRepository <Employee,Integer> {

}
