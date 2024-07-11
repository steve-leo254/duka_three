FROM nginx:latest

COPY dist/ /usr/share/nginx/html

COPY dist/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80



# Start Nginx in the foreground
# CMD ["nginx", "-g", "daemon off;"]
CMD ["sh", "-c", "nginx -g 'daemon off;' & tail -F /var/log/nginx/access.log"]

