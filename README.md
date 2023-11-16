[![CI/CD with GitHub Actions](https://github.com/ieecois/shoepee/actions/workflows/CI-CD-BE.yml/badge.svg)](https://github.com/ieecois/shoepee/actions/workflows/CI-CD-BE.yml)
[![Website](https://img.shields.io/static/v1?label=Website&message=Shoepee&color=blue)](https://shoepee.vercel.app/)
[![Website](https://img.shields.io/static/v1?label=Facebook&message=Shoepee&color=yellow)](https://www.facebook.com/shoepeefpt)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.asciidoctor/asciidoctor-maven-plugin/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.asciidoctor/asciidoctor-maven-plugin)
[![License](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://github.com/ieecois/shoepee/blob/main/LICENSE)


# Shoe Stylise

![Shoe Stylise Logo](link_to_logo.png)

**Shoe Stylise** is an innovative platform that offers a unique and personalized shoe design service. Whether you want a custom shoe design created by one of our in-house artists or have a design of your own in mind, we've got you covered. With Shoe Stylise, you can unleash your creativity, purchase custom-designed shoes, and enjoy a fashionable experience like never before.

## Table of Contents

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Shoe Stylise is a full-stack web application built using cutting-edge technologies, designed to provide users with the ability to customize and purchase their dream shoes. The platform offers two main options for creating custom shoe designs:

1. **User Upload**: Users can upload their own shoe design files. Whether it's a sketch, a digital design, or a photo, Shoe Stylise makes it easy for users to bring their unique ideas to life.

2. **Artist Creations**: Our talented in-house artists are here to help! Users can collaborate with our artists to create a one-of-a-kind shoe design that matches their style and personality.

## Key Features

- **User Authentication**: Secure user registration and login functionality.
- **Shoe Customization**: An intuitive interface for designing and customizing shoes.
- **User Upload**: Option for users to upload their own shoe design files.
- **Artist Collaboration**: Users can collaborate with our artists to create unique shoe designs.
- **Shopping Cart**: Easy-to-use shopping cart for adding and managing selected shoe designs.
- **Payment Processing**: Secure payment processing for purchasing custom shoes.
- **User Profiles**: User profiles with order history and design preferences.
- **Admin Dashboard**: Admin panel for managing users, artists, and orders.
- **Responsive Design**: Fully responsive user interface for a seamless experience on various devices.
- **RESTful API**: Built with Spring Boot to handle backend logic.
- **Database**: MySQL database used for data storage, managed with Prisma.

## Technologies Used

- **Frontend**:
  - React
  - TypeScript
  - Next.js 13
  - Tailwind CSS

- **Backend**:
  - Spring Boot
  - RESTful API
  - MySQL
  - Prisma

## Getting Started

Follow these steps to set up the Shoe Stylise project locally:

1. **Clone the Repository**: Clone this repository to your local machine using `git clone`.

2. **Frontend Setup**:
   - Navigate to the `frontend` directory.
   - Run `npm install` to install frontend dependencies.
   - Run `npm run dev` to start the development server.

3. **Backend Setup**:
   - Navigate to the `backend` directory.
   - Configure your MySQL database settings in `application.properties`.
   - Run the Spring Boot application.

4. **Database Setup**:
   - Create the necessary database tables using Prisma. Run `npx prisma migrate dev` in the `backend` directory.

5. **Access the Application**: Open your web browser and access the application at `http://localhost:3000`.

## Project Structure

The project is organized as follows:

- `frontend/`: Contains the React frontend application.
- `backend/`: Contains the Spring Boot backend application.
- `docs/`: Documentation and project-related files.
- `screenshots/`: Screenshots and images related to the project.

## Usage

1. **User Registration and Login**: Create an account or log in to your existing account.
2. **Design Your Shoe**:
   - Choose between "User Upload" or "Artist Creations."
   - Customize your shoe design using the intuitive design tool.
   - Collaborate with our artists if you opt for "Artist Creations."
3. **Add to Cart**: Once you are satisfied with your shoe design, add it to your shopping cart.
4. **Checkout and Payment**: Review your order, proceed to checkout, and make a secure payment.
5. **Order Tracking**: Track your order status in your user profile.
6. **Enjoy Your Custom Shoes**: Receive your unique custom-designed shoes and enjoy wearing them!

## Contributing

We welcome contributions from the community. To contribute to the Shoe Stylise project, please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for your interest in the Shoe Stylise project. We hope you enjoy using our platform to create and purchase custom-designed shoes. If you have any questions or need assistance, feel free to contact us.

For detailed technical documentation, please refer to the `docs/` directory.

Happy shoe designing!
