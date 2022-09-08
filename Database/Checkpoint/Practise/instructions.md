# Practise for database checkpoint

* Create tables for the examples below and add primary keys and foreign keys. Add some test data. You can create tables with GUI or writing SQL (it's your choice)

* Write SQL-statements (select ... join) that extract info from the tables

All the examples below will just need two or three tables each.

Extra exercise: decide which column that should allow NULL

## Person - Passport

A person has a name. 

A passport belongs to a country (country doesn't need to be a separate table).

One person can have many passports. 

Some people don't have any passports.

A passport always belongs to someone.

## Student - Course

Students have names. 

Courses have titles.

A student can attend many courses. 

Some students don't attend to any course

A course can have some students.

Some course are empty of students

## ParkingSlot - Customer

A parking slot has a GPS coordinate (long, lat)

A parking slot can be rented by a customer. 

Some parking slots aren't rented by anyone.

Some customers have rented many parking lots.

