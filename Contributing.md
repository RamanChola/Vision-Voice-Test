# Contribution Guidelines
Thank you for wanting to contribute!
Please note that this project is released with a [Contributor Code of Conduct](Code-of-Conduct.md). By participating in this project you agree to abide by its terms.

You'll need a [GitHub account](https://github.com/join)!

## Documentation
If you have something awesome to contribute, this is how you do it.

1. Fork the repository
2. Make the required changes by editing the README.md . You can use [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/).
3. Please ensure your pull request adheres to the [PR guidelines](pull_request_template.md). 

## Website

- Fork the repository on GitHub
- Clone the repo
  - `git clone https://github.com/{Github-UserName}/Vision-Voice-Test.git`
- Change the directory
  - `cd Vision-Voice-Test/website/`
  
  ### Work in frontend:
  - `cd frontend`
- Install the Project Dependencies
  - `npm install`
- Run React Server
  - `npm start`
- Local Host
  - `http://localhost:3000/`

  ### Work in backend:
  - `cd backend`
- Install the Project Dependencies
  - `npm install`
- Make your own firebase project
  - Go to Project Settings
  - ![image](https://user-images.githubusercontent.com/72353221/137525898-e9266b08-a4f9-4e90-bc55-717286d056ec.png)
  - Go to Service accounts section, create a new service account and click on "Generate new private key" 
  - ![image](https://user-images.githubusercontent.com/72353221/137526093-63386f87-f239-4e52-9f77-16cccc81d90d.png)
- Copy & paste the private key
  - Copy and paste private key (a JSON object) in website/backend/config/adminkey.js without double inverted commas;
    - `const api_key = "YOUR_PRIVATE_KEY_HERE";` 
  - Save the changes
- Run Node Server
  - `npm start`
- Local Host
  - `http://localhost:5000/`



## Make all the changes based on the issue
## Commit message

Please follow the below format while writing commit messages

```bash
  title: One line description about your change
  <Blank Line>
  description: An optional description of your changes.
```


### Keep in mind

For an overview of the project - https://github.com/nehakalbande/Vision-Voice-Test/projects
While contributing to the website, the contributors are expected to follow the below mentioned guidelines:

1. Please follow the file structure recommended in the official [Reactjs documentation](https://reactjs.org/docs/faq-structure.html) [Nodejs documentation](https://nodejs.org/en/docs/).
2. Try to create separate Javascript files for each React component that you add to the website. 
3. Please make sure you include comments in your code wherever necessary. 
4. **Include only one commit in each of your pull requests.**
5. Attach screenshots whenever any changes are made to the design, stylesheets, layout etc. of the website.
6. All PRs to be made in the master branch only.
7. Upload a well labeled file in the 'website' folder if it includes css or react.js Otherwise upload your file in the 'documents' folder if its a figma design or an infographic.

## Updating your Pull Request

Sometimes, a maintainer will ask you to edit your Pull Request before it is included. This is normally due to spelling errors or because your PR didn't match the contributing guidelines.

[Here](https://github.com/RichardLitt/knowledge/blob/master/github/amending-a-commit-guide.md) is a write up on how to change a Pull Request, and the different ways you can do that.



You can also contribute by addressing and commenting on issues, providing your suggestions and opinions on them. This will help the community grow! :smile:


