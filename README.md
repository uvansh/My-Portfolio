
# This is my portfolio website where you can find projects and contact info.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS


## Setting up EmailJS for the Contact Form

This project uses EmailJS to send contact form submissions directly to your email inbox. Follow these steps to set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an Email Service:
   - Go to the EmailJS dashboard
   - Click on "Email Services" in the left sidebar
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the instructions to connect your email account

3. Create an email template:
   - Go to "Email Templates" in the left sidebar
   - Click "Create New Template"
   - Design your template with the following variables:
     - `{{user_name}}` - The sender's name
     - `{{user_email}}` - The sender's email
     - `{{message}}` - The message content
   - Save your template

4. Get your credentials:
   - Service ID: Found in the "Email Services" section
   - Template ID: Found in the "Email Templates" section
   - Public Key: Found in the "Account" section under "API Keys"

5. Add your credentials to the `.env.local` file:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

6. Restart your development server for the changes to take effect
