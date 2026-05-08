# How Generics Help Build Reusable and Type-Safe Code in TypeScript

## Introduction

Generics in TypeScript allow you to write reusable code while keeping strong type safety.  
They help functions, classes, and components work with different data types without using `any`.

---

# Generic Function

Without Generics:

```ts
function identity(value: any): any {
    return value;
}
```

This removes type safety.

Using Generics:

```ts
function identity<T>(value: T): T {
    return value;
}
```

TypeScript now preserves the correct type.

---

# Example Usage

```ts
const text = identity("Hello");
const number = identity(100);
```

TypeScript knows:

- `text` is a string
- `number` is a number

---

# Generics with Arrays

```ts
function getFirstItem<T>(items: T[]): T {
    return items[0];
}
```

Usage:

```ts
const first = getFirstItem([1, 2, 3]);
```

`first` is automatically typed as `number`.

---

# Generics with Interfaces

```ts
interface ApiResponse<T> {
    success: boolean;
    data: T;
}
```

Usage:

```ts
interface User {
    id: number;
    name: string;
}

const response: ApiResponse<User> = {
    success: true,
    data: {
        id: 1,
        name: "John",
    },
};
```

---

# Benefits of Generics

- Reusable code
- Strong type safety
- Better autocomplete
- Less duplicated logic

---

# Conclusion

Generics make TypeScript code flexible and reusable without losing type safety.

Instead of using `any`, Generics allow your code to adapt to different data types while staying strictly typed.