FROM nginx:alpine

# Working directory
WORKDIR /usr/share/nginx/html

# Clean old content
RUN rm -rf ./*

# Copy React build output
COPY build/ .

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose internal port 8080
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
