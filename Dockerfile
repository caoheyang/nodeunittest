FROM hub.c.163.com/public/nodejs:6.11.0

# Create app directory
RUN mkdir -p /home/Service
WORKDIR /home/Service

# Bundle app source
ADD . /home/Service

EXPOSE 3000
ENTRYPOINT  [ "npm", "start" ]