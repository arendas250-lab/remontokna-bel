import { ADVANTAGES } from "@/lib/site";

export default function AdvantagesSection() {
  return (
    <section id="about" className="bg-background py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Почему обращаются именно к нам</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((a) => (
            <div key={a.title} className="rounded-xl border border-border bg-white p-6">
              <div className="mb-3 text-2xl">✅</div>
              <h3 className="font-bold text-navy">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">{a.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-white p-6 sm:p-8">
          <h3 className="text-xl font-bold text-navy">О компании «ремонтокна.бел»</h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground/70">
            Мы оказываем услуги профессионального ремонта окон в Гродно и области: пластиковых, алюминиевых и
            деревянных евро-окон. Наши мастера выезжают на любой адрес в Гродно в течение часа после заявки.
            Прайс-лист предоставляется до начала работ — никаких скрытых платежей. Используем только
            качественные комплектующие, средний опыт мастера в команде — более 10 лет. Обслуживаем все виды
            окон, включая панорамные, мансардные и балконные двери, любого профиля и бренда.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/70">
            Чтобы вызвать мастера по ремонту окон в Гродно, позвоните нам или оставьте заявку через форму на
            сайте — мы перезвоним в течение 15 минут.
          </p>
        </div>
      </div>
    </section>
  );
}
