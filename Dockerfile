# Use official OpenJDK 17 image
FROM eclipse-temurin:17-jdk

# Set working directory inside container
WORKDIR /app

# Copy Maven wrapper & pom
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Download dependencies (cached layer)
RUN ./mvnw dependency:go-offline

# Copy source code
COPY src src

# Build the application
RUN ./mvnw clean package -DskipTests

# Expose port (Render will map dynamically)
EXPOSE 8080

# Run the jar
CMD ["java", "-jar", "target/*.jar"]
