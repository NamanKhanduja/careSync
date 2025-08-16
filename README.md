# careSync 

careSync is a full-stack Hospital Management System designed for patients, doctors, and hospital administrators. Its goal is to digitally transform the management of appointments, doctor profiles, patient records, and payments, offering a transparent, efficient, and user-friendly healthcare experience.

---

## TABLE OF CONTENTS

- [System Overview](#system-overview)
- [Architecture & Project Structure](#architecture--project-structure)
- [Main Modules & User Flows](#main-modules--user-flows)
  - [User/Patient Portal](#userpatient-portal)
  - [Doctor Portal](#doctor-portal)
  - [Admin Portal](#admin-portal)
- [API Endpoints (Backend)](#api-endpoints-backend)
  - [User APIs](#user-apis)
  - [Doctor APIs](#doctor-apis)
  - [Admin APIs](#admin-apis)
  - [Payment APIs](#payment-apis)
- [Database Models](#database-models)
- [Technologies Used](#technologies-used)
- [Deployment & Environment](#deployment--environment)
- [Contact & Career](#contact--career)
- [Vision & Differentiators](#vision--differentiators)

---

## SYSTEM OVERVIEW

careSync bridges the gap between patients and healthcare providers by providing:

- **Online appointment scheduling**
- **Doctor search and specialization filtering**
- **Admin and Doctor dashboards (earnings, appointments, patient analytics)**
- **Online payments via Stripe & Razorpay**
- **Role-based access for users, doctors, and admins**
- **Profile management for all roles**

---

## ARCHITECTURE & PROJECT STRUCTURE

```
careSync/
│
├── backend/           # Node.js, Express, MongoDB APIs
│   └── controllers/   # Main logic for user, doctor, admin, and payment
│
├── frontend/          # React-based SPA for patients/users
│   └── src/
│       └── pages/     # Home, About, Contact, Appointments, Search, etc.
│
├── admin/             # React (Vite) dashboards for admins and doctors
│   └── src/
│       └── context/   # Context providers for admin/doctor state & actions
│
├── README.md
└── DOCUMENTATION.md   # (This file)
```

---

## MAIN MODULES & USER FLOWS

### User/Patient Portal

- **Signup/Login:** Secure authentication (JWT, password rules)
- **Browse/Search Doctors:** Filter by specialty, location, availability
- **Book Appointment:** Choose doctor, date, time, payment method
- **View Appointments:** History, upcoming, cancellation
- **Profile Management:** Update info, view history

#### Patient Appointment Flow

1. **Search doctor** by specialty/location
2. **View profile** (fees, experience, address, availability)
3. **Book appointment:** Pick slot, confirm, pay (online/CASH)
4. **View/manage appointments:** Cancel, check status

---

### Doctor Portal

- **Login:** Secure access, JWT
- **Manage Availability:** Toggle status, set fees, update address
- **View Appointments:** List of upcoming/completed; mark complete or cancel
- **Dashboard:** Earnings, analytics (#patients, appointments)
- **Profile Management:** Update professional info

#### Doctor Dashboard Features

- **View stats:** Earnings, appointments, patient count
- **Complete/Cancel Appointments**
- **Update Profile**

---

### Admin Portal

- **Login:** Secure admin panel
- **Manage Doctors:** View/add/edit/remove doctor accounts
- **Manage Appointments:** View/cancel any appointment
- **Analytics Dashboard:** Earnings, appointments, doctor stats
- **Change Doctor Availability:** Admin override

---

## API ENDPOINTS (BACKEND)

### User APIs

- `POST /api/user/register` – Register new user
- `POST /api/user/login` – User login
- `GET /api/user/get-profile` – Get current user profile (JWT)
- `POST /api/user/book-appointment` – Book an appointment
- `GET /api/user/list-appointments` – List all user appointments
- `POST /api/user/cancel-appointment` – Cancel an appointment

### Doctor APIs

- `POST /api/doctor/login` – Doctor login
- `GET /api/doctor/profile` – Get doctor profile
- `POST /api/doctor/update-profile` – Update profile (fees, address, availability)
- `GET /api/doctor/dashboard` – Get doctor analytics data
- `GET /api/doctor/appointments` – List doctor’s appointments
- `POST /api/doctor/cancel-appointment` – Cancel an appointment
- `POST /api/doctor/complete-appointment` – Mark appointment as completed
- `POST /api/doctor/change-availability` – Toggle doctor availability

### Admin APIs

- `POST /api/admin/login` – Admin login
- `GET /api/admin/all-doctors` – List all doctors
- `POST /api/admin/add-doctor` – Add new doctor
- `POST /api/admin/remove-doctor` – Remove doctor
- `GET /api/admin/all-appointments` – List all appointments
- `POST /api/admin/cancel-appointment` – Admin cancels appointment
- `GET /api/admin/dashboard` – Get admin analytics

### Payment APIs

- `POST /api/payment/stripe` – Initiate Stripe payment
- `POST /api/payment/razorpay` – Initiate Razorpay payment

---

## DATABASE MODELS

### User

- `name`, `email`, `password`
- `appointments`: [Appointment IDs]
- `profile`: { personal details }

### Doctor

- `name`, `email`, `password`
- `speciality`, `degree`, `fees`, `experience`
- `address`
- `available`: Boolean
- `slots_booked`: { date: [times] }

### Appointment

- `userId`, `docId`
- `date`, `time`
- `amount`, `payment` (status/type)
- `isCompleted`, `cancelled`

---

## TECHNOLOGIES USED

- **Frontend:** React, Tailwind CSS, Context API, Vite (admin)
- **Backend:** Node.js, Express, JWT, MongoDB, Mongoose, Bcrypt
- **Payments:** Stripe, Razorpay
- **Cloudinary:** For doctor/user images
- **Axios:** HTTP requests

---

## DEPLOYMENT & ENVIRONMENT

- **Frontend:** Runs on `http://localhost:3000`
- **Admin/Doctor:** Runs on `http://localhost:5173`
- **Backend:** Runs on `http://localhost:5000` (configurable)
- **Environment Variables:** Set up `.env` for backend (DB, JWT_SECRET, Stripe, Razorpay keys, Cloudinary)

---
## Getting Started

### Prerequisites

- Node.js (>=14)
- npm (>=6)
- MongoDB database

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NamanKhanduja/careSync.git
   cd careSync
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   # Set up your .env file with required variables (see .env.example if available)
   npm start
   ```

3. **Frontend Setup (User):**
   ```bash
   cd ../frontend
   npm install
   npm start
   ```

4. **Admin/Doctor Portal Setup:**
   ```bash
   cd ../admin
   npm install
   npm run dev
   ```

5. Access the applications:
   - User portal: `http://localhost:3000`
   - Admin/Doctor portal: `http://localhost:5173`

---
## CONTACT & CAREER

- **Office:** Survey No. 140 - 141/1, MNNIT PRAYAGRAJ
- **Tel:** (+91) 9235343584
- **Email:** namankhanduja14@gmail.com
- **Careers:** See "Explore Jobs" on the Contact page

---

## VISION & DIFFERENTIATORS

- **Efficiency:** Streamlined scheduling, real-time doctor availability
- **Convenience:** Trusted healthcare network, easy rescheduling/cancellation
- **Transparency:** Admin dashboard with analytics, earnings, and patient stats
- **Continuous Improvement:** Modern tech stack, regular updates

---

## CONTRIBUTING

- Fork, clone, and submit pull requests
- See open issues for feature and bug discussions

---

© 2025 careSync by Naman Khanduja. All rights reserved.
