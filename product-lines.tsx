import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const productLines = {
  "Trading orders and execution": {
    "After market orders (AMO)": "Allows investors to place buy or sell orders outside of regular market hours till before it opens the next day.",
    "Bracket orders": "Allows to place three interconnected orders simultaneously for a single trade: an initial buy or sell order, a profit target order, and a stop-loss order.",
    "Iceberg orders": "Allows to execute large trades by dividing them into smaller visible portions, with the bulk order hidden from the market. This helps minimize market impact and conceal trading intentions.",
    "Limit orders": "Allows to buy or sell securities at a specified price or better, ensuring they don't pay more or receive less than their desired price, while no guarantee of order execution.",
    "Reverse positions": "Allow traders to quickly switch their current position from long to short (or vice versa) in response to changing market conditions.",
    "Trailing stop losses": "Allows to automatically adjust the stop-loss level as the market price rises, helping to lock in profits while limiting potential losses.",
    "Trigger Orders": "Allows to automatically execute the order when a predefined market price, known as the trigger price, is reached.",
  },
  "Margin and leverage": {
    "Margin traded facility": "Allows investors to borrow money from brokers to buy more securities than they can afford, using a portion of their investment as collateral. This enables leveraged trading.",
    "Pledging of stocks": "Allows investors to use their existing stockholdings as collateral to secure loans or margin for trading, without selling their shares, while the collateral is frozen till repayment.",
  },
  "Portfolio and account management":{
    "External investment" : "Allows the user to monitor all their investment in capital market  in a single place, eliminating the need for switching between various apps", 
    "Consolidates banks account view":"Allows to monitor their bank statements across banks, within the app itself.",
    "Traders Control and kill switch":"Allows traders to temporarily disable trading in one or more segments of their account, helping to prevent overtrading, especially during periods of loss. When activated, it blocks new order placements for a specified duration till disabled.",
    "Traders diary":"Allows traders to lo their trades, analyze their actions, and identify mistakes in their trading strategies, Enabling users to maintain a detailed record of their trading activities, including the ability to add comments and attach media to each entry",
  },
  "Platform and User interface":{
    "Dhan wifi":"enhance the trading experience by simplifying order placement across multiple devices. It establishes a secure connection between the Dhan web platform and the mobile app, allowing traders to seamlessly switch between analyzing charts on larger screens and placing orders on their mobile devices.",
    "Webhooks(trading view intg)":"Allows users/traders to automate order placement on Dhan based on alerts generated from TradingView like platforms, enabling seamless integration between the two platforms. By setting up alerts in TradingView, users can trigger trades automatically in their Dhan account",
  },
  "Market research and insights":{
    "Live news feeds and updates":"Allow users  to know live news providing real-time updates on listed stocks,exchange filings, and various financial developments. This improved service offers curated news to aid quicker investment decisions. Users can now even apply for IPOs directly through the news feed, from pre-listing to the company's end.ensuring users remain informed about news impacting their portfolios. Investing in securities carries market risk; users are advised to carefully review all relevant documents before investing."
  },
  "Others":{
    "Referral programs":"Allows users to share a personalised QR code to invite friends and family to join the platform. Referrals generate a lifelong 20% commission on brokerage fees. The video highlights the company's growth through word-of-mouth referrals and expresses gratitude to existing users"
    
  }
}

export function ProductLines() {
  return (
    <section id="product-lines" className="py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white mb-8">Product Lines</h2>
        <div className="space-y-8">
          {Object.entries(productLines).map(([category, features]) => (
            <div key={category} className="rounded-lg">
              <h3 className="text-xl font-semibold p-4 border-b text-white">
                {category}
              </h3>
              <Table className="bg-transparent">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Feature</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Object.entries(features).map(([feature, description]) => (
                    <TableRow key={feature}>
                      <TableCell className="font-medium text-white">{feature}</TableCell>
                      <TableCell className="text-gray-200">{description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

