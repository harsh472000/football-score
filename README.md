# ⚽ Football-Score - Live Match Tracker

Football-Score is a **Next.js** application that provides real-time football match tracking, leaderboards, chat features, and notifications.  
It utilizes **React, Next.js, TanStack Query, and SportMonks API** to fetch and display live football data.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/harsh472000/football-score.git
cd football-score
```

### 2️⃣ Install Dependencies
```bash
npm install  # or yarn install
```

### 3️⃣ Set Up Environment Variables
Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_API_TOKEN=your_sportmonks_api_key
```

> 🔹 **Important:** Replace `your_sportmonks_api_key` with your actual API key from **[SportMonks](https://www.sportmonks.com/)**.

### 4️⃣ Run the Development Server
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌍 API Routes
This project utilizes **Next.js API routes** to fetch match data. 

### Fetching Match Fixtures
**Endpoint:**  
```http
GET /api/fixtures?date=YYYY-MM-DD
```
**Example:**
```bash
curl -X GET "http://localhost:3000/api/fixtures?date=2025-02-15"
```
**Response:**
```json
{
  "data": [
    {
      "id": 12345,
      "league_id": 98,
      "name": "Team A vs Team B",
      "starting_at": "2025-02-15T18:00:00Z",
      "state_id": 1,
      "result_info": "2-1"
    }
  ]
}
```

---

## 📂 Project Structure
```
📦 football-score
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 layout
 ┃ ┃ ┃ ┣ 📜 Layout.tsx       # Main layout wrapper
 ┃ ┃ ┃ ┣ 📜 Sidebar.tsx      # Sidebar navigation
 ┃ ┃ ┣ 📂 providers
 ┃ ┃ ┃ ┣ 📜 ThemeProvider.tsx # Dark/Light mode provider
 ┃ ┃ ┃ ┣ 📜 ThemeToggle.tsx   # Theme switcher button
 ┃ ┃ ┣ 📂 sections
 ┃ ┃ ┃ ┣ 📜 ScoringSection.tsx  # Displays live football scores
 ┃ ┃ ┃ ┣ 📜 TrendingSection.tsx # Trending matches or news
 ┃ ┃ ┣ 📂 ui
 ┃ ┃ ┃ ┣ 📜 DateSelector.tsx   # Date picker for match filtering
 ┃ ┃ ┃ ┣ 📜 MatchList.tsx      # Fetches and displays football matches
 ┃ ┣ 📂 lib
 ┃ ┃ ┣ 📜 utils.ts             # Utility functions
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📂 api
 ┃ ┃ ┃ ┣ 📜 fixtures.ts       # API route for fetching match fixtures
 ┃ ┃ ┣ 📜 _app.tsx            # Next.js main app wrapper
 ┃ ┃ ┣ 📜 _document.tsx       # Document customization
 ┃ ┃ ┣ 📜 index.tsx           # Home page
 ┃ ┣ 📂 styles
 ┃ ┃ ┣ 📜 globals.css         # Global CSS styles
```

---

## 🎨 Styling & Fonts
- **Tailwind CSS** is used for styling.
- **Sofia Sans** is applied globally as the primary font.

To modify fonts, update `tailwind.config.js`:
```js
theme: {
  extend: {
    fontFamily: {
      sans: ["var(--font-sofia-sans)", "sans-serif"],
    },
  },
},
```

---

## ⚙️ Technologies Used
- **Next.js 14** - Server-side rendering & API handling.
- **React 18** - Component-based UI.
- **TanStack Query** - Data fetching & caching.
- **SportMonks API** - Live football data.
- **Tailwind CSS** - Responsive UI.
- **Axios** - API calls.
- **Lucide Icons** - UI icons.

---

## 🛠 Deployment
The project is deployed on **Vercel** and can be accessed via:  
🌐 [Football-Score Live App](https://football-score-cyan.vercel.app/)

To deploy manually using **Vercel**, run:
```bash
vercel deploy
```

Alternatively, deploy manually on **Netlify** or **Docker**.

---

## 📜 License
This project is licensed under the **MIT License**.  
Feel free to use and modify it.

---

## ✨ Contributions
Want to contribute? Fork the repo and submit a pull request!  
💡 Suggestions? Open an **[issue](https://github.com/harsh472000/football-score/issues)**.

---

## 📞 Contact
For queries or support, contact:    
🌐 Website: [https://football-score-cyan.vercel.app/](https://football-score-cyan.vercel.app/)  
📌 GitHub: [Football-Score Repository](https://github.com/harsh472000/football-score)
