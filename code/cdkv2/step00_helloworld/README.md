https://docs.aws.amazon.com/cdk/latest/guide/work-with-cdk-v2.html

https://docs.aws.amazon.com/cdk/latest/guide/hello_world.html

If facing this bug
//https://www.gitmemory.com/issue/aws/aws-cdk/14738/844554973


install: npm install -g aws-cdk@next

mkdir step00_helloworld

cd tep00_helloworld

//in empty directory
cdk init app --language typescript

npm run build

cdk bootstrap

cdk deploy

cdk distory






# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
