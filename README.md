# Wedding Website

## Struktura Projektu

```
/node_modules
/package-lock.json
/package.json
/public
  /README.md
/src
  /App.js
  /assets
    /fonts
      /Cormorant_Upright
      /Jost
    /images
      /icon.webp
  /components
    /Header
      Header.js
      Header.module.scss
    /NavBar
  /containers
    /Header
  /index.js
  /reportWebVitals.js
  /setupTests.js
  /styles
```

## Kluczowe Pliki i Foldery

- node_modules: Folder zawierający wszystkie zainstalowane zależności projektu.
- package-lock.json: Plik zarządzający wersjami zainstalowanych pakietów.
- package.json: Plik konfiguracyjny projektu zawierający informacje o projekcie i jego zależnościach.
- public: Folder zawierający pliki publiczne dostępne dla serwera.
- src: Główny folder zawierający kod źródłowy projektu.

### Pliki w folderze /src:

- **App.js**: Główny plik aplikacji React, który renderuje komponenty.
- **index.js**: Punkt wejściowy aplikacji, który renderuje komponent App do drzewa DOM.
- **reportWebVitals.js**: Plik do mierzenia wydajności aplikacji.
- **setupTests.js**: Plik konfiguracyjny do ustawienia testów jednostkowych.

### Foldery w /src:

- **assets**: Zawiera zasoby takie jak fonty i obrazy.
  - **fonts**: Foldery zawierające pliki fontów używanych w projekcie.
  - **images**: Zawiera obrazy używane w projekcie.

- **components**: Zawiera komponenty React.
  - **Header**: Przykładowy komponent nagłówka, zawierający pliki Header.js i Header.module.scss.
  - **NavBar**: Przykładowy komponent paska nawigacyjnego.

- **containers**: Zawiera kontenery React, które mogą zarządzać stanem aplikacji.
  - **Header**: Przykładowy kontener nagłówka.

- **styles**: Folder na globalne style projektu.

## Konfiguracja Stylów

### Globalne Style

W folderze **/styles** znajdują się pliki SCSS definiujące globalne style, takie jak kolory i fonty.

### Przykładowa Konfiguracja

**colors.scss**:
```scss
$background-color: #E5CCC0;
$primary-color: #73343D;
$secondary-color: #5C202C;
$accent-color: #EEEEEE;
```

**fonts.scss**:
```scss
$font-header: 'Cormorant Upright', serif;
$font-body: 'Jost', sans-serif;
```

**global.scss**:
```scss
@import './colors';
@import './fonts';
@import './variables';

// Globalne style
body {
  background-color: $background-color;
  font-family: $font-body;
}

// Responsywność
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
```

## Stylizacja Komponentów

Każdy komponent posiada swój plik SCSS w folderze komponentu, używający CSS Modules dla izolacji stylów.

### Przykład komponentu Header:

**Header.js**:
```jsx
import React from 'react';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.header_h1}>Nasze Wesele</h1>
    <p className={styles.header_p}>Zapraszamy na nasz wyjątkowy dzień!</p>
  </header>
);

export default Header;
```

**Header.module.scss**:
```scss
.header {
  background-color: $primary-color;
  color: $accent-color;
  text-align: center;
  padding: 20px;
}

.header h1 {
  font-family: $font-header;
}

.header p {
  font-family: $font-body;
}
```

## Uruchomienie Projektu

1. Sklonuj repozytorium: `git clone <repo-url>`
2. Przejdź do katalogu projektu: `cd <project-directory>`
3. Zainstaluj zależności: `npm install`
4. Uruchom projekt: `npm start`
```


Images By: https://www.freepik.com/free-ai-image/beautiful-watercolor-floral-arrangement_186698611.htm#fromView=search&page=1&position=10&uuid=830e6d9e-e24c-4db7-9e5e-c2288d8cca87
