export const receiptTemplate = (payload: {
  orderId: string;
  buyerName: string;
  createdAt: string;
  currency: string;
  subtotal: string;
  tax: string;
  total: string;
  items: Array<{
    title: string;
    qty: number;
    days: number;
    pricePerDay: string;
    lineTotal: string;
  }>;
}) => {
  const rows = payload.items
    .map(
      (it) => `
      <tr>
        <td style="padding:8px;border-bottom:1px solid #e5e7eb;">${it.title}</td>
        <td style="padding:8px;border-bottom:1px solid #e5e7eb;text-align:right;">${it.qty}</td>
        <td style="padding:8px;border-bottom:1px solid #e5e7eb;text-align:right;">${it.days}</td>
        <td style="padding:8px;border-bottom:1px solid #e5e7eb;text-align:right;">${payload.currency} ${it.pricePerDay}</td>
        <td style="padding:8px;border-bottom:1px solid #e5e7eb;text-align:right;">${payload.currency} ${it.lineTotal}</td>
      </tr>
    `
    )
    .join("");

  return `
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Receipt</title>
    </head>
    <body style="font-family:Arial, sans-serif; padding:24px; color:#111827;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div>
          <h1 style="margin:0;">RentEasy Receipt</h1>
          <div style="margin-top:6px;">Order: <b>${payload.orderId}</b></div>
          <div>Date: <b>${payload.createdAt}</b></div>
          <div>Buyer: <b>${payload.buyerName}</b></div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:14px;">Currency</div>
          <div style="font-size:18px; font-weight:700;">${payload.currency}</div>
        </div>
      </div>

      <div style="margin-top:18px;">
        <table style="width:100%; border-collapse:collapse; font-size:14px;">
          <thead>
            <tr>
              <th style="text-align:left;padding:8px;border-bottom:2px solid #111827;">Product</th>
              <th style="text-align:right;padding:8px;border-bottom:2px solid #111827;">Qty</th>
              <th style="text-align:right;padding:8px;border-bottom:2px solid #111827;">Days</th>
              <th style="text-align:right;padding:8px;border-bottom:2px solid #111827;">Price/Day</th>
              <th style="text-align:right;padding:8px;border-bottom:2px solid #111827;">Line Total</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>

      <div style="margin-top:16px; display:flex; justify-content:flex-end;">
        <div style="width:320px; font-size:14px;">
          <div style="display:flex; justify-content:space-between; padding:6px 0;">
            <span>Subtotal</span><b>${payload.currency} ${payload.subtotal}</b>
          </div>
          <div style="display:flex; justify-content:space-between; padding:6px 0;">
            <span>Tax</span><b>${payload.currency} ${payload.tax}</b>
          </div>
          <div style="display:flex; justify-content:space-between; padding:10px 0; border-top:2px solid #111827; font-size:16px;">
            <span>Total</span><b>${payload.currency} ${payload.total}</b>
          </div>
        </div>
      </div>
    </body>
  </html>
  `;
};
