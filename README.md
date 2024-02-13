# Documentation


## Introduction


To integrate your system with HIS, you have to use HL7-FHIR standard. Here with this API interface, you can create and check your schema to see if it fits the standards or not.
HL7 organization gives us free download documentations. One of these documentations is the JSON schema file that you can use and update your framework settings to use this schema whenever you create another FHIR JSON file schema to make sure that your FHIR JSON file schema fits the HL7-FHIR standards.

Forge is a useful application that helps you create your structure definition schema and select the cardinality for your resource profile. Forge free plan is only allowed for 'non-commercial use', meaning personal or educational use only. Once your structure definition is ready, you can use HAPI online server to push your file to http://hapi.fhir.org/baseR4/StructureDefinition. 

The HAPI FHIR Plain Server module can be used to create a FHIR server endpoint against an arbitrary data source, which could be a database of your own design, an existing clinical system, a set of files, or anything else you come up with.
HAPI also provides a persistence module that can be used to provide a complete RESTful server implementation, backed by a database of your choosing. This module uses the JPA 2.0 API to store data in a database without depending on any specific database technology.

## Front-End 
By using ReactJS a simple user interface was created with two pages; a page for patient registration and another page to search for the patient information by name. 

## Back-End
NodeJS is a great open-source server-side programming language. Node and React are a deadly combination to build high-tech web applications. By using NodeJS, you can connect to the online HAPI server by pushing or getting the information you need in JSON. Besides, update your structure definition with the entry data you get from the user. So, your file metadata fits the standards.

## Block Diagram

![Block diagram](https://github.com/Demiana-Medhat-Naeem/HL7-FHIR_API-interface/assets/156219893/7b74db2b-58b5-4733-9355-467bca93ad0f)
# Installation
## Clone the repository.
`https://github.com/Demiana-Medhat-Naeem/HL7-FHIR_API-interface.git`
## Install Packages
npm install
## More information
[Online server link](https://hapi.fhir.org/baseR4)

[FORGE](https://simplifier.net/forge)
