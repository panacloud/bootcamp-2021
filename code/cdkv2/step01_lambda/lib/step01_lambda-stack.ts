import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_lambda as lambda} from "aws-cdk-lib";
import {aws_apigateway as apigw} from "aws-cdk-lib";
import { CfnIndex } from 'aws-cdk-lib/lib/aws-kendra';

export class Step01LambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const hello = new lambda.Function(this, "HelloHandler", {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("lambda/hello"),
      handler: "index.handler",
    });

    new apigw.LambdaRestApi(this, "Endpoint", {
      handler: hello,
    });
  }
}
