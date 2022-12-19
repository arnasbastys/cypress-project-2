FROM cypress/included:12.1.0
RUN mkdir /cypress-project
WORKDIR /cypress-project
COPY . /cypress-project
RUN yarn install