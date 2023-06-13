CREATE TABLE Hospitals (
  Hospital_ID 	  INTEGER,
  Hospital_name 	TEXT,
  Address 		    TEXT,
  City 			      TEXT,
  County 			    TEXT,
  Postcode 		    TEXT,
  ContactNo 		  INTEGER,
  PRIMARY KEY (Hospital_ID)
);

CREATE TABLE Departments (
  Department_ID 	INTEGER,
  Hospital_ID 	  INTEGER,
  Dept_name 		  TEXT,
  Dept_location 	TEXT,
  PRIMARY KEY (Department_ID),
  FOREIGN KEY (Hospital_ID) REFERENCES Hospitals(Hospital_ID)
);

CREATE TABLE Doctors (
  Doc_ID 			  INTEGER,
  name 			    TEXT,
  DepartmentID 	INTEGER,
  PRIMARY KEY (Doc_ID),
  FOREIGN KEY (DepartmentID) REFERENCES Departments(Department_ID)
);

CREATE TABLE Nurses (
  Nurse_ID 		  INTEGER,
  name 			    TEXT,
  DepartmentID 	INTEGER,
  PRIMARY KEY (Nurse_ID),
  FOREIGN KEY (DepartmentID) REFERENCES Departments(Department_ID)
);

CREATE TABLE Patients (
  Patient_ID 	  INTEGER,
  Name 			    TEXT,
  NHS_no 			  INTEGER,
  Address 		  TEXT,
  Postcode 		  TEXT,
  DOB 			    INTEGER,
  Gender 			  TEXT,
  Phone_no 		  INTEGER,
  Department_ID INTEGER,
  Doc_ID 			  INTEGER,
  Nurse_ID 		  INTEGER,
  PRIMARY KEY (Patient_ID),
  FOREIGN KEY (Doc_ID) 		    REFERENCES Doctors(Doc_ID),
  FOREIGN KEY (Nurse_ID) 		  REFERENCES Nurses(Nurse_ID),
  FOREIGN KEY (Department_ID) REFERENCES Departments(Department_ID)
);