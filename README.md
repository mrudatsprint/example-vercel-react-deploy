# Example: Vue Application to Deploy with Vercel using FusionAuth

This repository contains a Vue application that works with a Vercel deployment. It is based off the [Vue.js quickstart](https://fusionauth.io/docs/quickstarts/quickstart-javascript-vue-web) and will use an instance of FusionAuth for authentication.

## Prerequisites
- [FusionAuth]: A publicly available instance of FusionAuth.
- [Github]: A [Github](https://github.com) account.
- [Vercel]: A [Vercel](https://vercel.com) account.

## Vue complete-application

The `complete-application` directory contains a minimal Vue app configured to authenticate with a running intance of FusionAuth.

For more details and how to run the vue application locally, please see the [Vue.js quickstart](https://fusionauth.io/docs/quickstarts/quickstart-javascript-vue-web).

## Usage
For more detailed information please be sure to check out the [How To Deploy An Application On Vercel That Uses FusionAuth For Authentication](https://fusionauth.io/blog) blog post. The basic steps are below.

### Fork Repository
Fork this repository to your Github account by clicking on the Fork button above. 

### Detach Fork
To insure you are not trying to push changes to the FusionAuth repo, you will need to detach the fork you created. Go to the newly forked repository on your account. On GitHub, navigate to the main page of the repository. Under your repository name, click Settings. If you cannot see the "Settings" tab, select the dropdown menu, then click Settings. On the "General" settings page (which is selected by default), scroll down to the "Danger Zone" section, and click Leave fork network.

### Update FusionAuth Information
You will need to edit the complete-application/src/main.ts file and update the following values with the information pertinent to your FusionAuth instance.

- clientId: 'ec526002-35cc-4e6e-8f5b-0e4fba2b08c8',
- serverUrl: 'https://auth.codegremlins.net',
- redirectUri: 'https://changebank.codegremlins.net',
- postLogoutRedirectUri: 'https://changebank.codegremlins.net',

### Update Your Repo With Vercel Information

When you set up Vercel to point to this repo, you will need some information from Vercel as well as a token. You will have to add the following to your repository secrets.

- VERCEL_TOKEN
- VERCEL_ORG_ID
- VERCEL_PROJECT_ID

### Execution
Under the .github\workflows folder there is a deploy-to-vercel.yml file that is a Github action. This is set up to run on any pushes to the main branch or when the Run workflow button is clicked fromt he Actions page.