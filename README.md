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


```

After deployment, the App is accessible at http://udacity-bucket-doy.s3-website.us-east-2.amazonaws.com/product.

---

## Useful Information

- **Backend API** is accessible via EC2 public IP and port `3000`.
- **Frontend** is served from S3 with public read access.
- Make sure CORS on the backend allows requests from your S3.
- EC2 Security Group must allow inbound traffic on port `3000` from your S3 or global IPs.
- Environment variables for the backend (DB credentials, secrets, etc.) are managed via CircleCI and passed to the EC2 instance during deployment.

---

## Copyright Disclaimer

This project includes visual assets from Kirby and the Amazing Mirror by Nintendo, which are copyrighted by their respective owners.

These assets are used under the belief of **fair use**, for non-commercial, educational, and fan-based purposes only. No copyright infringement is intended. 

If you are a copyright holder and have any concerns, please contact me and I will address them promptly.

<a href="https://www.vecteezy.com/free-vector/star">Star Vectors by Vecteezy</a>

