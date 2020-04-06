FROM maven as war
COPY ./ /app
RUN cd /app && \
    mvn clean && mvn package

FROM tomcat
COPY --from=war /app/target/rest.war /usr/local/tomcat/webapps

EXPOSE 8080