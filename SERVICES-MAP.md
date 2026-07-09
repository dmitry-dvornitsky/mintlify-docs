# Карта связей между модулями

Как модули и сущности зависят и обмениваются данными друг с другом.

---

## Известные связи

```
Settings/Products ──────────► Insights/Product tabs
  Каждый продукт создаёт отдельную вкладку в сайдбаре Insights

Settings/KPI.Result ◄────────── Meetings (status: Completed only)
  Поле Result в KPI автоматически подтягивается из модуля Meetings, считаются только встречи со статусом Completed

Meetings ◄──────────────────── Settings/Calendars
  Для бронирования нужен минимум 1 подключённый календарь (Google, Microsoft, Calendly)

Meetings ──────────────────────► Slack
  После бронирования встречи уходит алерт в Slack-канал (настраивается в Settings → Slack)

Meetings.Company ◄──────────── Leads/Companies
  В поп-апе Book Meeting доступны только компании из модуля Leads

Meetings.Contact ◄──────────── Leads/Contacts
  Контакты подтягиваются из выбранной компании в Leads

Campaigns ──────────────────► Inbox
  Ответы на outreach (email/LinkedIn) приходят в Inbox

Settings/Labels ─────────────► Inbox/Threads
  Labels назначаются на треды в Inbox, создаются в Settings → Labels (Labels Group → Labels)

Leads ──────────────────────► Campaigns
  Лиды из модуля Leads загружаются в кампании

Tasks ◄─────────────────────── System
  Задачи типа "Follow-up in thread" и "Follow-up in new thread" создаются системой автоматически

Tasks (Follow-up) ──────────► Inbox/Email
  Автоматические follow-up задачи закрываются когда SDR отправляет письмо в тред (существующий или новый)
```

## TBD — нужно уточнить

- Что именно тригерит автосоздание Tasks
- Как Requests связан с Leads (import flow)
- Связи Meetings с другими модулями кроме KPI
- Как Insights/Storage связан с остальными модулями
