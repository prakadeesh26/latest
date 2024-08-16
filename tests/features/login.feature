Feature: Magento Login

        Background: Login to the portal and navigate to the dashboard
            Given I am on the Magento login page
             When I enter the username "australia@gmail.com"
              And I enter the password "Australia@123"
              And I click the login button
             Then I should be redirected to the dashboard

        Scenario: Complete an order for the first pair of pants and checkout to cart
            Given I navigate to the Men -> Tops -> Jackets section
        #     When I provide the shipping address and complete the order
        #     Then I should see a confirmation message
