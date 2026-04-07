Области данных

- База данных на json-server
- BFF
- redux-store

Сущности приложения

- пользователь
- роль пользователя
- статья
- комментарий

Таблицы БД

- пользователи users: { id, login, password, registed_at, role_id }
- роли пользователей roles: { id, name }
- статьи posts: { id, title, image_url, content, published_at }
- комментарии comments: { id, author_id, post_id, content }

Схема состояний на BFF:

- сессия текущего пользователя: login / password / role

Схема для редакс стора (на клиенте):

- user: { id, login, roleId }
- posts: [ { id, title,imageUrl, publishedAt, commentsCount } ]
- post: { id, title, imageUrl, content, publishedAt, comments: [id, author, content, publishedAt ] }
- users: [ { id, login, registredAt, role } ]
