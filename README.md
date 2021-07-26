# Web Project
## Members
  Name | NUSP
  ------------ | -------------
  Daniel Suzumura | 11218921
  Lucas Yuiti Oda Yamamoto  | 11219025
  Tyago Teoi		  | 10299660

## Requirements
  * The system must have 2 types of users: Clients and Administrators
      * Administrators are responsible for registering/managing administrators, customers, and products/services provided. The   application already comes with an account admin with       password admin.
      * Customers are users who access the system to buy products/services.
  * The admin record includes, at least: name, id, phone, email.
  * Each customer's record includes, at least: name, id, address, phone, email
  * Product/services records include, at least: name, id, photo, description, price, quantity (in stock), quantity sold.
  * Your store may sell products, services or both (you decide)
  * Selling Products (or services): Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system). The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.
  * Product/Service Management: Administrators can create/update/read/delete (crud) new products and services. For example, they can change the stock quantity.
  * Your functionality: Create a functionality that is specific to your application. It does not have to be something complicated. For instance, if you are selling cars, you may allow users to use an accelerator to hear how each car engine roars up and down.   
  * The system must provide accessibility requirements and provide good usability. The system must be responsive.
  * The customer should be able to search for individual items using a search bar.
  * The customer should be able to write reviews of the products.

## Project Description
  * The project consists of a website for an online grocery store.
  * It's made using single-page application (SPA) style, rewriting the current page dynamically according to the user interactions.
  * For the frontend, we are using the Vue framework.
  * For the backend, we are using Nodejs + Express
  * For the Database, we are using Atlas MongoDB
  * For our specific functionality, we implemented a review functionality, where the customer can give a rating and an opinion about the product.

## Comments About the Code
* To access the administrator page inside the application, simply click in "Login" and type "admin@admin" and "admin" in the username and password respective fields.<br>
Then, click on the button called "ADMIN" that would appear on the topper bar.

## Test Plan
Tests will be made manually by trying to reproduce each funcionality and the results will be documented in one markdown file for each area of the website.
## Test Results
* The tests made by the group were described in the folder called "test" along with each test result.
## Build Procedures

``` bash
# install dependencies
npm install

# compile code
npm run build

# run server
npm start
```
## Problems
* Atlas MongoDB
  * Since we are using a free server for the database, the time to
  get the data from the server can take some time. So the time to
  load some pages can be slow.
  * We made a loading animation because of this issue.
## Comments
After running `npm run build` the compiled code will be in `dist` folder
