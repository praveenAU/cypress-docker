FROM cypress/included:3.2.0

WORKDIR /app
ADD . /app

RUN npm install
RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run
