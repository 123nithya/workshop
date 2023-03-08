package com.nithya.employee.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="employees")
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
//	@Column(name="empId")
	private int empId;
	
//	@Column(name="empName")
	private String empName;
	
//	@Column(name="empDept")
	private String empDept;
	
//	@Column(name="phoneNo")
	private int phoneNo;
	
//	@Column(name="email")
	private String email;
	
//	@Column(name="shift")
	private String shift;
	
//	@Column(name="salary")
	private int salary;
	
	public int getempId() {
		return empId;
	}
	
	public void setempId(int empId) {
		this.empId = empId;
	}
	
	public String getempName() {
		return empName;
	}
	
	public void setempName(String empName) {
		this.empName = empName;
	}
	
	public String getempDept() {
		return empDept;
	}
	
	public void setempDept(String empDept) {
		this.empDept = empDept;
	}
	
	public int getphoneNo() {
		return phoneNo;
	}
	
	public void setphoneNo(int phoneNo) {
		this.phoneNo = phoneNo;
	}
	
	public String getemail() {
		return email;
	}
	
	public void setemail(String email) {
		this.email = email;
	}
	
	public String getshift() {
		return shift;
	}
	
	public void setshift(String shift) {
		this.shift = shift;
	}
	
	public int getsalary() {
		return salary;
	}
	
	public void setsalary(int salary) {
		this.salary = salary;
	}
	
	public Employee(int empId,String empName,String empDept,int phoneNo,String email,String shift, int salary) {
		this.empId = empId;
		this.empName = empName;
		this.empDept = empDept;
		this.phoneNo = phoneNo;
		this.email = email;
		this.shift = shift;
		this.salary = salary;
	}
	
	Employee(){}
}
