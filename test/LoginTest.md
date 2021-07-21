## Login testing
* Login:<br>
  * Input:<br>
    email : aa@aa<br>
    password : 123<br>
  * Expected: User logged-in and redirected to home page
  * Result: <br>
    ![Screenshot from 2021-07-03 10-35-56](https://user-images.githubusercontent.com/51420150/124356052-87140b00-dbea-11eb-87cc-be5199df8b63.png)
* Login using email without account
  * Input:<br>
    email : aa@bb<br>
    password : 123<br>
  * Expected: Error: Account doesn't exist
  * Result: <br>
    ![Screenshot from 2021-07-03 11-07-10](https://user-images.githubusercontent.com/51420150/124356866-dd834880-dbee-11eb-855a-3032d39c2494.png)
* Login using wrong credentials
  * Input:<br>
    email : aa@aa<br>
    password : 123456<br>
  * Expected: Error: Wrong password
  * Result: <br>
    ![Screenshot from 2021-07-03 11-09-39](https://user-images.githubusercontent.com/51420150/124356925-3a7efe80-dbef-11eb-8816-0d51dae20112.png)
