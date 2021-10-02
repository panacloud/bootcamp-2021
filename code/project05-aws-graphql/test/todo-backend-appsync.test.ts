import {
  expect as expectCDK,
  matchTemplate,
  MatchStyle,
} from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import * as TodoBackendStack from "../lib/todoBackend";

test("Empty Stack", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new TodoBackendStack.TodoBackendStack(app, "MyTestStack");
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        Resources: {},
      },
      MatchStyle.EXACT
    )
  );
});
