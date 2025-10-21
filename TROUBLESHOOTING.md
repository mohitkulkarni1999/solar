# Form Submission Troubleshooting

## CORS Error Fix

If you're seeing CORS errors like:
```
Access to fetch at 'https://api.web3forms.com/submit' has been blocked by CORS policy
```

### Solution Steps:

#### 1. Verify Your Web3Forms Account

1. Go to https://web3forms.com/dashboard
2. Log in with your account
3. **Verify your email address** (check your inbox for verification email)
4. Confirm your access key: `d290924d-4cb2-487c-8614-3c8e9accff35`

#### 2. Check Access Key Status

In Web3Forms dashboard:
- Make sure the access key is **Active**
- Check if there are any restrictions on the key
- Verify the email where submissions should be sent

#### 3. Test on Deployed Site

CORS errors sometimes only occur on localhost. To test:
1. Deploy your site to production (Netlify, Vercel, etc.)
2. Test the form on the live site
3. Forms usually work fine once deployed

#### 4. Alternative: Use FormSubmit (if Web3Forms doesn't work)

If Web3Forms continues to have issues, you can use FormSubmit.co:

**Quick Fix:**
Replace in `src/config/forms.js`:
```javascript
export const WEB3FORMS_CONFIG = {
  accessKey: 'YOUR_EMAIL@example.com', // Use your actual email
  endpoint: 'https://formsubmit.co/ajax/YOUR_EMAIL@example.com'
};
```

FormSubmit doesn't require an access key, just your email address.

#### 5. Check Web3Forms Service Status

- Visit: https://status.web3forms.com
- Check if there are any ongoing issues

### Why CORS Errors Happen

1. **Email not verified** on Web3Forms (most common)
2. **Access key is invalid or expired**
3. **Web3Forms service is down** (rare)
4. **Localhost testing** (may work fine on deployed site)

### Testing Tips

1. **Check browser console** for detailed error messages
2. **Test on deployed site** first before debugging locally
3. **Verify email** is the #1 fix for CORS issues
4. **Wait 5-10 minutes** after creating new access key

### Contact Support

If none of these work:
- Web3Forms Support: https://web3forms.com/contact
- Check their Discord: https://discord.gg/web3forms

---

## Quick Test

Open browser console and run this test:

```javascript
fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    access_key: 'd290924d-4cb2-487c-8614-3c8e9accff35',
    name: 'Test',
    email: 'test@example.com',
    message: 'Test message'
  })
})
.then(res => res.json())
.then(data => console.log('SUCCESS:', data))
.catch(err => console.log('ERROR:', err));
```

If this works, your forms should work too. If not, the access key needs to be fixed in Web3Forms dashboard.
