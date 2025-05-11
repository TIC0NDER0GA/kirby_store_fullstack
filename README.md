# KirbyOnlineStore - Developer Quick Guide

## 📄 Project Description
KirbyOnlineStore is a full-stack eCommerce application featuring:

- **Frontend**: Angular app hosted on AWS S3
- **Backend**: Express/Node.js API running on an AWS EC2 instance
- **Database**: PostgreSQL hosted on Amazon RDS

The app allows users  view products, create orders, and checkout their order.

---

##  How to Set Up the Project and make changes

1. Clone the repo and install dependencies with npm install

2. Once you've committed all changes and pushed, the git repo will automatically start a build in circleci

3. If there is more configuration needed the ./circleci/config.yml handles the CI/CD pipeline  

After deployment, the App is accessible at http://udacity-bucket-doy.s3-website.us-east-2.amazonaws.com/product.

---

## Useful Information
System Infrastructure Overview – Kirby Online Store
Frontend
    • Framework: Angular
    • Deployment: AWS S3 (Static Website Hosting)
    • Build Process:
        ◦ Built using npm run build in CircleCI pipeline.
        ◦ Output deployed via aws s3 sync to a public S3 bucket (udacity-bucket-doy).
    • Access: Publicly accessible through the S3 URL.
    • API Integration: Calls backend APIs hosted on an EC2 instance via HTTP.

Backend
    • Framework: Node.js with Express
    • TypeScript: Compiled into JavaScript during the build process.
    • Environment: Deployed on an AWS EC2 instance.
    • API Features:
        ◦ Products CRUD via REST endpoints.
        ◦ Orders and Users
    • Deployment:
        ◦ Handled in CircleCI with SSH deployment to EC2.
        ◦ Runs with nohup to keep the API running in background.
        ◦ Port 3000 exposed to public via EC2 security group.
    • Environment Variables:
        ◦ Passed from CircleCI to EC2 instance to configure DB and secrets.
        ◦ Stored securely in CircleCI project settings.
        ◦ Includes POST_HOST, POST_USER, POST_PASSWORD, TOKEN_SECRET, etc.

Database
    • Type: PostgreSQL
    • Deployment: AWS RDS 
    • Databases:
        ◦ kirby_store: Production DB
        ◦ kirby_store_test: Test DB
    • Schema Migration:
        ◦ SQL files run during CI/CD using psql from EC2.
        ◦ Tables include users, products, orders, and junctions.
    • Security:
        ◦ Only accessible within the same VPC/subnet.
        ◦ Controlled via security groups and RDS pg_hba.conf.

DevOps / CI-CD
    • CI/CD Tool: CircleCI
    • Pipeline Actions:
        ◦ Install deps and build Angular + API.
        ◦ Upload frontend to S3.
        ◦ SSH into EC2 to deploy backend and run migrations.
        ◦ Set up Node, install deps, start server in background.
    • Security:
        ◦ SSH keys stored as secure environment variables.
        ◦ Database credentials and secrets stored in CircleCI environment variables.

Security & Access Control
    • S3 Bucket:
        ◦ Public read for frontend assets.
        ◦ CORS configured to allow API requests.
    • EC2 Security Group:
        ◦ Open on port 3000 to trusted IPs or frontend origin.
        ◦ SSH on port 22 from trusted sources.
    • RDS Security Group:
        ◦ Limited access to EC2 instance IPs only.
    • API CORS:
        ◦ Initially allowed http://localhost:4200.
        ◦ Configurable for production S3 origin as needed.
App Dependencies
Backend Dependencies (Node.js)
    • express: Web framework to define API endpoints
    • pg: PostgreSQL client for Node.js
    • body-parser: Parses incoming request bodies
    • cors: Enables Cross-Origin Resource Sharing
    • ts-node / typescript: Compile + run TypeScript
    • db-migrate: For managing schema migrations
Frontend Dependencies (Angular)
    • @angular/core: Main Angular framework
    • @angular/router: Routing between pages
    • rxjs: Reactive extensions for async data
    • zone.js: For Angular's change detection
    • @angular/forms: Form controls and validation
    • http-client: To communicate with the backend API

CI/CD Pipeline Description (CircleCI)
1. CircleCI Configuration
    • Version: 2.1
    • Orbs Used:
        ◦ circleci/node@5.0.2: Node.js install 
        ◦ circleci/aws-cli@3.1.1: AWS CLI installation for interacting with AWS

2. Job: build-and-deploy
Runs in a Docker container based on cimg/node:20.9.
Steps:
    1. Checkout Code
        ◦ Clones the Kirby_Online_Store GitHub repository.
    2. AWS CLI Setup
        ◦ Sets up AWS Client to allow AWS operations
    3. Install Dependencies
        ◦ Uses npm ci to install dependencies
    4. Build Frontend
        ◦ Runs npm run build to compile the Angular app.
    5. Build Backend
        ◦ Compiles the TypeScript backend with npm run build_api.
    6. SSH Key Setup
        ◦ Creates .ssh directory and adds the private SSH key.
        ◦ Adds the EC2 host to known_hosts

3. Deployments
    • Frontend Deployment:
        ◦ Uses aws s3 sync to upload the Angular build to a public S3 bucket (udacity-bucket-doy).
    • Backend Deployment (on EC2):
a. PostgreSQL Client Setup
        ◦ Installs PostgreSQL client for running migrations from EC2
b. Install Node.js
        ◦ Ensures Node 20 is installed on EC2.
c. Copy Files to EC2
        ◦ Sends the backend build compiled code, package.json, migrations, and database.json config to EC2 via scp.
d. Database Initialization
        ◦ Runs SQL script to initialize the production and test databases
        ◦ Authenticated via environment variables (POST_USER, POST_PASSWORD, etc.).
e. Verify Database
        ◦ Lists all databases to confirm creation via a psql command.
f. Start Backend API
        ◦ SSHs into EC2, installs Node dependencies, runs DB migrations.
        ◦ Starts the API using nohup and disown to ensure it runs in the background even after the CircleCI process ends.


## Copyright Disclaimer

This project includes visual assets from Kirby and the Amazing Mirror by Nintendo, which are copyrighted by their respective owners.

These assets are used under the belief of **fair use**, for non-commercial, educational, and fan-based purposes only. No copyright infringement is intended. 

If you are a copyright holder and have any concerns, please contact me and I will address them promptly.

<a href="https://www.vecteezy.com/free-vector/star">Star Vectors by Vecteezy</a>

