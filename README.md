## Scroll Intersect

Automatically call a function to fetch next page when it reached the bottom of the page.

This function is designed to work seamlessly with React Query's [useInfiniteQuery](https://tanstack.com/query/v4/docs/reference/useInfiniteQuery), providing optimal performance and functionality when used together

### How to use?

```javascript
import { useInfiniteQuery } from 'react-query';
import useScrollIntersect from 'scroll-intersect';

const UserList = () => {
  const {data, isFetching, fetchNextPage} => useInfiniteQuery({...yourOptions})

  // add this value to every list item
  const setLastElementRef = useScrollIntersect(fetchNextPage);

  return (
    <>
      {data.map((users) => (
        <div key={users.id}>
          {users.users.map((user) => (
            <div key={user.id} ref={setLastElementRef}>{user.name}</div>
          ))}
        </div>
      ))}
      {isFetching && <div>Loading more users...</div>}
    </>
  );
};

export default UserList;
```
