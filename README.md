# AI Deepfake Detection Prototype

## Problem
AI-generated fake images and deepfakes are increasingly used for misinformation.

## Solution
A full-stack AI prototype that verifies whether an uploaded image is real or manipulated.

## Tech Stack
- Frontend: React + Vite
- Backend: Python Flask
- AI Logic: Prototype detection

## How It Works
1. User uploads an image
2. Frontend sends image to backend
3. Backend analyzes and returns result + confidence
4. Frontend displays output

## How to Run
### Frontend
```bash
cd frontend
npm install
npm run dev
```
### Backend
```bash
cd backend
pip install -r requirements.txt
python app.py
```
