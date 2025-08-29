

# 🌱 ShambaSmart Backend – Microservices Architecture

<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  <b>A progressive, event-driven microservices backend for powering digital agriculture services.</b><br/>
  Built with <a href="http://nodejs.org" target="_blank">Node.js</a>, <a href="https://nestjs.com/" target="_blank">NestJS</a>, and <a href="https://kafka.apache.org/" target="_blank">Apache Kafka</a>.
</p>

---

## 📖 Overview

**ShambaSmart** is a modular, event-driven backend designed for agricultural digital services.
It enables **farmers, vendors, and advisors** to interact seamlessly via microservices that handle:

* 🛒 Farm Input Shop
* 📈 Market Price Tracking
* 📲 Extension Advisory Services
* 💰 Payments (M-Pesa Daraja, Stripe, PayPal)
* 🔔 Notifications (SMS, Push, Email)
* 🔐 Authentication (JWT, OAuth2)
* 🤖 AI-Powered Advisory (planned integration)

This architecture is **scalable, fault-tolerant, and production-ready**, making it suitable for large deployments in rural and urban farming contexts.

---

## 🏗 System Architecture

ShambaSmart follows a **Gateway + Event-Driven Microservices** pattern:

* **API Gateway**

  * Receives all client requests (mobile/web).
  * Handles authentication & authorization.
  * Emits events to **Kafka topics**.
  * Returns immediate responses or awaits async service responses.

* **Microservices** (loosely coupled, independent deployment):

  * **Auth Service** → JWT & OAuth2 authentication, farmer/vendor identity.
  * **Payment Service** → Daraja (M-Pesa), Stripe, PayPal integration.
  * **Shop Service** → Farm inputs catalog, ordering, stock management.
  * **Market Service** → Market price collection, historical trends, demand forecasting.
  * **Extension Service** → AI-driven advisory, pest/disease detection, personalized farming recommendations.
  * **Notification Service** → SMS, push, email notifications.

* **Event Bus (Kafka)**

  * Ensures asynchronous communication between services.
  * Handles retries and fault-tolerance.

---

## 🌳 System Tree Diagram

```plaintext
ShambaSmart Backend
│
├── API Gateway (NestJS)
│   ├── Auth (JWT, OAuth2)
│   ├── Request Routing
│   └── Kafka Producer
│
├── Kafka (Event Bus)
│   ├── auth.events
│   ├── payment.events
│   ├── shop.events
│   ├── market.events
│   ├── extension.events
│   └── notification.events
│
├── Microservices
│   ├── Auth Service
│   ├── Payment Service
│   │   ├── M-Pesa Daraja
│   │   ├── Stripe
│   │   └── PayPal
│   ├── Shop Service
│   ├── Market Service
│   ├── Extension Service (AI integration planned)
│   └── Notification Service
│
└── External Integrations
    ├── SMS Gateways
    ├── Mobile Money (Safaricom Daraja)
    ├── Payment APIs (Stripe, PayPal)
    └── AI/ML Models (LLM, CV for pest/disease detection)
```

---

## 🔄 Flow of Operations (High-Level)

1. **User Request → Gateway**
   Example: A farmer places an input order.

2. **Gateway → Kafka Event**
   Gateway publishes an `order.created` event to Kafka.

3. **Kafka → Microservices**

   * Shop Service listens to `order.created`.
   * Payment Service listens for payment initiation.
   * Notification Service listens for order confirmation triggers.

4. **Responses**

   * Once the payment succeeds, events like `payment.success` are emitted.
   * Notification Service sends SMS/email.
   * Market Service may adjust demand/price models.
   * Extension Service may recommend best planting practices.

---

## 🤖 AI Integration Roadmap

AI is a **core differentiator** of ShambaSmart. Planned features:

* **LLM-driven advisory** → Personalized guidance based on farm data.
* **Pest & Disease Detection** → Computer vision for early detection via farmer-uploaded photos.
* **Market Recommendations** → AI pricing forecasts based on supply & harvest data.
* **Farmer Profiles** → Adaptive advice tuned to each farmer’s history & region.

---

## 🚀 Deployment

### Requirements

* Node.js >= 18
* Apache Kafka (self-hosted or cloud provider)
* MongoDB / PostgreSQL for persistence
* Redis for caching
* Docker & Kubernetes (recommended for production)

### Setup

```bash
# Install dependencies
$ npm install

# Start dev environment
$ npm run start:dev

# Build for production
$ npm run build && npm run start:prod
```

### Microservices Deployment

Each microservice runs independently:

```bash
# Run a specific service
$ nest start auth-service
$ nest start payment-service
```

Use **Docker Compose** or **Kubernetes** manifests for orchestration.

---

## 🛡 Security

* **JWT & OAuth2** for user authentication.
* **Role-based access control (RBAC)** for farmers, vendors, advisors, admins.
* **Encrypted communication** (TLS/HTTPS).
* **Event-level authorization** for Kafka topics.

---

## 📊 Monitoring & Observability

* **Prometheus + Grafana** → Metrics & dashboards.
* **ELK Stack** (Elasticsearch, Logstash, Kibana) → Logging.
* **Jaeger** → Distributed tracing for event-driven flows.

---

## 📬 Notifications

ShambaSmart supports multi-channel farmer communication:

* **SMS** (via Africa’s Talking, Twilio, or Safaricom APIs)
* **Push Notifications** (FCM, OneSignal)
* **Email** (SendGrid, Amazon SES)

---

