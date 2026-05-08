# TypeScript Safety: Why `unknown` Is Better Than `any`

In TypeScript, both `any` and `unknown` can store any type of value.  
However, they behave very differently when it comes to type safety.

---

# The Problem with `any`

The `any` type disables TypeScript checking completely.

## Example

```ts
function handleAny(data: any) {
    // TypeScript allows this
    console.log(data.toUpperCase());
}

handleAny(42); // Runtime Error
```

## Why This Is Dangerous

- No compile-time safety
- Invalid methods are allowed
- Errors appear only at runtime

---

# Why `unknown` Is Safer

The `unknown` type can also hold any value, but TypeScript forces you to validate it before use.

## Example

```ts
function handleUnknown(data: unknown) {
    //  Error:
    // Object is of type 'unknown'

    // console.log(data.toUpperCase());

    if (typeof data === "string") {
        //  Safe after narrowing
        console.log(data.toUpperCase());
    }
}
```

---

# Type Narrowing

Type narrowing helps TypeScript understand the actual type of a variable.

---

# 1. Using `typeof`

```ts
function printValue(value: unknown) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }

    if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
}
```

---

# 2. Using `instanceof`

```ts
function checkDate(value: unknown) {
    if (value instanceof Date) {
        console.log(value.toISOString());
    }
}
```

---

# 3. Using Property Checks

```ts
function printUser(data: unknown) {
    if (
        typeof data === "object" &&
        data !== null &&
        "id" in data
    ) {
        console.log((data as { id: number }).id);
    }
}
```

---

# `any` vs `unknown`

| Feature | `any` | `unknown` |
|---|---|---|
| Type Safety |  No |  Yes |
| Compiler Checks |  Disabled |  Enabled |
| Safe for APIs |  No |  Yes |
| Requires Validation |  No |  Yes |

---

# Best Practice

Use `unknown` when working with:

- API responses
- User input
- External libraries
- Dynamic JSON data

Use `any` only when absolutely necessary.

---

# Conclusion

`any` removes TypeScript safety completely.

`unknown` keeps flexibility while still protecting your code through validation and type narrowing.

```ts
// Recommended
let data: unknown;

// Avoid unless necessary
let unsafeData: any;
```