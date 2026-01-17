import { WebhookAlertChannel } from "checkly/constructs"

export const customWebhook = new WebhookAlertChannel("webhook-alert", {
  name: "webhook - error and location",
  method: "POST",
  url: new URL(process.env.CHECKLY_WEBHOOK),
  sendFailure: true,
  sendDegraded: false,
  template: JSON.stringify({
    title: "{{ALERT_TITLE}}",
    type: "{{ALERT_TYPE}}",
    error_message: "{{ERROR_MESSAGE}}", 
    check: {
      name: "{{CHECK_NAME}}",
      location: "{{RUN_LOCATION}}",
    },
    links: {
      result: "{{RESULT_LINK}}",
    },
  }),
})