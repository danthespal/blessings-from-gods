// Blessings from Gods shop pool (SS14 Tartarus).
// Sources: https://tlidb.com/en/Blessings_from_Gods (beta data) and the
// Torchcodex calculator's game data (https://legacy.torchcodex.com/latest/en/blessingsFromGods.html).
// Prices are in Flame Elementium (FE), the Trade House currency.

export type Item = {
  id: string
  name: string
  // Offer sizes the shop can show for this item.
  quantities: number[]
}

export const REFRESH_COST_STONES = 50
export const TRADE_HOUSE_TAX = 0.125
export const DEFAULT_PROFIT_MARGIN = 20

export const DIVINITY_STONE_ID = 'divinity-stone'
// Flame Elementium is the currency itself: always worth 1 FE, never sold, never taxed.
export const FLAME_ELEMENTIUM_ID = 'flame-elementium'

export const items: Item[] = [
  { id: FLAME_ELEMENTIUM_ID, name: 'Flame Elementium', quantities: [1, 5, 10] },
  { id: 'flame-sand', name: 'Flame Sand', quantities: [20, 60] },
  { id: 'divinity-fragment', name: 'Divinity Fragment', quantities: [200, 600] },
  { id: 'energy-cores', name: 'Energy Cores', quantities: [10, 20] },
  { id: 'netherrealm-resonance', name: 'Netherrealm Resonance', quantities: [10, 20, 100] },
  { id: 'wedge-magic', name: 'Transcendence Wedge (Magic)', quantities: [10, 20] },
  { id: 'wedge-rare', name: 'Transcendence Wedge (Rare)', quantities: [10, 20] },
  { id: 'wedge-legendary', name: 'Transcendence Wedge (Legendary)', quantities: [1] },
  { id: 'wedge-new-god', name: 'Transcendence Wedge (New God)', quantities: [1] },
  { id: 'truth-ember', name: 'Truth Ember', quantities: [10] },
  { id: 'ultimate-ember', name: 'Ultimate Ember', quantities: [1] },
]
