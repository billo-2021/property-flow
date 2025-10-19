# Property Flow

**Property Flow** is a full-featured property management system designed to handle the **entire lifecycle of properties** — from listings and tenant inquiries, to bookings, applications, lease management, and beyond. The platform is built to streamline property operations for **landlords, agents, tenants, and administrators**, while providing a seamless experience for prospective and current tenants. Although it starts with rental management, it is designed to support **future extensions for property sales, payments, maintenance, and utility tracking**.  

---

## Features

### Public / Prospective Tenant Features
- Browse available properties and units with details and images  
- Search and filter listings by location, rent, bedrooms, or amenities  
- Submit inquiries to landlords or agents  
- Receive responses via preferred communication channels (WhatsApp, notifications, email)  

### Tenant Features
- Manage property viewings and bookings  
- Rate properties and viewings  
- Submit applications with necessary documents  
- Track application status and receive updates via notifications  
- Future support for rent payments, invoices, and utility tracking  

### Landlord / Agent Features
- Manage properties, units, and listings  
- Receive and respond to tenant inquiries via portal or preferred communication method  
- Schedule property viewings and manage bookings  
- Review applications, approve tenants, and assign units  
- Track leases, occupancy, and tenant interactions  

### Admin Features
- Manage users, roles, and permissions  
- Assign agents to properties or inquiries  
- Generate reports on properties, tenants, payments, and occupancy  
- Oversee the full system workflow  

---

## Technology Stack
- **Frontend:** React, Tailwind CSS  
- **Backend:** Django REST Framework  
- **Database:** PostgreSQL  
- **Authentication:** JWT-based login with role-based access  
- **File Storage:** AWS S3 / Local Media Storage  
- **Optional Integrations:** Stripe for payments, WhatsApp API for tenant communications  

---

## Architecture
PropertyFlow is structured around **role-based portals**:  

| Portal | Purpose |
|--------|---------|
| **Rental Portal** | Public-facing portal for prospective tenants to browse and inquire about properties |
| **Tenant Portal** | Registered tenants manage bookings, applications, and communication |
| **Lease Portal** | Landlords/agents manage properties, inquiries, bookings, and leases |
| **Control Portal** | Admins oversee system, assign agents, manage reports, and users |

---

## Getting Started

### Prerequisites
- Python 3.11+  
- Node.js 20+  
- PostgreSQL 15+  

### Installation (Backend)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Linux / Mac
venv\Scripts\activate     # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

