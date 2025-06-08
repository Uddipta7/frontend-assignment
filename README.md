# Onboarding & Dashboard Interface

![Screenshot 2025-06-08 104049](https://github.com/user-attachments/assets/2a00f4c6-1382-439f-9485-9fb4702035b8)
![Screenshot 2025-06-08 104107](https://github.com/user-attachments/assets/c95b3424-bf1c-40db-84bb-ea94151480d4)

A modern onboarding wizard and dashboard interface built with React. Features multi-step form collection, data persistence, and responsive design.
*Modern interface with light/dark theme support*

A responsive React application featuring:
- Multi-step onboarding wizard
- Interactive dashboard with real-time data
- API integration with Axios
- Theme customization

## ✨ Key Features
- **3-Step Onboarding Flow**:
  - Personal Information (Form validation)
  - Business Details (Dynamic fields)
  - Preferences (Theme/layout selection)
   
- **Dashboard Metrics**:
  - Team members count
  - Active projects
  - Notifications
  - Weekly progress charts
   
- **API Integration**:
  - Axios for HTTP requests
  - Mock API service for development
  - Real API ready structure

## 🛠 Tech Stack
| Category        | Technologies Used |
|-----------------|-------------------|
| **Frontend**    | React 18          |
| **Styling**     | CSS + Pastel Theme|
| **Data Fetch**  | Axios             |
| **Charts**      | Recharts          |
| **State**       | React Hooks + localStorage |
| **Fonts**       | Google Fonts (Montserrat + Poppins) |

## 🚀 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/onboarding-dashboard.git
   cd onboarding-dashboard

2. Install dependencies

   ```bash
   npm install

3. Run the development server

   ``` bash
   npm start

4. Open in browser 
http://localhost:3000

📸 Screenshots
Onboarding Flow
![Screenshot 2025-06-08 103843](https://github.com/user-attachments/assets/17629dd3-0687-4af9-b87c-33c7095b02a5)
![Screenshot 2025-06-08 104016](https://github.com/user-attachments/assets/62d75c0b-d814-4c3a-aea7-442a1856480f)
![Screenshot 2025-06-08 104028](https://github.com/user-attachments/assets/bb8713db-61db-45f1-a855-c205ad701671)

Dashboard [Dark Theme]
![Screenshot 2025-06-08 104228](https://github.com/user-attachments/assets/246ac1e1-1d45-49fd-8d9b-99ca1e53c71d)
![Screenshot 2025-06-08 104246](https://github.com/user-attachments/assets/e93d84d5-d1b6-4d6f-987a-c1efc8ba4c71)


🎨 Design Highlights
Pastel color scheme for modern look

Smooth animations between steps

Interactive charts with Recharts

Responsive layout adapts to all screens

📂 Project Structure
text
src/
├── components/
│   ├── Onboarding/
│   ├── Dashboard/
├── assets/
│   ├── screenshots/
├── styles.css
├── App.js
