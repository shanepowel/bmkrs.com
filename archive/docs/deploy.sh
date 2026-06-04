#!/bin/bash

# BMKRS.com Deployment Script
# Automates GitHub and Vercel deployment

set -e

echo "🚀 BMKRS.com Deployment Script"
echo "================================"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}Error: package.json not found. Please run this script from the project root.${NC}"
    exit 1
fi

echo -e "${BLUE}Step 1: GitHub Repository Setup${NC}"
echo "================================"
echo ""

# Check if remote already exists
if git remote get-url origin > /dev/null 2>&1; then
    echo -e "${GREEN}✓ GitHub remote already configured${NC}"
    REMOTE_URL=$(git remote get-url origin)
    echo "  Remote: $REMOTE_URL"
else
    echo -e "${YELLOW}GitHub remote not configured.${NC}"
    echo ""
    echo "Please create a GitHub repository first:"
    echo "  1. Go to: https://github.com/new"
    echo "  2. Repository name: bmkrs.com"
    echo "  3. Description: BMKRS Digital Design Agency - React Application"
    echo "  4. Choose Public or Private"
    echo "  5. DO NOT initialize with README"
    echo "  6. Click 'Create repository'"
    echo ""
    read -p "Have you created the repository? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo ""
        read -p "Enter your GitHub username: " GITHUB_USER
        read -p "Enter repository name (default: bmkrs.com): " REPO_NAME
        REPO_NAME=${REPO_NAME:-bmkrs.com}
        
        REMOTE_URL="https://github.com/$GITHUB_USER/$REPO_NAME.git"
        
        echo ""
        echo "Adding remote: $REMOTE_URL"
        git remote add origin "$REMOTE_URL"
        echo -e "${GREEN}✓ Remote added successfully${NC}"
    else
        echo -e "${RED}Please create the repository first, then run this script again.${NC}"
        exit 1
    fi
fi

echo ""
echo -e "${BLUE}Step 2: Push to GitHub${NC}"
echo "======================"
echo ""

# Get current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo "Pushing branch: $CURRENT_BRANCH"
if git push -u origin "$CURRENT_BRANCH" 2>&1; then
    echo -e "${GREEN}✓ Code pushed to GitHub successfully!${NC}"
else
    echo -e "${RED}Failed to push to GitHub.${NC}"
    echo "You may need to:"
    echo "  1. Check your GitHub credentials"
    echo "  2. Ensure the remote URL is correct"
    echo "  3. Try: git push -u origin $CURRENT_BRANCH"
    exit 1
fi

echo ""
echo -e "${BLUE}Step 3: Vercel Deployment${NC}"
echo "=========================="
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}Vercel CLI not found.${NC}"
    echo ""
    read -p "Install Vercel CLI globally? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Installing Vercel CLI..."
        npm install -g vercel
        echo -e "${GREEN}✓ Vercel CLI installed${NC}"
    else
        echo ""
        echo -e "${YELLOW}To deploy to Vercel later:${NC}"
        echo "  1. Install: npm install -g vercel"
        echo "  2. Login: vercel login"
        echo "  3. Deploy: vercel --prod"
        echo ""
        echo "Or use Vercel Dashboard:"
        echo "  https://vercel.com/new"
        exit 0
    fi
fi

echo ""
read -p "Deploy to Vercel now? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo "Deploying to Vercel..."
    echo ""
    
    # Check if logged in
    if ! vercel whoami &> /dev/null; then
        echo "Please login to Vercel:"
        vercel login
    fi
    
    # Deploy
    echo ""
    read -p "Deploy to production? (y = production, n = preview) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        vercel --prod
    else
        vercel
    fi
    
    echo ""
    echo -e "${GREEN}✓ Deployment complete!${NC}"
else
    echo ""
    echo -e "${YELLOW}Skipping Vercel deployment.${NC}"
    echo "To deploy later, run: vercel --prod"
fi

echo ""
echo "================================"
echo -e "${GREEN}🎉 Deployment process complete!${NC}"
echo "================================"
echo ""
echo "GitHub Repository: $(git remote get-url origin)"
echo "Vercel Dashboard: https://vercel.com/dashboard"
echo ""
echo "Next steps:"
echo "  - View your GitHub repo and verify code is pushed"
echo "  - Check Vercel dashboard for deployment status"
echo "  - Configure custom domain (optional)"
echo ""
