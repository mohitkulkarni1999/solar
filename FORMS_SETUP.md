# Form Setup Guide

## Web3Forms Integration

Your website uses **Web3Forms** for contact form submissions. This is a free service that doesn't require a backend server.

### Current Configuration

- **Access Key**: `d290924d-4cb2-487c-8614-3c8e9accff35`
- **Configuration File**: `src/config/forms.js`
- **Forms Using This Config**:
  - Home page (Hero section form)
  - Contact page (Main contact form)

### How It Works

1. User fills out the form
2. Form data is sent to Web3Forms API
3. Web3Forms forwards the submission to your registered email
4. User sees success/error message

### Troubleshooting

If forms are not working:

1. **Verify Access Key**: Make sure the access key in `src/config/forms.js` is correct
2. **Check Email**: Log into your Web3Forms account at https://web3forms.com
3. **Verify Email Address**: Ensure your email is verified in Web3Forms dashboard
4. **Check CORS**: Web3Forms should automatically handle CORS for your domain
5. **Test Locally**: Forms work on localhost and deployed sites

### Testing Forms

After deploying your site:
1. Visit your website
2. Fill out any contact form
3. Submit the form
4. Check your registered email for the submission

### Need Help?

- Web3Forms Documentation: https://docs.web3forms.com
- Web3Forms Dashboard: https://web3forms.com/dashboard
- Support: https://web3forms.com/contact

### Security Note

The access key is visible in the frontend code, which is normal for Web3Forms. The key only allows sending emails to YOUR registered email address, so it's safe to expose.
