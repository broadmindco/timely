FROM openjdk:10-jdk as build

WORKDIR /srv/timely

COPY . /srv/timely

RUN ./gradlew build

FROM openjdk:10-jre

COPY --from=build /srv/timely/build/libs/timely-*.jar ./srv/timely/timely.jar

WORKDIR /srv/timely

ENV JAVA_OPTS="-Xmx1024m -Xms512m"

ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -server  -Dspring.profiles.active=prod -Djava.security.egd=file:/dev/./urandom -jar timely.jar" ]
