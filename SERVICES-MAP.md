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

Settings/Lists ──────────────► Company / Contact
  Компании и контакты добавляются в Lists. Один лист — только компании или только контакты.

Contacts (add via LinkedIn) ─► Generect API
  LinkedIn URL → парсим данные контакта через Generect API

Contacts (add via Email) ────► Apollo → Generect API
  Email → находим LinkedIn профиль через Apollo → парсим данные через Generect API

Settings/Columns ────────────► Leads/Companies + Leads/Contacts
  Кастомные колонки появляются в таблицах. AI enrichment instructions используются при запуске обогащения.

Leads/Contacts (Toolbar) ────► Apollo → Contacts.Phone
  Enrich phone numbers: телефоны берутся из Apollo и записываются контактам. История в Requests/Phone Enrichment.

Leads/Contacts (Toolbar) ────► Requests/Column Enrichment
  Выбираешь контакты → Enrich custom columns → AI заполняет поля по инструкции (сайт / LinkedIn)

Settings/Criteria Groups ────► Requests/Company AI Analysis
  Criteria Group выбирается при запуске анализа. AI проверяет сайт компании на соответствие критериям.

Leads/Companies (Bulk) ──────► Requests/Company AI Analysis
  Выбираешь компании чекбоксами → Bulk Action → Run AI Analysis

Leads/Contacts (Bulk) ───────► Requests/LinkedIn Activity
  Выбираешь контакты чекбоксами → Bulk Action → Run LinkedIn Activity
  Результат: LinkedIn Score на каждом контакте (живость аккаунта, активность, полнота профиля)

Settings/Audiences ──────────► Leads/Find Contacts
  Audience (набор должностей + описание) выбирается как First/Secondary Priority при поиске контактов.
  AI использует Description для квалификации контактов.

## TBD — нужно уточнить

- Что именно тригерит автосоздание Tasks
- Как Requests связан с Leads (import flow)
- Связи Meetings с другими модулями кроме KPI
- Как Insights/Storage связан с остальными модулями
