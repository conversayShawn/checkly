import { WebhookAlertChannel } from "checkly/constructs"

export const customWebhook = new WebhookAlertChannel("webhook-alert", {
  name: "webhook - error and location",
  method: "POST",
  url: new URL(process.env.CHECKLY_WEBHOOK || 'https://wha993b93770e2b45531.free.beeceptor.com'),
  sendFailure: true,
  sendDegraded: true,
  sendRecovery: true,
  template: JSON.stringify({
    alert: {
      title: "{{ALERT_TITLE}}",
      type: "{{ALERT_TYPE}}",
      error_message: "{{ERROR_MESSAGE}}", 
      check: {
        name: "{{CHECK_NAME}}",
        location: "{{RUN_LOCATION}}",
      }
    },
    links: {
      result: "{{RESULT_LINK}}",
    },
  }),
})