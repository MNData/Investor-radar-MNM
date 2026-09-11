# Investor Conviction Radar & Investment Scanner

An interactive, zero-dependency browser application that tracks recent investments made by notable investors, extracts structured data, and computes portfolio conviction/confidence metrics.

## Structured Columns

1. **Name**: Notable investor name, fund/firm affiliation, avatar, and estimated net worth.
2. **Investment Made**: Target company/asset, round type (SEC Form 4 / 13F / Venture round), transaction date, and disclosed dollar amount.
3. **Confidence (Investment Amount / Net Worth)**:
   $$\text{Confidence Ratio} = \left(\frac{\text{Investment Amount}}{\text{Estimated Net Worth}}\right) \times 100\%$$
   Color-coded conviction meter with tiers:
   - **High Conviction Bet** ($\ge 5.0\%$)
   - **Moderate Conviction** ($1.0\% - 4.99\%$)
   - **Standard Position** ($0.2\% - 0.99\%$)
   - **Toehold / Minor Stake** ($< 0.2\%$)

## How to Run

1. Simply double-click `index.html` or open it in any web browser (Chrome, Edge, Brave, Firefox, Arc).
2. Or in PowerShell, run:
   ```powershell
   Start-Process "C:\Users\morgh\.gemini\antigravity\scratch\investor-radar\index.html"
   ```

## Features

- **Live Internet Feed Scanner**: Hit "Scan Web Feeds" to query financial wires and news for tracked investors.
- **Track Any Custom Investor**: Add new investors by name (with optional custom net worth) to automatically scan news and extract recent deals into the structured table.
- **Instant Sorting & Filtering**: Sort by highest conviction %, largest investment amount, or date. Filter by sector or conviction tier.
- **Conviction & Allocation Simulator**: Test hypothetical investments against net worth to simulate portfolio concentration.
- **Export Data**: Export the current structured dataset to CSV or JSON with 1 click.
- **Persistence**: Any scanned investments or adjustments are automatically saved to your browser's local storage.
