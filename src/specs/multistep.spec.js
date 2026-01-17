import { test, expect } from "@playwright/test"

test('multistep', async ({request}) => {
    const sessionId = `session-${Math.random().toString(36).substring(2, 9)}`

    await test.step('POST', async () => {
        
        const postResponse = await request.post(`${process.env.AWS_URL}/api/cart`, {
            data: {
                userId: sessionId,
                item: { productId: "0PUK6V6EV0", quantity: 1 }
            }
        })
        expect(postResponse.status()).toBe(200)
    })
    await test.step('GET', async () => {
        const getResponse = await request.get(`${process.env.AWS_URL}/api/cart?sessionId=${sessionId}`)
        expect(getResponse.status()).toBe(200)

        const cartData = await getResponse.json()
        // console.log(JSON.stringify(cartData, null, 1));
        expect(cartData.items[0].productId).toBe('0PUK6V6EV0')
        expect(cartData.items[0].quantity).toBe(1)
    })
    await test.step('DELETE', async () => {
        const deleteResponse = await request.delete(`${process.env.AWS_URL}/api/cart`, {
            data: {
                userId: sessionId
            }
        })
        expect(deleteResponse.status()).toBe(204);
    })
    await test.step('final GET', async () => {
        const getResponse = await request.get(`${process.env.AWS_URL}/api/cart?sessionId=${sessionId}`)
        
        const cartData = await getResponse.json()
        expect(cartData.items.length).toBe(0)
    })
})