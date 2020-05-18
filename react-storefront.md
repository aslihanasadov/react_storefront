## React Storefront

As part of a small group you will be building out a storefront using Express and React.

Part of the challenge is to determine what components you will need for a backend. Use your Node Group Projects as a reference for what the backend will need in order to function properly.


```no-highlight
As a shopper
I want to see a list of product categories
So that I can easily shop for what I need
```

Acceptance Criteria:
- navigating to `/` redirects to `/store`
- visiting `/store` shows the company name in a banner at the top, and a list of all available product categories
- each product category has a name and photo
  - clicking on either takes me to a list of items for that specific product category


```no-highlight
As a shopper
I want to see hot items on the home page
So that I can get the best deals
```

Acceptance Criteria:
- When I visit `/store` there is a list of "hot items" at the top of the page
  - Items are a random record from each type of product
  - Items are arrayed in a horizontal list
- Each item in the list has a name, a product category, and a picture
  - clicking on the name or picture takes me to that item's show page
  - clicking on the product category takes me to the index for that product category


```no-highlight
As a shopper
I want to see a list of items of a particular category
So that I can buy the item I like best
```

Acceptance Criteria:
- navigating to `/store/{product_category_name}` takes me to an index of all products of the given type
- each product displays a name, price, picture, and brief description
  - clicking on the name or picture takes me to the item show page


```no-highlight
As a shopper
I want to see more details about a specific item
So that I can make my purchase decision
```

Acceptance Criteria:
- navigating to `/store/{product_category_name/{id}}` takes me to the show page for the individual item
- The show page displays a large image of the item centered at the top of the page with the name of the product in a header above it
- There is a button to add the item to the cart which adds the item to a shopping cart


```no-highlight
As a shopper
I want to view my cart
So that I can edit or complete my purchase
```

Acceptance Criteria:

- navigating to `/store/cart` displays any items I have added to the cart
- there is a button next to each item to remove the item from the cart
- clicking the button to complete your purchase displays to a form to enter your shipping details
- upon submission of the form the user is informed that their order has been submitted
- upon submission the user is redirected to `/store`


```no-highlight
As a shopper
I want to Search for items I need
So that I can shop quickly
```

Acceptance Criteria:
- Each page has a search bar at the top of the page
  - Search returns matching items and categories
- Searching for an item name shows all items that match the search
- Clicking on a search result brings you to the show page for the item or the index for the product category based on the type of the link clicked


``` no-highlight
As a hoarder
I want to list an item for sale
So that my home is less cluttered
```

Acceptance Criteria:
- Visiting `/store/sell` shows a form to add an item for sale
- Submitting a item requires a valid product type from a dropdown menu of the types the site already supports
- Submitting an item requires at minimum: `name`, `category`, `price`, and `description`
- A non-valid entry displays a message with a list of missing fields and the information the user entered persisted
- A successful submission sends the user to their item's show page

```no-highlight
As a shopper
I want a nav bar
So that I can move around the site easily
```

Acceptance Criteria:
- At the top of every page there is a navigation bar
- The bar contains links to each of the different endpoints
- Clicking a link takes me to the appropriate page
- While navigating the items in the cart persist


```no-highlight
As a shopper
I want to see quantity of each item in stock
So that I can no my limit
```

- Each item has a quantity field set to 10 by default
- When adding an item to a cart there is an option to set quantity
  - Not entering a value defaults the quantity to 0
  - Entering a number higher than the available quantity results in an error message displayed to the user that there are not enough in stock
- When an item is purchased the quantity is reduced by the number sold
- Items that are out of stock are excluded from the "Hot Items" list
- When visiting an item show page for an item with a stock level of 0 the "Add to Cart" button is replaced with a notice that the item is out of stock
- In the cart
  - there are buttons to increase or decrease the quantity for each item
  - there are buttons to complete your purchase or to cancel your purchase


## Non-Core

```no-highlight
As a seller
I want an image carousel for pictures
So that a buyer can see multiple angles of the item
```

Acceptance Criteria:
- The show page displays a large image of the item centered at the top of the page with the name of the product in header above it
  - The is a thumbnail bar below the main image with alternate images of the product
  - clicking an individual thumbnail either replaces the main image, or pops up a modal with the new image


```no-highlight
As a seller
I want to authenticate users
So that I know purchases are legitimate
```

Acceptance Criteria:
- Implement Passport
  - `yarn add passport`
  - Docs available here [passportjs(http://www.passportjs.org/docs/)
    - skip `npm install passport` since we've already added it with Yarn
- Allow users to authorize with at least two providers

```
As a web developer
I want an ORM
To simplify database interaction
```

Acceptance Criteria:
- Implement Sequelize
  - `yarn add sequelize`
  - Docs available here [sequelize docs](https://sequelize.org)
  - Refactor existing models to use the ORM
