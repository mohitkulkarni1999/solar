# Contact Form Setup Guide (No Backend Required!)

Your contact form is now integrated with **Web3Forms** - a free service that sends form submissions directly to your email.

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Your Free Access Key

1. Go to **[https://web3forms.com](https://web3forms.com)**
2. Click **"Create Access Key"**
3. Enter your email address (where you want to receive form submissions)
4. Click **"Create Access Key"**
5. Copy the access key they provide

### Step 2: Add Your Access Key

Open `src/pages/Contact.jsx` and replace this line (line 125):

```javascript
access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your actual key
```

With your actual key:

```javascript
access_key: 'YOUR-ACTUAL-KEY-HERE', // Example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'
```

### Step 3: Test It!

1. Run your application
2. Go to the Contact page
3. Fill out the form
4. Submit it
5. Check your email inbox!

## ✅ Features Included

- ✅ **Completely FREE** - No hidden costs
- ✅ **No backend required** - Runs entirely in the browser
- ✅ **No submission limits** - Unlike other services
- ✅ **Email notifications** - Get submissions directly in your inbox
- ✅ **Loading states** - Shows "Sending..." while processing
- ✅ **Error handling** - Alerts users if something goes wrong
- ✅ **Success message** - Beautiful thank you message after submission
- ✅ **Auto-reset form** - Clears after 5 seconds

## 📧 What You'll Receive

When someone submits the form, you'll receive an email with:
- Name
- Email address
- Phone number
- Property type (Residential/Commercial/Industrial)
- Message
- Subject line showing the property type

## 🔧 Advanced Configuration (Optional)

### Custom Email Template

You can customize what you receive by modifying the fetch body in `Contact.jsx`:

```javascript
body: JSON.stringify({
  access_key: 'YOUR_KEY',
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  property_type: formData.propertyType,
  message: formData.message,
  from_name: 'Solarise Corp Contact Form',
  subject: `New Contact - ${formData.propertyType}`,
  // Add custom fields here
  custom_field: 'custom_value'
})
```

### Redirect After Submit

To redirect users to a thank you page instead of showing a message:

```javascript
if (result.success) {
  window.location.href = '/thank-you'; // Create this page
}
```

### Spam Protection

Web3Forms includes built-in spam protection. For additional security, you can add:

1. **Honeypot field** (invisible field that bots fill out)
2. **reCAPTCHA** (Google's anti-bot service)

Visit [Web3Forms documentation](https://docs.web3forms.com) for details.

## 🎯 Alternative Services (If You Want Options)

### 1. EmailJS
- **Free**: 200 emails/month
- **Setup**: Requires account + template creation
- **Website**: [emailjs.com](https://www.emailjs.com)

### 2. Formspree
- **Free**: 50 submissions/month
- **Setup**: Very simple, just need email
- **Website**: [formspree.io](https://formspree.io)

### 3. Getform
- **Free**: 100 submissions/month
- **Setup**: Requires account
- **Website**: [getform.io](https://getform.io)

## ❓ Troubleshooting

**Form not sending?**
- Check if you replaced `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key
- Check browser console for errors (F12 → Console tab)
- Verify your email in Web3Forms dashboard

**Not receiving emails?**
- Check spam/junk folder
- Verify the email address in Web3Forms dashboard
- Wait a few minutes (can take 1-2 minutes)

**CORS errors?**
- Web3Forms supports CORS by default, this shouldn't happen
- If it does, clear browser cache and try again

## 🎉 You're Done!

Your contact form now works without any backend setup. Just add your access key and you're ready to receive messages!

---

**Need help?** Check [Web3Forms Documentation](https://docs.web3forms.com)
