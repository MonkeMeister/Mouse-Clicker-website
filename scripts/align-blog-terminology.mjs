/**
 * Aligns a locale's blog copy with the terminology the rest of that locale's
 * site copy already uses for the same phenomenon.
 *
 * The tool panel and the mouse-test page name switch chatter in the language of
 * the site — "vibração" in Brazilian Portuguese, "zıplama" in Turkish — so the
 * article about that exact fault has to use the same word.
 *
 * Every replacement is an exact string, and the script fails if a pair does not
 * match exactly the expected number of times, so a silent miss is impossible.
 *
 * Run: node scripts/align-blog-terminology.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(here, "..", "src", "content");

/**
 * locale → list of [find, replace, expected occurrences].
 */
const FIXES = {
  de: [
    [
      "Doppelklick-Chatter, richtig erklärt",
      "Doppelklick-Prellen, richtig erklärt",
      2,
    ],
  ],
  pl: [
    [
      "Chatter podwójnego kliknięcia, wyjaśniony porządnie",
      "Drganie styków imitujące podwójne kliknięcie, wyjaśnione porządnie",
      2,
    ],
  ],
  tr: [
    [
      "Çift tıklama chatter'ı, doğru şekilde anlatıldı",
      "Çift tıklama zıplaması, doğru şekilde anlatıldı",
      2,
    ],
    ["anahtar chatter'ı kalıcı olarak nasıl düzeltilir", "anahtar temas zıplaması kalıcı olarak nasıl düzeltilir", 1],
    ["teşhis genellikle anahtar chatter'ıdır:", "teşhis genellikle anahtar temas zıplamasıdır:", 1],
    ["çift tıklamadır, chatter ise eşiğin çok altında kalır", "çift tıklamadır, zıplama ise eşiğin çok altında kalır", 1],
    ["Yani chatter yalnızca çift tıklamaya benzemez", "Yani zıplama yalnızca çift tıklamaya benzemez", 1],
    ["ile bir chatter olayı birbirinden", "ile bir zıplama olayı birbirinden", 1],
    ["Chatter ise içine fazladan bir temas katılmış", "Zıplama ise içine fazladan bir temas katılmış", 1],
    ["Chatter'da ise bu fark metal bir kontaktın sekme süresidir", "Zıplamada ise bu fark metal bir kontaktın sekme süresidir", 1],
    ["Chatter yapan bir anahtar ise bundan çok daha fazlasını üretebilir", "Zıplama yapan bir anahtar ise bundan çok daha fazlasını üretebilir", 1],
    ["Chatter, içinde fazladan bir temas bulunan", "Zıplama, içinde fazladan bir temas bulunan", 1],
    ["chatter ise tek başına bunu aşabilir", "zıplama ise tek başına bunu aşabilir", 1],
    ["bu olay üzerinden chatter ile gerçek bir çift tıklamayı", "bu olay üzerinden zıplama ile gerçek bir çift tıklamayı", 1],
    ["Birkaç milisaniyelik bir fark chatter'dır.", "Birkaç milisaniyelik bir fark zıplamadır.", 1],
    ["en küçük fark tek haneli milisaniye ise bu chatter'dır", "en küçük fark tek haneli milisaniye ise bu zıplamadır", 1],
    ["Chatter hafifse çözüm genellikle temizliktir.", "Zıplama hafifse çözüm genellikle temizliktir.", 1],
    ["Anahtar chatter'ını gerçek bir çift tıklamadan nasıl ayırt ederim?", "Anahtar temas zıplamasını gerçek bir çift tıklamadan nasıl ayırt ederim?", 1],
    ["Chatter, içinde fazladan bir temas olan tek bir basıştır", "Zıplama, içinde fazladan bir temas olan tek bir basıştır", 1],
    ["hiçbir zaman chatter gibi görünecek kadar", "hiçbir zaman zıplama gibi görünecek kadar", 1],
    ["Chatter ise tek haneli milisaniyelerde olur", "Zıplama ise tek haneli milisaniyelerde olur", 1],
    ["chatter orada da görünüyorsa sorun donanımdadır", "zıplama orada da görünüyorsa sorun donanımdadır", 1],
    ["bu eşik, chatter'ın neden bir çift tıklama olarak bildirildiğinin nedenidir", "bu eşik, zıplamanın neden bir çift tıklama olarak bildirildiğinin nedenidir", 1],
    ["Ayarı düşürmek chatter'ı tetiklenmesi zorlaştırır", "Ayarı düşürmek zıplamanın tetiklenmesini zorlaştırır", 1],
    ["Chatter yapan bir fare yangın riski taşır mı", "Zıplama yapan bir fare yangın riski taşır mı", 1],
    ["Chatter, düşük gerilimli ve amperin çok küçük bir kesrini taşıyan", "Zıplama, düşük gerilimli ve amperin çok küçük bir kesrini taşıyan", 1],
    // The Turkish site copy calls the polling rate "polling hızı" and never
    // "raporlama hızı", so the article must not introduce a third name.
    ["raporlama hızının ve işaretçi hızlandırmasının", "polling hızının ve işaretçi hızlandırmasının", 1],
    ["İşte bu raporlama hızıdır;", "İşte bu polling hızıdır;", 1],
    ["cihazın raporlama hızı, işletim sisteminin", "cihazın polling hızı, işletim sisteminin", 1],
    ["dolayısıyla raporlama hızı kesin bir üst sınırdır", "dolayısıyla polling hızı kesin bir üst sınırdır", 1],
  ],
  "pt-br": [
    [
      "Chatter de clique duplo, explicado de verdade",
      "Vibração no clique duplo, explicado de verdade",
      2,
    ],
    ["eliminar o bounce duplo de vez", "eliminar a vibração do switch de vez", 1],
    ["denuncia o bounce duplo", "denuncia a vibração do switch", 1],
    ["o diagnóstico quase sempre é bounce duplo:", "o diagnóstico quase sempre é vibração do switch:", 1],
    ["e o bounce duplo cai bem abaixo dele", "e a vibração do switch cai bem abaixo dele", 1],
    ["Dessa forma, o bounce duplo não só parece", "Dessa forma, a vibração do switch não só parece", 1],
    ["um evento de bounce duplo são distinguíveis", "um evento de vibração do switch são distinguíveis", 1],
    ["O bounce duplo é um ciclo de pressionar", "A vibração do switch é um ciclo de pressionar", 1],
    ["No bounce duplo, o intervalo", "Na vibração do switch, o intervalo", 1],
    ["Um switch com bounce duplo produz", "Um switch com vibração produz", 1],
    ["Bounce duplo é um ciclo de pressionar", "Vibração do switch é um ciclo de pressionar", 1],
    ["o bounce duplo passa desse número", "a vibração passa desse número", 1],
    ["o bounce duplo e um duplo clique de verdade", "a vibração do switch e um duplo clique de verdade", 1],
    ["é bounce duplo. Um intervalo", "é vibração do switch. Um intervalo", 1],
    ["é bounce duplo, e um menor intervalo", "é vibração do switch, e um menor intervalo", 1],
    ["Se o bounce duplo for leve", "Se a vibração do switch for leve", 1],
    ["Como eu diferencio o bounce duplo de um duplo clique", "Como eu diferencio a vibração do switch de um duplo clique", 1],
    ["Bounce duplo é um toque com um contato extra", "Vibração do switch é um toque com um contato extra", 1],
    ["para parecer bounce duplo?", "para parecer uma vibração do switch?", 1],
    ["O bounce duplo acontece em milissegundos", "A vibração do switch acontece em milissegundos", 1],
    ["se o bounce duplo aparecer lá também", "se a vibração do switch aparecer lá também", 1],
    ["a razão de o bounce duplo ser relatado como um", "a razão de a vibração do switch ser relatada como uma", 1],
    ["dificulta mais o bounce duplo disparar", "dificulta mais que a vibração do switch dispare", 1],
    ["Um mouse com bounce duplo é risco", "Um mouse com vibração é risco", 1],
    ["O bounce duplo é um contato elétrico", "A vibração do switch é um contato elétrico", 1],
  ],
};

const problems = [];

for (const [locale, pairs] of Object.entries(FIXES)) {
  const file = path.join(contentDir, "locales", locale, "blog.ts");
  if (!fs.existsSync(file)) {
    problems.push(`${locale} — no blog.ts`);
    continue;
  }

  let text = fs.readFileSync(file, "utf8");

  for (const [find, replace, expected] of pairs) {
    const count = text.split(find).length - 1;
    if (count === expected) {
      text = text.split(find).join(replace);
      continue;
    }
    /* Already applied on an earlier run: the new wording is in place. */
    if (count === 0 && text.split(replace).length - 1 >= expected) {
      continue;
    }
    problems.push(`${locale} — "${find}" found ${count} time(s), expected ${expected}`);
  }

  fs.writeFileSync(file, text, "utf8");
  console.log(`fixed  ${locale} — ${pairs.length} replacements applied`);
}

/* Nothing should still be left with the old wording. The slug keeps the
   English word, so it is excluded from every check. */
const LEFTOVER = {
  de: [/Chatter/g],
  pl: [/Chatter/g],
  tr: [/chatter(?!-explained)/g, /raporlama hız/g],
  "pt-br": [/bounce duplo/gi],
};
for (const [locale, patterns] of Object.entries(LEFTOVER)) {
  const file = path.join(contentDir, "locales", locale, "blog.ts");
  if (!fs.existsSync(file)) continue;
  const text = fs.readFileSync(file, "utf8");
  for (const pattern of patterns) {
    const leftover = text.match(pattern);
    if (leftover) {
      problems.push(
        `${locale} — ${leftover.length} occurrence(s) of ${pattern} remain`,
      );
    }
  }
}

if (problems.length > 0) {
  console.log(`\nFAIL — ${problems.length} problem(s)`);
  for (const problem of problems) console.log(`      ${problem}`);
  process.exit(1);
}

console.log("\nPASS — blog terminology matches the rest of each locale's site copy");
