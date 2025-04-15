FROM node:20-bookworm

# Set the working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files and install dependencies
COPY package*.json ./

# Install dependencies as root (or myappuser, depending on your structure)
RUN pnpm install
# RUN chown -R node:node /app

# Copy the rest of your application code
COPY . .

# # Build the application
RUN pnpm run build

# Ensure script has execution permissions
RUN chmod +x ./start.prod.sh

## Switch to the non-root user
USER node

EXPOSE 3000

# Start the application update
CMD ["sh", "-c", "pnpm run start & node watcher.js & wait"]