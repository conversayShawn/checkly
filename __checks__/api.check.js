import { ApiCheck } from "checkly/constructs";

new ApiCheck('env-var-api', {
    name: 'env var api check',
    tag: ['API'],
    request: {
        method: 'GET',
        url: '{{AWS_URL}}/api/products',
    }
})