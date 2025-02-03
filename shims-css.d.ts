// src/shims-css.d.ts
declare module '*.css' {
    const content: string;
    export default content;
}
