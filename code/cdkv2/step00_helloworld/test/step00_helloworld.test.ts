import * as cdk from 'aws-cdk-lib';
import * as Step00Helloworld from '../lib/step00_helloworld-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Step00Helloworld.Step00HelloworldStack(app, 'MyTestStack');
    // THEN
    const actual = app.synth().getStackArtifact(stack.artifactId).template;
    expect(actual.Resources ?? {}).toEqual({});
});
