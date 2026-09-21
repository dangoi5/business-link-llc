# Business Link LLC

Professional marketing website for Business Link LLC — international food & beverage market development, distribution and sourcing.

## Develop locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — Home
- `/capabilities` — What we do
- `/portfolio` — Product categories
- `/portfolio/[slug]` — Products within a category
- `/markets` — Market footprint & distribution models
- `/partners` — Partner types & logo placeholders
- `/contact` — Inquiry form (sends email via Resend `/api/contact`)

## Customize

- Business copy and lists: `src/lib/content.ts`
- Contact email: `company.email` in `src/lib/content.ts`
- Partner logos: replace placeholders on the Partners page with approved brand assets
- Products: add items to each category's `products` array in `src/lib/content.ts` (name, description, image, optional details). Put images in `public/products/` or use a hosted URL.
