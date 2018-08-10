select users.username, users.password, posts.title, posts.img, posts.content
from users
join posts on users.id = posts.author_id 