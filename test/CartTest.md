## Cart testing
* Insert product:<br>
  * Input:<br>
    Adding 3 M&M <br>
    ![Screenshot from 2021-07-03 11-17-44](https://user-images.githubusercontent.com/51420150/124357150-60f16980-dbf0-11eb-94f0-07ff7da31276.png)

  * Expected: Cart will contain 3 M&M
  * Result: <br>
    ![Screenshot from 2021-07-03 11-18-49](https://user-images.githubusercontent.com/51420150/124357168-7b2b4780-dbf0-11eb-8557-3cb515f40535.png)

* Removing product from cart
  * Input:<br>
    Removing M&M by clicking on the X
  * Expected: Cart empty
  * Result: <br>
   ![Screenshot from 2021-07-03 11-20-50](https://user-images.githubusercontent.com/51420150/124357222-c2b1d380-dbf0-11eb-821c-ca27f2b3015e.png)

* Finishing purchase without login
  * Input:<br>
    Cart with 3 M&M
  * Expected: Redirct to login page
  * Result: <br>
    ![Screenshot from 2021-07-03 11-25-07](https://user-images.githubusercontent.com/51420150/124357345-5c798080-dbf1-11eb-8b49-6078e5bb00ef.png)
    
* Finishing purchase with login
  * Input:<br>
    Cart with 3 M&M<br>
    Logged in with aa@aa
  * Expected: Redirct to payment page
  * Result: <br>
    ![Screenshot from 2021-07-03 11-26-30](https://user-images.githubusercontent.com/51420150/124357385-8fbc0f80-dbf1-11eb-962d-ce97f942b2db.png)

* Finishing purchase with cart empty
  * Input:<br>
    Empty cart
  * Expected: Error: empty cart
  * Result: <br>
    ![Screenshot from 2021-07-03 11-27-29](https://user-images.githubusercontent.com/51420150/124357404-b24e2880-dbf1-11eb-808b-28e90fec5695.png)


