## Admin testing
* Login:<br>
  * Input:<br>
    email: admin@admin<br>
    password: admin<br>
  * Expected: Redirect to home page with option to access Admin page in Header bar
  * Result: <br>
    ![Screenshot from 2021-07-03 18-27-55](https://user-images.githubusercontent.com/51420150/124367310-6f5d7680-dc2c-11eb-8d0c-a6ec4ac41b30.png)

* Getting users in admin page
  * Input:<br>
    Clicking on the Users square
  * Expected: Table with information about every user
  * Result: <br>
    ![Screenshot from 2021-07-03 18-29-54](https://user-images.githubusercontent.com/51420150/124367346-bb102000-dc2c-11eb-98f5-9439200abd10.png)
    
* Getting products in admin page
  * Input:<br>
    Clicking on the Products square
  * Expected: Table with information about every product
  * Result: <br>
    ![Screenshot from 2021-07-03 18-33-21](https://user-images.githubusercontent.com/51420150/124367405-3f62a300-dc2d-11eb-9f6d-5135350d5aad.png)
    
* Getting admins in admin page
  * Input:<br>
    Clicking on the Amins square
  * Expected: Table with information about every Admin
  * Result: <br>
    ![Screenshot from 2021-07-03 18-34-28](https://user-images.githubusercontent.com/51420150/124367415-5acdae00-dc2d-11eb-894b-b19c9205185a.png)

* Getting sales in admin page
  * Input:<br>
    Clicking on the Sales square
  * Expected: Table with information about every sale
  * Result: <br>
    ![Screenshot from 2021-07-03 18-39-10](https://user-images.githubusercontent.com/51420150/124367504-00811d00-dc2e-11eb-9104-ce5bff073c60.png)
 
* Adding a user
  * Input:<br>
    ![Screenshot from 2021-07-03 18-55-09](https://user-images.githubusercontent.com/51420150/124367721-40490400-dc30-11eb-8163-2ad1ecd22aae.png)
  * Expected: New user appear on Users table
  * Result: <br>
    ![Screenshot from 2021-07-03 18-55-43](https://user-images.githubusercontent.com/51420150/124367740-5a82e200-dc30-11eb-88d1-0f356c3e5a18.png)
    
* Removing a user
  * Input:<br>
    Clicking on the X in the same row as bb@bb
  * Expected: bb@bb is removed from table
  * Result: <br>
    ![Screenshot from 2021-07-03 18-29-54](https://user-images.githubusercontent.com/51420150/124367346-bb102000-dc2c-11eb-98f5-9439200abd10.png)
* Adding a product
  * Input:<br>
    ![image](https://user-images.githubusercontent.com/51420150/126919495-f703add4-f63f-4f8b-9ece-95829aa10fa9.png)
  * Expected: Product is added to products table
  * Result: <br>
    ![image](https://user-images.githubusercontent.com/51420150/126919462-c5a73a58-d936-44ba-ae7d-edaac38583d5.png)


* Adding a product without inserting a image
  * Input:<br>
    ![image](https://user-images.githubusercontent.com/51420150/126919311-db7633fe-7eae-4293-bcf6-8e0670f8f1ff.png)
  * Expected: Error message is displayed
  * Result: <br>
    ![image](https://user-images.githubusercontent.com/51420150/126918479-fcf3664b-4d6e-4b77-ab80-19df498c0753.png)

* Removing a product
  * Input:<br>
    Clicking on the X in the same row as banana
  * Expected: Banana is removed from table
  * Result: <br>
    ![Screenshot from 2021-07-03 19-00-04](https://user-images.githubusercontent.com/51420150/124367809-f4e32580-dc30-11eb-937d-015912ba0ae3.png)
    
* Editing a product
  * Input:<br>
    Clicking on the edit in the same row as M&M
  * Expected: Product form with the current information already filled. When saved, the information should be updated in products table
  * Result: <br>
    ![Screenshot from 2021-07-03 19-06-34](https://user-images.githubusercontent.com/51420150/124367898-d6c9f500-dc31-11eb-9e2e-17b0a98cee0b.png)
    ![Screenshot from 2021-07-03 19-07-44](https://user-images.githubusercontent.com/51420150/124367913-0547d000-dc32-11eb-91b0-66a96f2d4483.png)
    
* Adding an admin
  * Input:<br>
    Clicking on the lock in the same row as aa@aa
  * Expected: User aa@a will be added to Admins table and icon will change to unlocked
  * Result: <br>
    ![Screenshot from 2021-07-03 19-10-34](https://user-images.githubusercontent.com/51420150/124367941-61aaef80-dc32-11eb-9f1a-c4b2e5133a5a.png)
    ![Screenshot from 2021-07-03 19-10-51](https://user-images.githubusercontent.com/51420150/124367949-6c658480-dc32-11eb-9891-7070235cfc22.png)
   
* Removing an admin
  * Input:<br>
    Clicking on the unlock in the same row as aa@aa
  * Expected: User aa@a will be removed to Admins table and icon will change to locked
  * Result: <br>
    ![Screenshot from 2021-07-03 19-13-15](https://user-images.githubusercontent.com/51420150/124367980-c2d2c300-dc32-11eb-8ec0-df638eaf775a.png)
    ![Screenshot from 2021-07-03 19-13-36](https://user-images.githubusercontent.com/51420150/124367984-d1b97580-dc32-11eb-86ba-e0ef72a9799b.png)

* Accessing Contact Us messages
  * Input:<br>
    Clicking on message button
  * Expected: Load every message sent in contact us page
  * Result: <br>
    ![image](https://user-images.githubusercontent.com/51420150/126917889-571c153e-20fb-4c76-951a-49e6274cfeb2.png)
