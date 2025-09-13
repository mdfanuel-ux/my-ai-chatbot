# My AI Chatbot (Vite + React + TypeScript + Amplify Gen 2)

A minimal full‑stack AI chat app using **Amplify Gen 2** and the **Amplify UI AI Kit**.

## Local dev (with sandbox)

```bash
# 1) Install deps
npm i

# 2) Start Amplify sandbox in one terminal (provisions backend & writes amplify_outputs.json)
npx ampx sandbox

# 3) Start Vite dev server in another terminal
npm run dev
```

> Make sure your `amplify/data/resource.ts` uses a conversation named `chat`.
> The sandbox will generate/overwrite `amplify_outputs.json` in the project root.

## Deploy to AWS Amplify (Hosting)

1. Initialize git and push to your repo:
   ```bash
   git init
   git add .
   git commit -m "Initial Gen2 AI chat app"
   git branch -M main
   git remote add origin <YOUR_REPO_URL>
   git push -u origin main
   ```

2. In **AWS Amplify Console** → **Host web app** → connect your Git provider → pick this repo & branch.

3. Use this build config if asked:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

4. Ensure your AWS account has **Bedrock model access** in the app’s region
   and the backend role can call Bedrock (e.g., `bedrock:InvokeModel*`).

5. Open the live URL, sign up/sign in, and chat.
