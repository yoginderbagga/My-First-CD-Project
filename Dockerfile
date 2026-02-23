# Use a tiny version of Node.js as our base
FROM node:20-alpine

# Set the folder inside the container where our app lives
WORKDIR /app

# Copy our index.js from our computer into the container
COPY index.js .

# Tell Docker that the container will use port 80
EXPOSE 80

# The command to start our app
CMD ["node", "index.js"]