import { useEffect, useState } from 'react'
import { farmedStonePrice, maxStoneCost, offerValue } from './calc'
import {
  DEFAULT_PROFIT_MARGIN,
  DIVINITY_STONE_ID,
  FLAME_ELEMENTIUM_ID,
  TRADE_HOUSE_TAX,
  items,
} from './data/shopItems'

const STORAGE_KEY = 'bfg-calculator'

type Saved = { prices: Record<string, string>; margin: string }

function loadSaved(): Saved {
  const fallback = { prices: {}, margin: String(DEFAULT_PROFIT_MARGIN) }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? { ...fallback, ...JSON.parse(raw) } : fallback
  } catch {
    return fallback
  }
}

// Accepts "0.025" and "0,025"; returns null for empty or non-positive input.
function parsePrice(text: string | undefined): number | null {
  const value = Number((text ?? '').trim().replace(',', '.'))
  return text?.trim() && Number.isFinite(value) && value > 0 ? value : null
}

function formatFe(value: number): string {
  return value.toLocaleString(undefined, { maximumFractionDigits: 3 })
}

function StoneLimit({ stones }: { stones: number | null }) {
  if (stones === null) return <span className="muted">—</span>
  if (stones < 1) return <span className="skip">Skip</span>
  return <strong>{stones.toLocaleString()}</strong>
}

function App() {
  const [prices, setPrices] = useState<Record<string, string>>(() => loadSaved().prices)
  const [margin, setMargin] = useState(() => loadSaved().margin)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ prices, margin }))
    } catch {
      // Storage unavailable (private mode etc.): prices just won't persist.
    }
  }, [prices, margin])

  const stonePrice = parsePrice(prices[DIVINITY_STONE_ID])
  const marginValue = Number(margin.replace(',', '.'))
  const marginPercent = Number.isFinite(marginValue) ? Math.min(Math.max(marginValue, 0), 100) : 0

  const setPrice = (id: string, text: string) => setPrices((prev) => ({ ...prev, [id]: text }))

  return (
    <main>
      <header>
        <h1>Blessings from Gods Calculator</h1>
        <p className="muted">
          Enter current Trade House prices in Flame Elementium (FE). The table shows the most
          Divinity Stones worth paying for each shop offer.
        </p>
        <p className="muted">
          <strong>Bought</strong>: you buy your stones at the Trade House price.{' '}
          <strong>Farmed</strong>: you farm your stones, so each one costs what selling it would
          earn after tax.
        </p>
      </header>

      <section className="settings">
        <label>
          <span>Divinity Stone price (FE each)</span>
          <input
            type="text"
            inputMode="decimal"
            placeholder="e.g. 0.025"
            value={prices[DIVINITY_STONE_ID] ?? ''}
            onChange={(e) => setPrice(DIVINITY_STONE_ID, e.target.value)}
          />
        </label>
        <label>
          <span>Profit margin (%)</span>
          <input
            type="number"
            min={0}
            max={100}
            step={1}
            value={margin}
            onChange={(e) => setMargin(e.target.value)}
          />
        </label>
        <p className="muted note">
          Trade House tax ({TRADE_HOUSE_TAX * 100}%) is already deducted from item values.
        </p>
      </section>

      {stonePrice === null && (
        <p className="hint">Enter the Divinity Stone price to see how many stones each offer is worth.</p>
      )}

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price (FE each)</th>
              <th>Offer</th>
              <th>Sells for (FE)</th>
              <th>Max stones (bought)</th>
              <th>Max stones (farmed)</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const isCurrency = item.id === FLAME_ELEMENTIUM_ID
              const unitPrice = isCurrency ? 1 : parsePrice(prices[item.id])

              return item.quantities.map((quantity, index) => {
                const value = unitPrice === null ? null : offerValue(item.id, quantity, unitPrice)
                const canCompute = value !== null && stonePrice !== null
                const boughtStones = canCompute ? maxStoneCost(value, stonePrice, marginPercent) : null
                const farmedStones = canCompute
                  ? maxStoneCost(value, farmedStonePrice(stonePrice), marginPercent)
                  : null

                return (
                  <tr key={`${item.id}-${quantity}`} className={index === 0 ? 'item-start' : undefined}>
                    {index === 0 && (
                      <>
                        <td rowSpan={item.quantities.length} className="item-name">
                          {item.name}
                        </td>
                        <td rowSpan={item.quantities.length}>
                          {isCurrency ? (
                            <span className="muted">1 (currency)</span>
                          ) : (
                            <input
                              type="text"
                              inputMode="decimal"
                              aria-label={`${item.name} price`}
                              value={prices[item.id] ?? ''}
                              onChange={(e) => setPrice(item.id, e.target.value)}
                            />
                          )}
                        </td>
                      </>
                    )}
                    <td>x{quantity}</td>
                    <td>{value === null ? '—' : formatFe(value)}</td>
                    <td className="result">
                      <StoneLimit stones={boughtStones} />
                    </td>
                    <td className="result">
                      <StoneLimit stones={farmedStones} />
                    </td>
                  </tr>
                )
              })
            })}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default App
