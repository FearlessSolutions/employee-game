#!/bin/bash
aws cloudformation deploy --template ./template.yml --stack-name FearlessEmployeeMatchGameStack
aws s3 sync . s3://match.fearless.tech --exclude template.yml --exclude deploy.sh