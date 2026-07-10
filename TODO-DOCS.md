# TODO — Что нужно дописать

Файл для отслеживания пробелов в документации. Удалять пункты по мере заполнения.

## Вернуться и доделать

- [ ] **Table columns** — после описания всех модулей пересмотреть колонки в каждой таблице (Projects, Leads, Campaigns и др.)
- [ ] **Dashboard / Project info card** — поля карточки (Account Strategist, SDR, Timeline, Region, Budget и др.) берутся из Settings → General. Обновить после того как поля в General будут актуализированы.
- [ ] **Table / Filters** — уточнить conditions для Number, Array, Boolean типов
- [ ] **Table / Quick Filters** — описать Quick Filters для каждого модуля отдельно
- [ ] **Company & Contact fields** — поля сущностей (в процессе, Дмитрий пишет)
- [ ] **AI Editor** — переработать Quick actions под каждый модуль и контекст (Email, LinkedIn, Insights и др.) — сейчас стоят рандомные
- [ ] **AI Editor** — добавить визуальный индикатор какой контекст использует AI (продукт, тред, компания, контакт) — повышает доверие к инструменту
- [ ] **Alert Center** — полноценный центр уведомлений: алерты когда отключается mailbox или LinkedIn аккаунт. Сейчас нет системного места для таких нотификаций.
- [x] **Campaigns / Reply Types** — задокументировано (11 типов: Appointment, Interested, Talking, Contact later, Forwarded, Not interested, Unsubscribe, DNC, Ghosted, Automation, Unknown)
- [ ] **Settings / LinkedIn Accounts** — уточнить колонки таблицы
- [x] **Settings / Mailboxes** — колонки задокументированы (Email, Sender Name, Provider, Status, Usage, Added)
- [ ] **Settings / Team** — описать раздел (участники проекта, роли). Редизайн в redesigns/settings-team.md
- [ ] **Client Cabinet** — клиент видит Dashboard (тот же экран) + что-то ещё. Уточнить у Дмитрия что именно доступно сверх Dashboard.
- [ ] **Settings / Columns** — добавить кнопку "✦ Generate instructions" в поле AI enrichment instructions: генерирует инструкцию на основе названия и описания колонки, аналогично "Improve with AI" в Audiences

## Не описано ещё

- [x] Projects / Dashboard — Overview таб описан (Statistics, Project info, Overview/Emails/LinkedIn/Campaigns/Performance). Доп. табы в разработке — дописать когда появятся.
- [ ] Projects / Inbox — детали
- [x] Projects / Campaigns — полностью описано (wizard, все sidebar страницы, Email/LinkedIn/Contacts табы, Settings)
- [ ] Projects / Tasks — детали
- [x] Projects / Leads (Companies + Contacts) — базово описано (Find Companies, Find Contacts, Find Contacts in Companies, Import Companies)
- [ ] Projects / Requests — **переработка**, обсудить отдельно
- [x] Projects / Insights — описано (Storage, Client, Product tabs, Strategies)
- [ ] Projects / Meetings — колонки таблицы (описать позже)
- [ ] Projects / Settings — в процессе (General, KPI, Billing, Products готовы)
  - [ ] **Slack** — уточнить что именно содержит алерт (поля, формат)
  - [x] **Usage** — описано базово, редизайн в redesigns/settings-usage.md
  - [ ] **Billing** — описать детально: Services (структура подписок), Invoices (колонки таблицы)
  - [ ] **Billing Information → вынести** в отдельный раздел сайдбара Settings. Предлагаемое название: **Billing Contact**. Обсудить с командой.
- [ ] Роли Admin приложения
- [ ] Домен / ключевые сущности (Client, Project, Lead, Campaign...)
- [ ] Матрица доступов по ролям
- [ ] Технический стек и архитектура
- [ ] ADR — архитектурные решения
- [ ] Dev setup / onboarding для разработчиков
