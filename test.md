# Tests Plan and results

## Register testing

* Inserting user:<br>
  * Input : <br>
  name = aaaa<br>
  email = aa@aa<br>
  password = 123<br>
  address = rua aaa<br>
  phone = 9999999<br>
  * Expected: User redirected to home page, showing in the header that he is logged-in <br>
  * Result: User is created logged in
    ![Screenshot from 2021-07-03 10-35-56](https://user-images.githubusercontent.com/51420150/124356052-87140b00-dbea-11eb-87cc-be5199df8b63.png)
* Inserting user with email already in use
  * Input<br>
    email: aa@aa
  * Expected: Error: can't create account because email is already in use
  * Result:<br>
    ![Screenshot from 2021-07-03 10-48-39](https://user-images.githubusercontent.com/51420150/124356422-51702180-dbec-11eb-98d1-d1f25197a01c.png)
* If some information is blank
  * Expected: must fill this space
  * Result:<br>
  ![Screenshot from 2021-07-03 10-51-03](https://user-images.githubusercontent.com/51420150/124356486-98f6ad80-dbec-11eb-811b-88bfbb617132.png)
* Confirm password doesn't match password
  * Input:<br>
    password: 123<br>
    confirm password: 12<br>
  * Expected: Error: password doen't match
  * Result:<br>
  ![Screenshot from 2021-07-03 10-53-52](https://user-images.githubusercontent.com/51420150/124356553-fdb20800-dbec-11eb-97db-680de5e78a42.png)

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
