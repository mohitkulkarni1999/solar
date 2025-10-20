# Deployment Guide for solarisecorp.com

Your domain `solarisecorp.com` needs to be connected to a hosting service. This guide will help you deploy your website and connect your custom domain.

## 🚀 Quick Deployment (Recommended: Vercel)

### Option 1: Deploy to Vercel (Easiest & Free)

**Step 1: Create Vercel Account**
1. Go to [https://vercel.com](https://vercel.com)
2. Sign up with your GitHub account (the one with `mohitkulkarni1999/solar` repo)

**Step 2: Import Your GitHub Repository**
1. Click "Add New" → "Project"
2. Select your GitHub repository: `mohitkulkarni1999/solar`
3. Vercel will auto-detect it's a Vite project
4. Click "Deploy"
5. Wait 2-3 minutes for deployment to complete

**Step 3: Connect Your Custom Domain**
1. After deployment, go to your project settings
2. Click "Domains" tab
3. Enter: `solarisecorp.com`
4. Click "Add"
5. Vercel will show you DNS settings

**Step 4: Configure DNS (Important!)**

Go to your domain registrar (where you bought `solarisecorp.com`) and add these DNS records:

**For Root Domain (solarisecorp.com):**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**For WWW Subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**Step 5: Wait for DNS Propagation**
- DNS changes can take 5 minutes to 48 hours (usually 15-30 minutes)
- Check status at: [https://www.whatsmydns.net/](https://www.whatsmydns.net/)

---

## 🌐 Option 2: Deploy to Netlify (Alternative)

**Step 1: Create Netlify Account**
1. Go to [https://www.netlify.com](https://www.netlify.com)
2. Sign up with your GitHub account

**Step 2: Deploy from GitHub**
1. Click "Add new site" → "Import an existing project"
2. Choose GitHub and select `mohitkulkarni1999/solar`
3. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click "Deploy site"

**Step 3: Add Custom Domain**
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter: `solarisecorp.com`
4. Click "Verify" then "Add domain"

**Step 4: Configure DNS**

**Option A: Use Netlify DNS (Easier)**
1. Netlify will show you nameservers
2. Go to your domain registrar
3. Update nameservers to Netlify's nameservers
4. Wait for propagation (4-48 hours)

**Option B: Keep Your Current DNS**
Add these records at your domain registrar:

```
Type: A
Name: @
Value: 75.2.60.5
TTL: 3600

Type: CNAME  
Name: www
Value: [your-site-name].netlify.app
TTL: 3600
```

---

## 🔧 Deploy from Command Line (Advanced)

### Deploy to Vercel via CLI

**Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

**Step 2: Login**
```bash
vercel login
```

**Step 3: Deploy**
```bash
vercel --prod
```

**Step 4: Add Domain**
```bash
vercel domains add solarisecorp.com
```

---

## ❓ Troubleshooting

### "Invalid Configuration" Error
This means:
- No hosting service is connected to your domain
- OR DNS is pointing to wrong place
- OR No website is deployed yet

**Solution:** Complete one of the deployment options above

### Domain Not Working After Deployment
1. **Check DNS:** Use [https://www.whatsmydns.net/](https://www.whatsmydns.net/) to verify DNS propagation
2. **Clear Browser Cache:** Press Ctrl+Shift+Delete
3. **Wait:** DNS can take up to 48 hours (usually 15-30 min)
4. **Check SSL:** Wait for automatic SSL certificate (5-10 minutes after DNS)

### 404 Errors on Page Refresh
- Already configured in `vercel.json` and `netlify.toml`
- Redirects all routes to index.html for React Router to work

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure to:

- [x] ✅ Web3Forms contact form configured
- [x] ✅ Google Maps embedded
- [x] ✅ All images optimized
- [x] ✅ Responsive design tested
- [x] ✅ Configuration files created (`vercel.json`, `netlify.toml`)

---

## 🎯 Recommended: Vercel

**Why Vercel?**
- ✅ **Fastest deployment** - 2 minutes to live
- ✅ **Free SSL certificate** - Automatic HTTPS
- ✅ **Global CDN** - Super fast worldwide
- ✅ **Auto deployments** - Updates when you push to GitHub
- ✅ **Zero configuration** - Works out of the box
- ✅ **Custom domains** - Easy to add
- ✅ **Free tier** - More than enough for your site

---

## 🔐 After Deployment

1. **Enable HTTPS:** Both Vercel and Netlify provide free SSL certificates automatically
2. **Test Contact Form:** Submit a test form to verify Web3Forms works in production
3. **Check Performance:** Use [PageSpeed Insights](https://pagespeed.web.dev/)
4. **Set up Analytics:** Consider Google Analytics or Vercel Analytics

---

## 🆘 Need Help?

**Vercel Documentation:** [https://vercel.com/docs](https://vercel.com/docs)  
**Netlify Documentation:** [https://docs.netlify.com](https://docs.netlify.com)  
**DNS Help:** [https://support.cloudflare.com/hc/en-us/articles/360019093151](https://support.cloudflare.com/hc/en-us/articles/360019093151)

---

## ✅ Quick Start (Copy & Paste)

```bash
# Build your project locally to test
npm run build

# Deploy to Vercel (after installing Vercel CLI)
npm install -g vercel
vercel login
vercel --prod
```

Your site will be live in minutes! 🚀
