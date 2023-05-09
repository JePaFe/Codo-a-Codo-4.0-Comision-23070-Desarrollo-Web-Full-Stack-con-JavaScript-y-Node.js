// fetch("https://jsonplaceholder.typicode.com/posts?_page=1")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error));

// CRUD

const createPost = async (post) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = response.json();

    return json;
  } catch (error) {
    console.log(error);
  }
};

// const post = {
//   title: "foo",
//   body: "bar",
//   userId: 1,
// };

// console.log(JSON.stringify(post));
// createPost(post).then((post) => console.log(post));

const readPosts = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_page=1"
    );
    const json = await response.json();

    return json;
  } catch (error) {
    console.log(error);
  }
};

const readPost = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

// readPosts().then((posts) => console.log(posts));
// readPost(5).then((post) => console.log(post));

const updatePost = async (post, id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const json = await response.json();

    return json;
  } catch (error) {
    console.log(error);
  }
};

// const post = {
//   title: "foo 2",
//   body: "bar 2",
//   userId: 1,
// };

// updatePost(post, 1).then((post) => console.log(post));

const deleteTodo = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "DELETE",
      }
    );
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

// deleteTodo(3);

axios
  .get("https://jsonplaceholder.typicode.com/posts?_page=1")
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response);
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });
