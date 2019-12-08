# google-signin-using-passportjs

# Google+ SignIn API - Authentication using Passport.js

This project is created for learning purpose. In this project here is the glimpse, what we are going to do.
1. We are going to use Passport-Google Strategy to SignIn User
2. We will set up google account, create new project into Google Developer Console and get client id and client secret
3. Then we will do testing (For this project testing through Postman, we have to use different method which I have mentioned below.)


# Step for Setting Client Id and Client Secret

- [Open Google Developer Console](https://console.developers.google.com/)
- Create new Project
- Select Google+ API (From Library Section)
- Enable that API for your Linked Google Account
- Go to set [Consent](https://console.developers.google.com/apis/credentials/consent) Screen
- Click on Save (Add only project name, don't need to set other fields)
- Now you have to click on Create Credentials
- Select OAuth Cliet ID
- Select webapplication
- Give details of your API end points and so on (In my case, it is 	http://localhost:4001)
- Store your Client ID and Client Secret somewhere. It will be required at the time of Authentication using Passport


# How to test this in Postman.

Here, we have to pass access_token in request body. So to generate access_token follow below steps.

- Go to this [Link](https://developers.google.com/oauthplayground/)
- Choose Google+ API v1 (from Step1)
- Enable below two scopes
> https://www.googleapis.com/auth/userinfo.email

> https://www.googleapis.com/auth/userinfo.profile
- Click on Authorize APIs
- Choose your Google Account
- Now click on Exchange authorization code for tokens button.
- You will get Access Token, copy that (e.g. ya29.Il-0BzcnY_qWfbAKnxcvDRy8f-ruJ24BFHUx17p0v_GLZOsO8mTtSv_iGCf4O_tFcxnakpJJ5KAUf9Tiso34WdHdetDdgpj40w74cfdY0eqzh1eZUjd670eEn69kV7y***)
- Use it for request payload


# cURL Script for SignIn API

```sh
curl -X POST \
  http://localhost:4001/google/oauth \
  -H 'Content-Type: application/json' \
  -d '{
	"access_token": "ya29.Il-0BwaXuKybinPKs1qHbUB4fhiY83b2cacjFwyP3F3_3olUrpbsFzq3bW63iYsxfwLmM6-enNcZiS7CnwpZuswivkSMaEjIykWU1w2UzDkAtNrmu3xk6ibuUrAD3****"
}'
```