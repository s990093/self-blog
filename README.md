# self-blog

# Resume Showcase Project

## Overview

This project is a comprehensive personal resume web application, built with a **Next.js** frontend and a **Django** backend. The application covers the following key features:

1. **Self-Introduction**: Display detailed personal information, including background, professional skills, and contact details.
2. **Project Experience**: Share team projects and personal endeavors, describing your work, challenges, and key learnings.
3. **Personal Interests**: Showcase your hobbies and interests outside of work, providing a more holistic view of yourself.
4. **Awards and Achievements**: Highlight awards and accomplishments, demonstrating your professional expertise and success.

## Technology Stack

### Frontend: Next.js

- **Next.js**: A React framework that provides server-side rendering and static site generation, ensuring better performance and SEO. It allows for easy integration of dynamic content while maintaining a fast, responsive user experience.
- **React**: The JavaScript library used within Next.js for building user interfaces. React's component-based architecture allows for efficient development and maintenance.
- **Tailwind CSS** (optional): A utility-first CSS framework that enables quick and consistent styling of the application.

### Backend: Django

- **Django**: A high-level Python web framework that encourages rapid development and clean, pragmatic design. Django handles the backend logic, database interactions, and serves as the API for the frontend.
- **Django REST Framework (DRF)**: A powerful and flexible toolkit for building Web APIs in Django, used to create RESTful endpoints for the frontend to interact with.
- **PostgreSQL/MySQL** (or any preferred database): A relational database used to store user data, project details, and other content.

### Deployment and DevOps

- **Docker**: Containerization of the frontend and backend services ensures consistent environments across development and production.
- **Nginx**: Used as a reverse proxy and to serve static files for the Next.js application.
- **Gunicorn**: WSGI HTTP Server for deploying Django applications.
- **Docker Compose**: Simplifies the management of multi-container Docker applications.

## Features

### 1. Self-Introduction

- Personal background
- Professional skills
- Contact information

### 2. Project Experience

- Team project involvement
- Personal project insights

### 3. Personal Interests

- Hobbies and passions
- Non-work-related achievements

### 4. Awards and Achievements

- Professional awards
- Personal accomplishments

## Setup Instructions

### Prerequisites

- Node.js (>= 14.x)
- Python (>= 3.8)
- Docker and Docker Compose

### Installation and Development

1. **Clone** this repository:

   ```bash
   git clone https://github.com/s990093/self-blog.git
   ```

2. **Install Node.js and npm**

   - If Node.js and npm are not installed, download and install them from [Node.js official website](https://nodejs.org/).

3. **Set Up Yarn**

   - Install Yarn (if not already installed):
     ```bash
     npm install -g yarn
     ```

4. **Initialize Yarn**

   - Initialize Yarn:
     ```bash
     yarn install
     ```

5. **Start the Development Server**
   - Start the development server:
     ```bash
     yarn dev
     ```
