# Career Platform — SineRaja (Aditya Raj)

Live Frontend: https://ai-job-recommend-front-end.vercel.app/  
Live Backend: https://ai-job-recommend-backend.onrender.com/

This is a fixed Create React App (CRA) frontend that deploys cleanly on **Vercel** and talks to the backend via an environment variable.

## Quick Start
```bash
npm install
npm start
# or
pnpm install
pnpm start
```

## Build (Vercel)
Framework Preset: **Create React App**  
Build Command: `npm run build`  
Output Directory: `build`

## Environment
Create a `.env` file (or set vars in Vercel) with:
```
REACT_APP_API_URL=https://ai-job-recommend-backend.onrender.com
REACT_APP_APP_NAME=Career Platform — SineRaja (Aditya Raj)
```

## Notes
- Do **not** hardcode API URLs in code; use `process.env.REACT_APP_API_URL`.
- `react-scripts@5.0.1` is included to avoid the “react-scripts: command not found” error.