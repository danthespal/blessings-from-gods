import { shopItems } from './data/shopItems'

const totalWeight = shopItems.reduce((sum, item) => sum + item.weight, 0)

function App() {
  return (
    <main>
      <h1>Blessings from Gods Calculator</h1>
      <p>Torchlight: Infinite — Divinity Stone shop. Calculator coming soon.</p>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Weight</th>
            <th>Chance</th>
          </tr>
        </thead>
        <tbody>
          {shopItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name ? `${item.name} x${item.quantity}` : 'Unknown item'}</td>
              <td>{item.weight.toLocaleString()}</td>
              <td>{((item.weight / totalWeight) * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default App
