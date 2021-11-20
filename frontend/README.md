# cmubtg-website

This repository contains the code and build materials for
[cmubtg.com](https://cmubtg.com). It is based off of the popular [Create React
App](https://github.com/facebook/create-react-app) platform maintained by
Facebook and is served via GitHub Pages.

There are two branches: `master` and `gh-pages`, the former which is used to
actually make changes to the website and the latter as the branch where assets
are placed for live production.

## Getting started

Let's make some changes to the website. This documentation is written from the
perspective that you are using a UNIX-based operating system to develop, such as
macOS, Linux, or WSL.

### Pre-requisites

You'll be modifying this website by making [pull
requests](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request),
rather than directly pushing to source. *Make sure you understand what a pull
request is before proceeding further.*

Also, take this time to ensure you are in the CMUBTG organization on GitHub.

> **Recommended**
>
> [Learn how to add your SSH key to
> GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
> so its harder for people to mimic your account. It's a good security practice.

### Basic development

- Fork this repository and clone to your local machine. 

- Fetch the dependencies for this project by running `npm install`. You will
  probably get dependency vulnerability warnings, but this unfortunately a
  normal aspect of npm development.

- To edit and see your changes take place in real time, start a local
  development server by running `npm start`. This should open a new browser tab
  at `localhost:3000` with the cmubtg.com homepage after it loads.

> While running a server, your changes will 'hot reload' instantly on most
> changes. If it looks like something isn't automatically refreshing, as is the
> case when modifying things like `package.json`, then quit the server and
> re-run `npm start`.

## Directory structure

As of October 2021, the operative portion of the website takes on this form:

```
│
└── src
    ├── App.js
    ├── App.test.js
    ├── components
    │   ├── AlumniSummary.js
    │   ├── Companies.js
    │   ├── Company.js
    │   ├── Footer.js
    │   ├── HeaderAnnouncement.js
    │   ├── MailchimpForm.js
    │   ├── Navigation.js
    │   ├── TeamDescription.js
    │   ├── TeamPhoto.js
    │   ├── TeamSummary.js
    │   └── useForm.js
    ├── css
    │   ├── companies.css
    │   └── styles.css
    ├── images
    │   ├── alumni
    │   ├── amazon.svg
    │   ├── boeing.svg
    │   ├── bofa.svg
    │   ├── btg-cover.png
    │   ├── btg-logo-gray.svg
    │   ├── btg-logo-white-red.svg
    │   ├── btg-logo-white.svg
    │   ├── capitalone.svg
    │   ├── deloitte.svg
    │   ├── deutsche.svg
    │   ├── ibm.svg
    │   ├── mastercard.svg
    │   ├── microsoft.svg
    │   ├── paypal.svg
    │   ├── publicis.svg
    │   ├── pwc.svg
    │   ├── roblox.svg
    │   ├── spotify.svg
    │   ├── team
    │   ├── toggler.svg
    │   ├── volvo.svg
    │   └── yc.svg
    ├── index.js
    ├── pages
    │   ├── Alumni.js
    │   ├── Home.js
    │   ├── Projects.js
    │   └── Team.js
    └── serviceWorker.js
```

The `pages/` directory contains webpages that are comprised of components
located in the aptly-named `components/` directory. These components, such as
team photos and company logos, may themselves draw upon images and other assets
located in `images/`. This creates a clear structure for the website, and allows
for components to be reused across different pages in a sensible way.

Everything is styled by a single `css/styles.css` file, with
the sole exception being the relative sizing of the company logos on the
homepage, which is done in `css/companies.css`

## Deployment

Once you have made your changes, create a Git commit describing them and submit
a pull request as detailed above.

When your changes are approved, you can deploy the new version of the website by
running `npm run deploy`, which will compile the website for production-use and
push the website contents into the `gh-pages` branch on GitHub for public
consumption.

Well done!