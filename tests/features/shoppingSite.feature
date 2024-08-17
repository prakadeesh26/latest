Feature: A User logs in to the Magento shopping site to buy Mens Jackets and Pants

        Background: Login to the Magento shopping portal and navigate to the dashboard
            Given The user logs in to the Magento shopping site

        Scenario: Complete an order for the first pair of pants and checkout to cart
            Given The user navigate to the Mens page and choose first jacket "Montana Wind Jacket" with "L" and "Red"
             When The user navigate to the Mens page and choose second jacket "Proteus Fitness Jackshirt" with "M" and "Orange"
             When The user navigate to the Mens page and choose a pair of pants "Cronus Yoga Pant" with "36" and "Red"
             When The user navigate to the shipping page
             Then The user should verify the products "Montana Wind Jacket", "Proteus Fitness Jackshirt" and "Cronus Yoga Pant" then complete the order
