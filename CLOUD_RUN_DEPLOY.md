# Cloud Run Deployment Guide (Using Buildpacks)

## Quick Deploy

### Deploy from Source Repository (Recommended)

Google Cloud Buildpacks automatically detect Node.js and build your application - no Dockerfile needed!

#### Via Cloud Console:
1. Go to [Cloud Run](https://console.cloud.google.com/run) in Google Cloud Console
2. Click "Create Service"
3. Select "Deploy one revision from a source repository"
4. Connect your GitHub/GitLab/Bitbucket repository
5. Configure:
   - **Service name**: my-portfolio
   - **Region**: us-central1 (or your preferred region)
   - **Port**: 8080
   - **Authentication**: Allow unauthenticated invocations
6. Click "Deploy"

#### Via gcloud CLI:
```bash
# Set your variables
export PROJECT_ID=your-project-id
export SERVICE_NAME=my-portfolio
export REGION=us-central1

# Deploy to Cloud Run (buildpacks auto-detect Node.js)
gcloud run deploy $SERVICE_NAME \
  --source . \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --port 8080
```

## Testing Locally

Before deploying, test the application locally:

```bash
# Install dependencies
npm install

# Build the application
npm run build

# Start the server
npm start

# Test in browser
open http://localhost:8080
```

## Troubleshooting

### Port Issues
- The server automatically uses the PORT environment variable (defaults to 8080)
- Cloud Run sets this automatically - no configuration needed
- Verify `server.js` listens on `process.env.PORT || 8080`

### Build Issues
- Make sure all dependencies are in `package.json`
- Check that the build completes successfully: `npm run build`
- Verify `package.json` has a `build` script: `"build": "vite build"`
- Verify `package.json` has a `start` script: `"start": "node server.js"`

### Server Not Starting
- Check Cloud Run logs in the Google Cloud Console
- Verify `server.js` exists in the root directory
- Ensure `server.js` listens on `0.0.0.0` (not just `localhost`)
- Check that Express is in dependencies (not devDependencies)

### Buildpack Detection
- Buildpacks automatically detect Node.js from `package.json`
- They run: `npm install` → `npm run build` → `npm start`
- No Dockerfile needed when using buildpacks!

## Environment Variables

Cloud Run automatically sets:
- `PORT=8080` (or the port you configure)

No additional environment variables are required for basic deployment.

## Notes

- The server listens on `0.0.0.0` to accept connections from Cloud Run
- Static files are served from the `dist` directory
- All routes are handled by React Router (SPA routing)
- The container handles graceful shutdown on SIGTERM

