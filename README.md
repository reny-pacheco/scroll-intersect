## Scroll Intersect

Automatically call a function to fetch next page when it reached the bottom of the page.

### How to use?

```javascript
import useScrollIntersect from 'scroll-intersect';

const TodoList = () => {
  const TODOS = [];

  // your function to fetch next page
  const fetchNextPage = () => {};

  // add this value to every list item
  const setLastElementRef = useScrollIntersect(fetchNextPage);

  return (
    <>
      {TODOS.map((todo) => (
        <p ref={setLastElementRef}>{todo}</p>
      ))}
    </>
  );
};

export default TodoList;
```
