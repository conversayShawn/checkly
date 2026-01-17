import { ApiCheck, RetryStrategyBuilder } from "checkly/constructs";
import { checklyChallenge } from "../helpers/group.check.js";

new ApiCheck('env-var-api', {
    name: 'env var api check',
    group: checklyChallenge,
    retryStrategy: RetryStrategyBuilder.fixedStrategy({
        baseBackoffSeconds: 30,
        maxRetries: 6,
        sameRegion: false
    }),
    tag: ['API'],
    request: {
        method: 'GET',
        url: '{{AWS_URL}}/api/products',
    }
})