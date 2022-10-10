# kkyler homepage

🚀 Portfolio developed by Next.js, Chakra UI, Styled Components, Framer Motion, Three.js and TypeScript.

### Requirements

- Node.js 14+ and npm

### Folder structure

```
.
├── README.md                       # README file
├── __mocks__                       # Mocks for testing
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src
│   ├── layouts                     # Layouts components
│   ├── components                  # Re-usable components
│   ├── config                      # General configuration
│   ├── pages                       # Next JS Pages
│   ├── pages.test                  # Next JS Pages tests (this avoid test to treated as a Next.js pages)
│   └── utils                       # Utility functions
└── tsconfig.json                   # TypeScript configuration
```

### Testing

All tests are colocated with the source code inside the same directory. So, it makes it easier to find them. Unfortunately, it is not possible with the `pages` folder which is used by Next.js for routing. So, what is why we have a `pages.test` folder to write tests from files located in `pages` folder.

### Portfolio inspiration

Special thanks to [craftzdog](https://github.com/craftzdog) for his amazing content.
