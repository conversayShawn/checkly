import { WebhookAlertChannel } from "checkly/constructs"

const jiraAuth = Buffer.from(`${process.env.JIRA_EMAIL}:${process.env.JIRA_TOKEN}`).toString('base64');

export const customWebhook = new WebhookAlertChannel("webhook-alert", {
  name: "webhook - error and location",
  method: "POST",
  url: new URL(`https://${process.env.JIRA_INSTANCE}.atlassian.net/rest/api/3/issue`),
  sendFailure: true,
  sendDegraded: true,
  sendRecovery: false,
  headers: [
    { key: 'Authorization', value: 'Basic aGlyZS5zaGF3bi5oYXJyaXNAZ21haWwuY29tOkFUQVRUM3hGZkdGMFNGS2wyMHY5SjlQR0VseEVXUDNfMTJ5OUU4TzNoQWJWTmZwbE1Sc1JNb29ZbW5QdV83eWdDY3RPT09oQmpiQjNhdXJuRFNIQW5TMVg1UlFIbmh6Y0p0cmMtazY0amhDajVIckRrY21pcTdCRW04eUxHQXI0ZHFkbW1sQlJWTnFnZEtsd25sN21QUkMwT2dUSGcwSFpmUHNqSl90cDJ1dFF2ZHp1NzdQZVVubz01RjdEQTMxMQ==' },
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
                text: "Status: {{ALERT_TYPE}}\nLocation: {{RUN_LOCATION}}\nError: {{ERROR_MESSAGE}}"
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