import arcjet, { tokenBucket } from "@arcjet/next"

const aj = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics: ["userId"],
    rules: [
        tokenBucket({
            mode: "LIVE",
            refillRate: 1,
            interval: 3600,
            capacity: 1,
        })
    ]
})

export default aj;