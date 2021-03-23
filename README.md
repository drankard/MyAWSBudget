# My budget

I have experienced billing surprises to many times. therefore..
This is one of the first stacks I deploy to accounts I work with 

This CDK app will install a COST budget, threshold is set to  100% and will send a mail to the email recipient when reached
Configure the context in cdk.json

## Prerequisites

* Install AWS CDK \
  https://docs.aws.amazon.com/cdk/latest/guide/work-with-cdk-typescript.html
* Bootstrap your account with "the modern template" \
https://docs.aws.amazon.com/cdk/latest/guide/bootstrapping.html

`CDK_NEW_BOOTSTRAP=1 cdk bootstrap aws://<ACCOUNT-NUMBER>/<REGION>`

* Clone the project and cd to the directory
* Synthesize and deploy the app
  * `npm run synth` 
  * `npm cdk deploy`



## Useful commands

 * `npm run clean`   delete cdk.out and ts-build.out
 * `npm run synth`   clean, tsc build and cdk synth
 * `npm run test`    perform the jest unit tests
 * `npm cdk deploy`      deploy this stack to your default AWS account/region
