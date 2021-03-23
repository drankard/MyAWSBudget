import * as cdk from '@aws-cdk/core';
import * as budget from "@aws-cdk/aws-budgets";

export class AwsBudgetStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const dailyBudget = new budget.CfnBudget(this, 'MyBudget', {
      budget: {
        budgetName: 'MyBudget',
        budgetLimit: {
          amount: this.node.tryGetContext('amount'),
          unit: this.node.tryGetContext('currency')
        },
        budgetType: 'COST',
        timeUnit: this.node.tryGetContext('period')
      },
      notificationsWithSubscribers: [{
        subscribers: [{
          subscriptionType: 'EMAIL',
          address: this.node.tryGetContext('recipient _mail')
        }],
        notification: {
          comparisonOperator: 'GREATER_THAN',
          notificationType: 'ACTUAL',
          threshold: 100,
          thresholdType: 'PERCENTAGE'
        }
      }]
    });
  }
}
