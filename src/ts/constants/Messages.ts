const canNotPickupMessages: Array<string> = [
    "I can't pick that up",
    "This doesn't fit in my pocket",
    "This item is a bit too heavy to pick up",
    "I can't",
    "Too heavy",
    "This doesn't look like something I can carry"
]

export function getRandomCanNotPickupMessage(): string {
    return canNotPickupMessages[Math.round(Math.random()*canNotPickupMessages.length)]
}