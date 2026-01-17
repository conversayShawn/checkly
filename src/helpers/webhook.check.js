import { WebhookAlertChannel } from "checkly/constructs"

const webhookChannel = new WebhookAlertChannel("webhook-channel-1", {
  name: "Basic Webhook",
  method: "POST",
  url: new URL(`${{CHECKLY_WEBHOOK}}`),
  template: JSON.stringify({
    message: "Check {{ALERT_TITLE}} is {{ALERT_TYPE}}",
    timestamp: "{{STARTED_AT}}",
  }),
})