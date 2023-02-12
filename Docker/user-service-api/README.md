docker build -t user-service-api .
docker rm user-api
docker run --name user-api -d -p 3000:3000 user-service-api:latest

