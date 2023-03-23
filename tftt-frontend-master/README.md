# Tip for the Trip: A Company That Delivers Quality Service and Products

![salmon](https://user-images.githubusercontent.com/80246961/205195117-03d2da30-4e07-4f3c-b49a-05dafd7a1ce1.jpg)

## Contributed by Binary Beef Boys: Logan Arens, Jared Benitez, Alex Tran, Eduardo Guzman, Eric Truong, Josh Dare, Marco Toro, Matthew Petruescu

## Synopsis
Our client, a local entrepreneur named Jesse Baker, is in need of an online platform to help him reach customers and market new products for his ready-to-eat Tri-Tip business. To this end, we are developing an e-commerce web application that will allow potential customers to view products, place orders, read about the history of the business, and learn what makes this particular cut of meat so great. To ensure Jesse can continue to grow his business and benefit from our application long after we have finished it, we are also adding admin functionality to the website. This will allow Jesse to add and adjust product listings and give him access to an owner's panel with tabulated metrics on product sales and an interactive graphing tool to help visualize the popularity of specific products.

## Technologies
We are building our application with Django (Python API framework), React.js (Front End framework), Next.js (React framework), Tailwind CSS (CSS Framework), and SQLite3 (an SQL database for Django). Our team opted to use GitHub for version control and has utilized Jira for task tracking throughout both semesters. We plan to deploy the application to Heroku once it has been completed in Spring 2022.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
This application uses [TailwindCSS](https://tailwindcss.com') to assist with component styling

## Initial Setup
First install the latest stable version of node,
to view which version of node your machine currently has:
```
node --version
```

Install dependencies for this app:
```
npm install
```

## Getting Started

First, run the development server:

```
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

You can add pages by adding a file to the pages directory. Example: about.js is the component that will be rendered when /about is in the url.

## Testing - Cypress
- [Cypress Documentation](https://nextjs.org/docs/testing) - Learn about integration testing with Cypress and NextJS.

## Deployment
Deployed on Heroku
- 2 Dyno instances - Hobby tier - 512MB RAM
- 1 PostgreSQL instance - Hobby tier - 10M rows

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


To learn more about TailwindCSS, take a look at the following resources:

- [TailwindCSS CheatSheet]('https://nerdcave.com/tailwind-cheat-sheet') - learn about Tailwind Classes and Documentation for each Class
- [TailwindCSS Documentation]('https://tailwindcss.com') - Tailwind Documentation
