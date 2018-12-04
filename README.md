# Timely

## Contact, Project & Billing management

## Introduction:

We are using the following technology stack:

- Angular.io + Nginx (Frontend)
- Postgresql (Database)
- Redis (Session)
- Spring boot (Backend)
- Docker

For development you need docker installed and working. As IDE we recommend Idea IntelliJ Ultimate.

Intellij is well suited for Angular and Spring boot development

## Project setup

1. Checkout the git repository.
2. Start up the docker-compose.
3. Start up the frontend.
4. Configure IntelliJ to use Spring profiles.
5. Start up the backend.


1:

```
git clone git@github.com:broadmindco/timely.git`
cd timely
```

2:

```
docker-compose up
```

3:

```
cd frontend
npm install -g @angular/cli && npm install
ng serve
```

4:

```
Open src/main/java/com/runway/timely/Application
Click the green "start" to generate a auto configuration.
(Startup will fail)
Edit the configuration, add spring profiles to "VM options" "-Dspring.profiles.active=dev" (without ")
```
