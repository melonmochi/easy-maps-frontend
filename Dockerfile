# Dockerfile
# Using image
FROM node:12.3.1-alpine

# Set working directory
WORKDIR /app

# Copy over the package.json file
COPY package.json /app/package.json

# Install app dependencies
RUN yarn install

# Copy the project codes into the Work Directory
COPY . /app

# Run the React application
CMD ["yarn", "docker"]