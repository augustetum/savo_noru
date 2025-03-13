# Use an official Maven image to build the application
FROM maven:3.8.4-openjdk-17 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven configuration file
COPY pom.xml .

# Download all necessary dependencies (this step will be cached if the pom.xml hasn't changed)
RUN mvn dependency:go-offline -B

# Copy the project source code to the container
COPY src ./src

# Package the application (skip tests if you want faster builds)
RUN mvn clean package -DskipTests

# Use an OpenJDK image to run the app
FROM openjdk:17-jdk-slim

# Set the working directory in the runtime container
WORKDIR /app

# Copy the jar file from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose the application's port (change if needed)
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
