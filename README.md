# JobConnect 💼 - Job Search & Posting Platform

A full-stack job board application that connects employers with job seekers. Featuring job listings, application management, and job posting capabilities.

## Overview

JobConnect is a MERN stack application designed to streamline the job search and hiring process. Employers can post job opportunities while job seekers can browse and apply for positions that match their skills and interests.

![JobConnect Screenshot]
![joblistings site](https://github.com/user-attachments/assets/2f8ce15d-2d4d-4d05-920b-f13f2780dae0)

## Features

### For Job Seekers
- Browse all job listings
- Search jobs by title, location, or keywords
- Filter jobs by:
  - Job type (Full-time, Part-time, Contract)
  - Experience level
  - Location
  - Salary range
- View detailed job descriptions
- Easy application process
- Track application status

### For Employers
- Post new job listings
- Manage job postings
- Edit or remove listings
- Track applications received
- Update job status

## Technologies Used

<div style="display: flex; gap: 10px; flex-wrap: wrap;">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</div>

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB database
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/jobconnect.git
cd jobconnect
```

2. Install dependencies for both frontend and backend
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Set up environment variables
```bash
# In server directory, create a .env file
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# In client directory, create a .env file
REACT_APP_API_URL=http://localhost:5000
```

4. Start the development servers
```bash
# Start server (from server directory)
npm run dev

# Start client (from client directory)
npm start
```

## Project Structure

```
jobconnect/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Jobs/
│   │   │   ├── Employer/
│   │   │   ├── Auth/
│   │   │   └── Common/
│   │   ├── pages/
│   │   └── utils/
│   └── public/
└── server/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middleware/
    └── config/
```

## API Endpoints

```
# Authentication
POST   /api/auth/signup     - Register new user
POST   /api/auth/signin     - Login user

# Jobs
GET    /api/jobs            - Get all jobs
GET    /api/jobs/:id        - Get specific job
POST   /api/jobs            - Create new job listing
PATCH  /api/jobs/:id        - Update job listing
DELETE /api/jobs/:id        - Delete job listing

# Applications
POST   /api/applications    - Submit job application
GET    /api/applications    - Get user's applications
PATCH  /api/applications/:id - Update application status
```

## Key Features in Detail

### Job Listings
- Comprehensive job search functionality
- Advanced filtering system
- Detailed job descriptions
- Application tracking
- Bookmark favorite jobs

### Employer Dashboard
- Job posting management
- Applicant tracking
- Application status updates
- Company profile management

### User Authentication
- Secure registration and login
- Role-based access control
- Protected routes
- JWT authentication

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Future Improvements

- Email notifications for applications and updates
- Resume parser and ATS integration
- Advanced search with AI matching
- Company reviews and ratings
- Salary insights and comparisons
- Mobile app version
