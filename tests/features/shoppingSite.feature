Feature: A User logs in to the Magento shopping site to buy Mens Jackets and Pants

        Background: Login to the Magento shopping portal and navigate to the dashboard
            Given The customer logs in to the Magento shopping site

        Scenario Outline: Complete an order for the first pair of pants and checkout to cart
            Given The customer navigate to the Mens page and choose first jacket <product1> with <product1Size> and <product1Color>
             When The customer navigate to the Mens page and choose second jacket <product2> with <product2Size> and <product2Color>
             When The customer navigate to the Mens page and choose a pair of pants <product3> with <product3Size> and <product3Color>
             When The customer navigate to the shipping page
             Then The customer should verify the products <product1>, <product2> and <product3> with prices <product1Price>, <product2Price> and <product3Price> respectively then complete the order
        Examples:
                  | product1              | product1Size | product1Color | product1Price | product2                    | product2Size | product2Color | product2Price | product3            | product3Size | product3Color | product3Price |
                  | "Montana Wind Jacket" | "L"          | "Red"         | "$49.00"      | "Proteus Fitness Jackshirt" | "M"          | "Orange"      | "$45.00"      | "Cronus Yoga Pant " | "36"         | "Red"         | "$38.40"      |
