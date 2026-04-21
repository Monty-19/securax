# SecuraX

## Project Overview
SecuraX is a mobile-first phishing detection platform with a React frontend and FastAPI backend.
It supports URL scans, text analysis, screenshot OCR analysis, and historical threat tracking with AI-assisted classification.

## Prerequisites
- Node.js 20+
- Python 3.11+
- Tesseract OCR installed and available on PATH
- Docker and Docker Compose (recommended for full-stack run)

## Setup (Docker)
1. Copy environment template:
```bash
cp .env.example .env
```
2. Fill your API keys in `.env`.
	Get your free Gemini API key at https://aistudio.google.com/app/apikey
	The free tier supports 1,500 requests/day on gemini-2.0-flash — sufficient for development.
3. Start all services:
```bash
docker-compose up --build
```

## Setup (Manual)
1. Backend:
```bash
cd securax-backend
pip install -r requirements.txt
uvicorn main:app --reload
```
2. Frontend:
```bash
cd securax-frontend
npm install
npm run dev
```

## API Endpoints
| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Health check |
| POST | `/api/scan/url` | Analyze URL with VirusTotal + Gemini |
| POST | `/api/scan/text` | Analyze text content with Gemini |
| POST | `/api/scan/screenshot` | OCR screenshot and classify threat |
| GET | `/api/history` | Get scan history (latest first) |
| GET | `/api/history/stats` | Get aggregate dashboard stats |
| DELETE | `/api/history/{scan_id}` | Delete one history record |
| DELETE | `/api/history` | Clear all history |

## Model Notes
SecuraX uses gemini-2.0-flash for threat classification.
For higher accuracy on complex phishing, swap model_name to 'gemini-2.0-flash' in claude_service.py.

## Screen Inventory
- `Splash` onboarding flow
- `SignIn` authentication screen
- `Dashboard` threat overview and quick scan entry
- `ScreenshotScanner` image upload and OCR scan UI
- `ScanLoading` in-progress analysis animation
- `ScanResult` threat/safe verdict screen
- `History` filterable full scan history
