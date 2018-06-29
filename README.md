# App~rentice WebApp

## Live Environments
AWS app name: `app-rentice`
- **staging**
  - AWS env. name: `app-rentice-staging`
  - URL: https://staging.app-rentice.edu
- **production**
  - AWS env. name: `app-rentice-production`
  - URL: https://www.app-rentice.edu

## Database Setup
### Local Machine
1. Install postgres
2. Create a database - "App_rentice"
3. Grant all permissions to database to your user
4. Edit .env.dev to include your database username & password

## Running
### Local Machine
#### Development Settings 

1. frontend/ `yarn start`
2. Install required packages: `. build.sh`
3. Start server on local machine: `. run.dv.sh`
4. Open in browser `localhost:8000`

#### Production Settings 

1. frontend/ `yarn build`
2. Install required packages: `. build.sh`
3. Collect static files for django server: `python manage.py collectstatic`
4. Start server on local machine: `. run.loc.prod.sh`
5. Open in browser `localhost:8000`

### Deploy
1. Install Elastic Beanstalk cli: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html
2. Configure Elastic Beanstalk cli: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-configuration.html
    1. *Select a default region:* `1) us-east-1 : US East (N. Virginia)`
    2. Provide your `aws-access-id` and `aws-secret-key`
    3. *Select an application to use:* Select (Do **NOT** Create) `redflag-app`
3. Run `python manage.py collectstatic` to move the built files into the satic directory
4. Deploying: `eb deploy [AWS env. name]`

## Guidelines
- If adding new packages in import, run pipreqs . --force to update requirements.txt. Do not modify requirements.txt manually.
