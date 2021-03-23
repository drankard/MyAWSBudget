#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsBudgetStack } from '../lib/aws-budget-stack';

const app = new cdk.App();
new AwsBudgetStack(app, 'AwsBudgetStack');
