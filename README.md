<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">Developer's Portfolio ✨</h1>

  <p align="center">
    It is a personal static website/portfolio template hosted with GitHub Pages, built to showcase my recent projects.
    <br />
    <strong>Site URL / Demo » </strong>
    <a href="https://palkesh-baraiya.github.io/portfolio"> palkesh-baraiya.github.io/portfolio</a>
    <br />
    <br />
    <a href="https://palkesh-baraiya.github.io/portfolio/">About Me</a>
  </p>
</p>

[![GitHub forks](https://img.shields.io/github/forks/palkesh-baraiya/portfolio?style=for-the-badge)](https://github.com/palkesh-baraiya/portfolio/network)
[![GitHub license](https://img.shields.io/github/license/palkesh-baraiya/portfolio?style=for-the-badge)](https://github.com/palkesh-baraiya/portfolio/blob/master/LICENSE)
[![Node Version](https://img.shields.io/static/v1?label=Node&message=14.17.3&color=026e00&style=for-the-badge)](https://nodejs.org)
[![npm Version](https://img.shields.io/static/v1?label=npm&message=7.19.1&color=cb0000&style=for-the-badge)](https://nodejs.org)


## Prerequisites

You should have [Nodejs](https://nodejs.org/en/) and [Git](https://git-scm.com/downloads) installed on your PC. You should also own a GitHub account.

## Setup

1. Fork this repoistory and clone it to your local machine.
    ```sh
      git clone https://github.com/<your-username>/portfolio.git
    ``` 

2. Edit the [config/config.js](https://github.com/palkesh-baraiya/portfolio/blob/main/config/config.js) file. Replace [config/profile.png](https://github.com/palkesh-baraiya/portfolio/blob/main/config/profile.png) with your image. 
    >Note: You need to rename your image file as `profile.png`.

3. Run following scripts in terminal/command prompt to install dependencies.
    ```sh
      npm install
      npm run build
    ```
## Testing

1. To test on your local server, run the following command:
    ```sh
      npm run dev
    ```

2. Open the browser to http://localhost:3000/

## Deployment

If it works locally, you can deploy your project to GitHub Pages. GitHub Pages provides two types of free domains, `<username>.github.io` and `<username>.github.io/<repository>`. You can choose the one that suits your needs. You can learn more about domain types from [here](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites).

### Deploy to \<your-username>.github.io/portfolio

Simply you just need to commit and push your changes to github. And [GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions#overview) will take care of the deployment. Your site will be available at `https://<your-username>.github.io/portfolio`

### Deploy to \<your-username>.github.io

Create a new repository with your username as `<your-username>.github.io`. And let the following command do the job for you.

```sh
  npm run predeploy
  node scripts/pages.js <your-username> master
```

Your site will be available at `https://<your-username>.github.io`

>Note: You need to replace `<your-username>` with your username. To add CNAME for custom domain, see [scripts/cname.js](https://github.com/palkesh-baraiya/portfolio/blob/main/scripts/cname.js)


<!-- LICENSE -->
# License

Distributed under the `MIT` License. See [LICENSE](https://github.com/palkesh-baraiya/portfolio/blob/main/LICENSE) for more information.
