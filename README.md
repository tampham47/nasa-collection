# The overview

To make a long story short, you guys can access my work here, https://nasa-collection.netlify.com.

What I've done in this project?

1. Setup and work on the project from scratch.
2. Create a portal that accesses to NASA APIs as the given design.
3. Support responsive on mobile.
4. Split components into 2 main folders, `/components` are dumb components which don't make any actions by themselves, `/containers` are components which handle logic.
5. Create CollectionStorage as a layer to communicate with localStorage, this one is also considered as a business layer.
6. Deploy the application onto netlify, it would save a lot of time, because netlify supports serving root folder by default.
7. Create a new state to let the user know that an item is added into the collection already.
8. Using styled-components, this is the most flexible css framework that I've known.
9. Config Webpack builds separately for the production and development environment.

Below are the requirements of the project.

---

## 1. Write an application in React JS

- The design is for reference only, feel free to use your own one: https://marvelapp.com/4f4j6j1/screen/46362067

## 2. Features Required

- Base on our design.
- Search from NASA APIs and Add to the list: https://api.nasa.gov/api.html#Images

```
GET https://images-api.nasa.gov/search?q={q}
```

- For each Item, user can: Add to favorite, Edit and Delete.

## 3. Optional

- User can: Filter (type, date, favorite), Sort (Title, Date), Pagination (optional).

## 4. Tech Requirement

- Must not use any boilerplate.
- The list should use Local Storage or your preferable storage service.

## 5. Plus points for the candidate (optional)

- Styling by SASS, SCSS, LESS or Style components.
- No UI framework.
- Use Redux, Mobx, Flux.
- Config Webpack builds separately for the production and development environment.
- Build PWA.
- React Native (you can deploy to https://expo.io/ instead of https://pages.github.com/)

## 6. Deploy your application to https://pages.github.com/ or any server that you have

## 7. Push the code to git.nfq.asia. For more information please contact career@nfq.asia
