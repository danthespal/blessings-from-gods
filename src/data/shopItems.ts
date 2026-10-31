// Blessings from Gods shop pool (SS14 Tartarus).
// Source: https://tlidb.com/en/Blessings_from_Gods (beta data, may differ from live).
// `name: null` rows are listed on TLIDB without a name.

export type ShopItem = {
  id: string
  name: string | null
  quantity: number | null
  weight: number
}

export const REFRESH_COST_STONES = 50
export const TRADE_HOUSE_TAX = 0.125

export const shopItems: ShopItem[] = [
  { id: 'unknown-1', name: null, quantity: null, weight: 298116 },
  { id: 'flame-sand-20', name: 'Flame Sand', quantity: 20, weight: 20000000 },
  { id: 'flame-sand-60', name: 'Flame Sand', quantity: 60, weight: 6666667 },
  { id: 'unknown-2', name: null, quantity: null, weight: 8923077 },
  { id: 'flame-elementium-5', name: 'Flame Elementium', quantity: 5, weight: 1784615 },
  { id: 'flame-elementium-10', name: 'Flame Elementium', quantity: 10, weight: 892308 },
  { id: 'energy-cores-10', name: 'Energy Cores', quantity: 10, weight: 10000000 },
  { id: 'energy-cores-20', name: 'Energy Cores', quantity: 20, weight: 5000000 },
  { id: 'netherrealm-resonance-10', name: 'Netherrealm Resonance', quantity: 10, weight: 10000000 },
  { id: 'netherrealm-resonance-20', name: 'Netherrealm Resonance', quantity: 20, weight: 5000000 },
  { id: 'netherrealm-resonance-100', name: 'Netherrealm Resonance', quantity: 100, weight: 1000000 },
  { id: 'wedge-magic-20', name: 'Transcendence Wedge (Magic)', quantity: 20, weight: 20000000 },
  { id: 'wedge-rare-20', name: 'Transcendence Wedge (Rare)', quantity: 20, weight: 2000000 },
  { id: 'unknown-3', name: null, quantity: null, weight: 400000 },
  { id: 'unknown-4', name: null, quantity: null, weight: 100 },
  { id: 'unknown-5', name: null, quantity: null, weight: 100 },
]
