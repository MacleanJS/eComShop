# Hype Shoes - ECommerce Site

## Demo & Snippets
### Home Page - Landing Section
![image](https://github.com/MacleanJS/eComShop/assets/102455846/46eb1f37-f941-48d9-8981-bb116bee7dcf)
### Home Page - Reviews + Carousel Section
![image](https://github.com/MacleanJS/eComShop/assets/102455846/2a411f0c-0a94-4d74-9c83-175aba50daf3)
### Home Page - Product Grid Section
![image](https://github.com/MacleanJS/eComShop/assets/102455846/9a4b6832-1ec0-4ae6-80ab-6de932b1c8e6)
### Individual Product Page
![image](https://github.com/MacleanJS/eComShop/assets/102455846/e479a230-3ee8-4978-9685-26d19833ae2e)
### Cart Page
![image](https://github.com/MacleanJS/eComShop/assets/102455846/910fbc0c-4190-4606-843a-f8bed3b687aa)


---

## Requirements / Purpose

### Purpose of project: 
- To create a functional ecommerce store that links to a Firestore database. 
### Stack used: 
- React, SCSS, Javascript, Firestore. 

---

## Build Steps

-   How to run project:
 1. CD into project parent file (eComShop). 
 2. Run command in terminal:
  ``npm run dev``
 3. Open the local host in your browser.
 4. Modify URL to include "/shoes" at the end. e.g. ``http://localhost:5173/shoes/``

---

## Design Goals / Approach

-   My design for this website was to make it look like a high-end 'hype' store by using simplistic features. 
-   Initially I designed the website on Figma, and then built my front end SCSS based on this. 
-   Figma was beneficially in creating an initial design, however I changed certain features in order to make the website function better. 

---

## Features

-   The core feature of this project was using Firestore's database to handle cart features in real time.
-   This meant that the user could add and delete products, and have these changes rendered instantly. 
-   The home page features a functional product carousel, which has automatic and arrow control functionality. 

---

## Known issues

-   The firestore 'trial' has expired meaning the cart is unaccesible. 
-   In the future I will need to swap to another trial, or pay for access. 

---

## Future Goals

-   Separate the firestore services into multiple different files, instead of them all being in one. 
-   Add Qty options to product page, also include avaiable quantity using React Context. 
-   General code tidy up/refactoring: Remove functions from components, and pass them down from containers instead. 

---

## What did you struggle with?

- One of the struggles I faced was modifying the styling for the product carousel.
- The carousel was a library named "react-responsive-carousel", which had very limited documentation. 
- I was able to achieve a suitable result by trying lots of methods shown on various forums until I learnt how to interact with the library. Once I did this, I was able to start changing specific attributes to achieve a desired outcome. 

---

## Change logs

---

