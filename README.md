# Employee Matching Game



### Deployment
- Requires AWS CLI
- `aws cloudformation deploy --template ./template-hz.yml --stack-name TheBeefIoHostedZoneStack`
- `aws cloudformation deploy --template ./template.yml --stack-name FearlessEmployeeMatchGameStack`
- `aws s3 sync . s3://match.thebeef.io --exclude "*" --include index.html --include scripts.js --include styles.css --include "img/*" --acl public-read`