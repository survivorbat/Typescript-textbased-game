const canNotPickupMessages: Array<string> = [
    "I can't pick that up",
    "This doesn't fit in my pocket",
    "This item is a bit too heavy to pick up",
    "I can't",
    "Too heavy",
    "This doesn't look like something I can carry"
]

export function getRandomCanNotPickupMessage(): string {
    return canNotPickupMessages[Math.floor(Math.random()*canNotPickupMessages.length)]
}

const canNotBreakMessages: Array<string> = [
    "I can't break that",
    "Why would I do that?"
]

export function getRandomCanNotBreakMessage(): string {
    return canNotBreakMessages[Math.floor(Math.random()*canNotBreakMessages.length)]
}

const canNotUseMessages: Array<string> = [
    "I can't use that",
    "How would I use that?"
]

export function getRandomCanNotUseMessage(): string {
    return canNotUseMessages[Math.floor(Math.random()*canNotUseMessages.length)]
}