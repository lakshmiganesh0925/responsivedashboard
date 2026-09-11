# Testing

**Testing Tools**
- Protractor (BDD)
- Spec flow 

Repo: 
[Training-Episerver-BDD](https://dev.azure.com/euromonitor/Software%20Engineering%20Team%20Training/_git/Training-Episerver-BDD)

# Test Pyramid

![image.png](/.attachments/image-04c9bae3-71aa-48d5-8eb2-0004c9ebe52a.png)

### Having automated tests is a great way to ensure that application code does what its authors intend it to do
# Unit tests 

A unit test is a test that exercises individual software components or methods, also known as "unit of work". Unit tests should only test code within the developer's control. They do not test infrastructure concerns. Infrastructure concerns include interacting with databases, file systems, and network resources.
For more information on creating unit tests, see Testing tools.
- What Is a Mock?

The fake mock objects enable you to copy the exact behaviour of classes and interfaces, allowing the code to interact as if they are real objects. This differentiates the code you are testing, while letting you know that it functions on its own and no other code can harm it.

- Who Should Create The Unit Test Then?

unit testing is considered part of the programming phase, with the person that wrote the program...unit testing
- Test Driven Development

Test Driven Development, or TDD, is a code design technique where the programmer writes a test before any production code, and then writes the code that will make that test pass. The idea is that with a tiny bit of assurance from that initial test, the programmer can feel free to refactor and refactor some more to get the cleanest code they know how to write. The idea is simple, but like most simple things, the execution is hard. TDD requires a completely different mind set from what most people are used to and the tenacity to deal with a learning curve that may slow you down at first.

# Integration tests
An integration test differs from a unit test in that it exercises two or more software components' ability to function together, also known as their "integration." These tests operate on a broader spectrum of the system under test, whereas unit tests focus on individual components. Often, integration tests do include infrastructure concerns.
# E2E test case:
- End to end testing (E2E testing) refers to a software testing method that involves testing an application’s workflow from beginning to end. This method basically aims to replicate real user scenarios so that the system can be validated for integration and data integrity.
- Essentially, the test goes through every operation the application can perform to test how the application communicates with hardware, network connectivity, external dependencies, databases, and other applications. Usually, E2E testing is executed after functional and system testing is complete.
