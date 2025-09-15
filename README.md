# dairy-management-system
roles - admin,emp,user

when emp login=>
emp can store the details of milk collected from the customer

 Admin Role (Full Control)
Responsibilities:

User Management

Register/view/update/delete employees and customers.

Assign roles.

Milk Record Oversight

View all milk entries (across customers).

Generate reports (daily/monthly/total collection).

Billing Management

Set milk rates (cow, buffalo).

Approve bills and generate invoices.

Plan Management (if using customer plans)

Create/edit customer subscription plans.

Delivery Management

Assign delivery tasks or employees.

Dashboard Access

View key metrics: total milk, total revenue, top customers, etc.

👷 Employee Role (Limited Operational Access)
Responsibilities:

Milk Collection Entry

Select customer and record milk quantity, type, fat %, etc.

Only allowed to add (maybe not delete/edit) entries.

Customer Interaction

Help onboard new customers (optional).

View Assigned Tasks

Example: delivery routes or collection shifts.

Inventory Input (Optional)

Record if anything is used or needed (e.g., cans, packaging).



{
  "custID":"1",
  "quantity":"2",
  "fat":"9",
  "rate":"100",
  "date":"2025-07-29",
  "empID":"123"
}

{
  "custID":"1",
  "name":"sds",
  "email":"a323@gmail.com",
  "password":"1223123",
  "role":"customer",
  "phone_no":"3424234324",
  "address":"kagal"
}

{
  "custID":"C1",
  "quantity":"3",
  "fat":"3",
  "rate":"300"
}