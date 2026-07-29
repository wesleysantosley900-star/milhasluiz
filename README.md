# MilhasClub — Landing Page

Landing page premium para consultoria de milhas aéreas, comunidade VIP e emissão
inteligente de passagens. Construída com [Next.js 15](https://nextjs.org) (App Router),
TypeScript, Tailwind CSS v4, Framer Motion e shadcn/ui.

## Como rodar

Instale as dependências (se ainda não tiver feito):

```bash
npm install
```

Depois, rode o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

Você pode começar a editar a partir de `app/page.tsx`. A página é atualizada
automaticamente conforme você edita os arquivos.

Este projeto usa [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
para carregar as fontes Poppins (títulos) e Inter (corpo do texto) de forma otimizada.

## Estrutura do projeto

```
/app          Rotas (App Router): home, /blog/[slug], política de privacidade, termos de uso
/components   Componentes React (layout, seções, shared, motion, ui do shadcn)
/data         Conteúdo mockado (depoimentos, serviços, planos, FAQ, blog, etc.)
/lib          Utilitários (cn, formatação de moeda, schema JSON-LD)
/public       Imagens e assets estáticos (placeholders substituíveis)
```

## Antes de publicar em produção

- Substitua o placeholder `specialist.svg` (usado como fallback) pela foto real em
  `/public/specialist.jpg`. As fotos de `/public/gallery` já viram a legenda exibida
  no carrossel a partir do próprio nome do arquivo — basta trocar/renomear.
- Atualize os links reais (YouTube, e-mail, checkouts Stripe/Hotmart/Kiwify/Hubla)
  em `data/site-config.ts`.
- Revise os textos jurídicos em `/politica-de-privacidade` e `/termos-de-uso` com um
  profissional habilitado.
- Ajuste `url` em `data/site-config.ts` para o domínio final (usado no `sitemap.xml`,
  `robots.txt` e nas tags de SEO/Open Graph).

## Deploy na Netlify

O projeto já roda "out of the box" na Netlify — ela detecta automaticamente que é um
projeto Next.js (App Router) e usa o plugin oficial `@netlify/plugin-nextjs` por trás
dos panos, sem precisar configurar nada extra no código.

### Opção A — Deploy contínuo via Git (recomendado)

Assim, todo `git push` gera um novo deploy automaticamente.

O código já está versionado e publicado no repositório:
[github.com/wesleysantosley900-star/milhasluiz](https://github.com/wesleysantosley900-star/milhasluiz)

Para conectar esse repositório à Netlify:

1. Acesse [app.netlify.com](https://app.netlify.com) e clique em **Add new site →
   Import an existing project**.
2. Escolha **GitHub** e selecione o repositório `milhasluiz`.
3. Configuração de build (a Netlify já sugere isso automaticamente, só confirme):
   - **Build command:** `npm run build`
   - **Publish directory:** deixe como sugerido pela Netlify (o plugin cuida disso)
4. Clique em **Deploy site**. Em poucos minutos o site estará no ar em uma URL
   `algo.netlify.app`.
5. Para usar seu próprio domínio: vá em **Domain settings → Add a domain** e siga as
   instruções de DNS.

A partir daí, qualquer alteração local seguida de:
```bash
git add .
git commit -m "sua mensagem"
git push
```
gera um novo deploy automático na Netlify.

### Opção B — Deploy direto pela CLI (sem precisar de Git/GitHub)

1. Instale a CLI da Netlify (uma vez só):
   ```bash
   npm install -g netlify-cli
   ```
2. Faça login:
   ```bash
   netlify login
   ```
3. Dentro da pasta do projeto, rode:
   ```bash
   netlify init
   ```
   e siga as perguntas (criar site novo, nome, etc.).
4. Para publicar em produção:
   ```bash
   netlify deploy --build --prod
   ```
   Esse comando builda o projeto e já sobe direto para o ar.

Depois do primeiro deploy (por qualquer uma das opções), sempre que quiser atualizar o
site publicado basta rodar `netlify deploy --build --prod` novamente (opção B) ou dar
`git push` (opção A).

## Scripts

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run start` — sobe o build de produção
- `npm run lint` — checagem de lint
