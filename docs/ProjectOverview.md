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