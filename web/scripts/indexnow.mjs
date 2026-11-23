// Tell Bing, Yandex and other IndexNow engines that pages changed.
// Usage: node scripts/indexnow.mjs            (submits every URL in the live sitemap)
//        node scripts/indexnow.mjs /ai/tokenomics /insights/some-article
const HOST = 'www.bmkrs.com';
const KEY = '4950d7033374f7239552beb06254f004'; // served at https://www.bmkrs.com/<KEY>.txt

const args = process.argv.slice(2);
let urls = args.map((p) => `https://${HOST}${p.startsWith('/') ? p : `/${p}`}`);
if (!urls.length) {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urls.length} URLs`);
