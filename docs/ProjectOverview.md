# Project Overview

## 1. System Objectives

HYDROSMART aims to develop an integrated IoT-based hydroponics monitoring and control system for the Mindoro Horticultural Center (ORMAES).

The system will:

- Monitor pH, electrical conductivity, water temperature, and water level.
- Transmit sensor readings from the ESP32 through Wi-Fi.
- Store and synchronize information using Firebase Realtime Database.
- Display real-time readings, alerts, status indicators, and historical data.
- Allow an authorized operator to control the Nutrient A, Nutrient B, pH Up, and pH Down dosing pumps.
- Reduce continuous manual checking of hydroponic water and nutrient conditions.

The primary beneficiaries are the hydroponics operators and agricultural personnel of ORMAES.

## 2. Proposed Scope

### Modules and Systems to Integrate

- ESP32 sensor and device module
- pH sensor
- Electrical conductivity sensor
- Water-temperature sensor
- Water-level sensor
- Wi-Fi communication
- Firebase Realtime Database
- Laravel web application
- Authentication module
- Dashboard and data-visualization module
- Alert and notification module
- Dosing-pump control module

### In-Scope Features

- Real-time monitoring of pH, EC, water temperature, and water level
- Authorized operator authentication
- Dashboard with current sensor readings
- Historical charts and records
- Threshold-based alerts
- Manual control of four dosing pumps
- Small-scale support for lettuce, pechay, and culinary herbs

### Out-of-Scope Features

- Pest-control automation
- Plant-disease detection
- Humidity and greenhouse climate control
- Automated misting
- Full-scale commercial hydroponic production

## 3. Stakeholders

- Mindoro Horticultural Center (ORMAES) — The primary beneficiary and project stakeholder.
- Hydroponics Operator or Grower — Needs real-time readings, alerts, historical data, and pump controls.
- Agricultural Staff and Technicians — Need reliable monitoring information for operation and maintenance.
- Project Team and Developers — Develop, integrate, test, document, and maintain the system.

## 4. Tools and Technologies

### Hardware

- ESP32 microcontroller
- pH sensor
- Electrical conductivity sensor
- Water-temperature sensor
- Water-level sensor
- Relay modules
- Nutrient and pH dosing pumps

### Languages and Frameworks

- Laravel
- PHP
- HTML
- CSS
- JavaScript
- Bootstrap
- Arduino or C++

### Integration Approach

- REST APIs
- Firebase SDK
- Wi-Fi communication
- Firebase Realtime Database

### Repository and Development Services

- Git
- GitHub
- Visual Studio Code
- Arduino IDE

### Testing Tools

- Postman
- Browser developer tools
- Manual test cases
- Device and sensor validation

  ## 5. High-Level System Overview

### 5.1 Major Modules / Subsystems

**1. ESP32 Sensor and Controller Module**

The ESP32 serves as the main hardware controller of the HYDROSMART system. It collects readings from the pH sensor, electrical conductivity (EC) sensor, water-temperature sensor, and water-level sensor. It also receives control commands for the dosing pumps and communicates through Wi-Fi.

**2. Monitoring and Data Management Module**

This module processes and manages sensor readings received from the ESP32. The readings include pH, electrical conductivity, water temperature, and water level. The processed information is stored and synchronized using Firebase Realtime Database for real-time monitoring and historical records.

**3. Laravel Web Application and Dashboard Module**

The Laravel web application provides the user interface for authorized hydroponics operators and agricultural personnel. It displays current sensor readings, system status, alerts, and historical records through a web dashboard.

**4. Dosing Pump Control Module**

The dosing pump control module allows an authorized operator to control four dosing pumps: Nutrient A, Nutrient B, pH Up, and pH Down. Commands from the web application are transmitted to the ESP32, which controls the corresponding relay and dosing pump.

**5. Authentication and Authorization Module**

The authentication module verifies users before allowing access to the HYDROSMART dashboard and control functions. Authorized users can access monitoring information and perform manual pump-control operations.

### 5.2 External Systems / Interfaces

HYDROSMART integrates with the following external systems and interfaces:

* **Firebase Realtime Database** – Stores and synchronizes sensor readings, system status, and monitoring information.
* **Wi-Fi Network** – Provides wireless communication between the ESP32 and system services.
* **Laravel Web Application** – Provides the browser-based monitoring and control interface.
* **ESP32 Hardware Interface** – Connects the software system to the sensors, relay modules, and dosing pumps.
* **Firebase SDK / APIs** – Provides communication between the application and Firebase services.

### 5.3 Data Flow Summary

The HYDROSMART data flow begins with the sensors connected to the ESP32. The pH, electrical conductivity, water temperature, and water-level sensors provide measurements to the ESP32 controller. The ESP32 processes the readings and transmits the information through Wi-Fi.

The sensor data is stored and synchronized using Firebase Realtime Database. The Laravel web application retrieves the available data and displays it through the monitoring dashboard. The dashboard presents current readings, alerts, system status, and historical information to authorized users.

When an authorized operator needs to control a dosing pump, the operator selects the appropriate pump through the web application. The control command is transmitted to the ESP32. The ESP32 controls the corresponding relay and dosing pump. The pump status is then recorded for system monitoring.
