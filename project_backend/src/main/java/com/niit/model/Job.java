package com.niit.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="userjob")
public class Job {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
private int id;
private String Jobtitle;
private String Jobdescription;
private String Skillsrequired;
private String location;
private String salary;
private String Companyname;
private Date Postedon;
private String Yearsofexp;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getJobtitle() {
	return Jobtitle;
}
public void setJobtitle(String jobtitle) {
	Jobtitle = jobtitle;
}
public String getJobdescription() {
	return Jobdescription;
}
public void setJobdescription(String jobdescription) {
	Jobdescription = jobdescription;
}
public String getSkillsrequired() {
	return Skillsrequired;
}
public void setSkillsrequired(String skillsrequired) {
	Skillsrequired = skillsrequired;
}
public String getLocation() {
	return location;
}
public void setLocation(String location) {
	this.location = location;
}
public String getSalary() {
	return salary;
}
public void setSalary(String salary) {
	this.salary = salary;
}
public String getCompanyname() {
	return Companyname;
}
public void setCompanyname(String companyname) {
	Companyname = companyname;
}
public Date getPostedon() {
	return Postedon;
}
public void setPostedon(Date postedon) {
	Postedon = postedon;
}
public String getYearsofexp() {
	return Yearsofexp;
}
public void setYearsofexp(String yearsofexp) {
	Yearsofexp = yearsofexp;
}

}
