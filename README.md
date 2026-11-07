### Project Objective

#### Features Completed

1. Implement dynamic routes in React Router to generate pages from data.
2. Create a main “index” page that links to multiple dynamic detail pages.
3. Read and use route parameters (slugs or IDs) to fetch and display data for a specific page.
4. Structure a basic client-side authentication system using React Context.
5. Create a protected route that redirects unauthenticated users.
6. Conditionally render UI elements based on the user’s authentication status.

### Reflections

1. After integrating Tailwind CSS, active links in the Navbar stopped underlining. I had to refactor the dynamic styling logic from standard inline JavaScript CSS property objects to conditional Tailwind utility class functions using className.
2. In AuthContext, I had to make use of useCallback to stabalize functions in memory before utilizing them in useMemo to prevent un-necessary re-computing and re-rendering as these functions were also to be included in the dependency arrays.
