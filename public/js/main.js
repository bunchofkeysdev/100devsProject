const deleteBtn = document.querySelectorAll('.del');
const cardItem = document.querySelectorAll('span.not');
const cardComplete = document.querySelectorAll('span.completed');

<<<<<<< HEAD
Array.from(deleteBtn).forEach((el) => {
  el.addEventListener('click', deletecard);
});

Array.from(cardItem).forEach((el) => {
  el.addEventListener('click', markComplete);
});

Array.from(cardComplete).forEach((el) => {
  el.addEventListener('click', markIncomplete);
});

async function deletecard() {
  const cardId = this.parentNode.dataset.id;
  try {
    const response = await fetch('cards/deletecard', {
      method: 'delete',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        cardIdFromJSFile: cardId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markComplete() {
  const cardId = this.parentNode.dataset.id;
  try {
    const response = await fetch('cards/markComplete', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        cardIdFromJSFile: cardId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markIncomplete() {
  const cardId = this.parentNode.dataset.id;
  try {
    const response = await fetch('cards/markIncomplete', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        cardIdFromJSFile: cardId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
=======

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((el) => {
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el) => {
    el.addEventListener('click', markIncomplete)
})



async function deleteTodo() {
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

async function markComplete() {
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

async function markIncomplete() {
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
>>>>>>> master
}
