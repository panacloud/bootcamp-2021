import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as ProjectRestfullApi from '../lib/project-restfull-api-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new ProjectRestfullApi.ProjectRestfullApiStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
