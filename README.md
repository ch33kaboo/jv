# Jeunesse Volontaire Website

This is a Website built for the _Jeunesse Volontaire_ Association. Check it out at [jeunessevolontairesba.dz](https://jeunessevolontairesba.dz).

[![Netlify Status](https://api.netlify.com/api/v1/badges/cdee0b1f-fd84-4d97-9ade-df17352d0d58/deploy-status)](https://app.netlify.com/sites/jvdz/deploys)

## Used Technologies

- **SvelteKit** & **Svelte** for the frontend
- **Supabase** for the backend (database for storing new members)
- **Sanity** for the CMS (content management backend)
- **Zod** & **SvelteKit Superforms** for the form data validation
- **TailwindCSS** & **daisyUI** for the styling
- **StatCounter** for the web analytics

Although open-sourcing comes with security risks, this project is public to showcase its implementation and help the Svelte community build similar projects. Also, it's a fun challenge for me to see if I can build a secure web app while keeping the code open-source!

## Getting Started

1. Clone the repository to your local machine.
2. Copy the `.env.example` file and rename it to `.env`.
3. Configure the Supabase environment variables in the `.env` file with valid Supabase project credentials.

## Contributing

This project is not open for contributions. If you encounter any issues with the website, open an issue, PRs will not be reviewed or accepted.

## CI/CD Pipeline

This project uses a CI/CD pipeline. Each time a commit is pushed to the `production` branch in this repo, Netlify automatically builds and deploys the latest version of the site.

Since this repo is public, but Netlify needs to access the Supabase environment variables (which I don't want to expose here), the Supabase environment variables are stored in the Netlify environment variables.
