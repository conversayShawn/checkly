import { WebhookAlertChannel } from "checkly/constructs"

const email = process.env.JIRA_EMAIL || 'MISSING_EMAIL';
const token = process.env.JIRA_TOKEN || 'MISSING_TOKEN';
const instance = process.env.JIRA_INSTANCE || 'MISSING_INSTANCE';

const jiraAuth = Buffer.from(`${email}:${token}`).toString('base64');

export const customWebhook = new WebhookAlertChannel("webhook-alert", {
  name: "webhook - error and location",
  method: "POST",
  url: new URL(`https://${instance}.atlassian.net/rest/api/3/issue`),
  sendFailure: true,
  sendDegraded: false,
  sendRecovery: false,
  headers: [
    { key: 'Authorization', value: `Basic ${jiraAuth}` },
    { key: 'Content-Type', value: 'application/json' }
  ],
  template: JSON.stringify({
    fields: {
      description: {
        version: 1,
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "Status: {{ALERT_TYPE}}\nLocation: {{RUN_LOCATION}}\nError: {{CHECK_ERROR_MESSAGE}}\n Link: {{RESULT_LINK}}"
              }
            ]
          }
        ]
      },
      issuetype: {
        name: "Bug" 
      },
      labels: [
        "needs_investigation"
      ],
      project: {
        "key": "KAN"
      },
      summary: "{{ALERT_TITLE}}"
    }
  }),
})