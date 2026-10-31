import { FLAME_ELEMENTIUM_ID, TRADE_HOUSE_TAX } from './data/shopItems'

// FE you get from selling `quantity` of an item on the Trade House, after tax.
export function offerValue(itemId: string, quantity: number, unitPrice: number): number {
  const gross = quantity * unitPrice
  return itemId === FLAME_ELEMENTIUM_ID ? gross : gross * (1 - TRADE_HOUSE_TAX)
}

// A farmed stone costs what selling it would earn instead: its price after tax.
export function farmedStonePrice(stonePrice: number): number {
  return stonePrice * (1 - TRADE_HOUSE_TAX)
}

// Most Divinity Stones worth paying for an offer so that profit is at least
// `marginPercent` of what the offer sells for: stones × stonePrice ≤ value × (1 − margin).
export function maxStoneCost(value: number, stonePrice: number, marginPercent: number): number {
  return Math.floor((value * (1 - marginPercent / 100)) / stonePrice)
}
