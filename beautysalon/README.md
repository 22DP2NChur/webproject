# webproject

# Skaistumkopšanas salons - Mājaslapas Projekts

## Projekta apraksts

Skaistumkopšanas salons projekts ir vienkārša, moderni izstrādāta mājaslapa skaistumkopšanas salonam, kurā iekļauta navigācijas izvēlne un interaktīvas kartītes ar hover efektiem. Mājaslapa ir responsīva, kas nodrošina tās pielāgošanos dažādiem ekrāna izmēriem, kā arī tai ir iespējams pārslēgt tumšo režīmu (Dark Mode), lai uzlabotu lietotāja pieredzi. Šajā projektā tiek izmantoti HTML, CSS un JavaScript.

## Funkcionalitātes

### 1. Navigācijas izvēlne
- **Horizontāla navigācijas izvēlne** augšpusē, veidota ar Flexbox izkārtojumu.
- **Hover efekti**: uzbraucot ar peli uz navigācijas elementiem, mainās fona un teksta krāsas.
- **Ikonas** pievienotas izmantojot [FontAwesome](https://fontawesome.com/).
- **Responsīvs dizains**: izvēlne tiek pielāgota mobilajām ierīcēm.
- **Dark Mode**: tumšā režīma pārslēgšana ar pogu.

### 2. Kartiņas (Card)
- Tiek izmantotas kartītes, kas apraksta dažādus salona pakalpojumus, piemēram, frizēšanu, manikīru un kosmetoloģiju.
- **Hover efekti**: uzbraucot ar peli, kartītes pārvietojas uz augšu un pievienojas ēnu efekts, lai tās izceltu.
- **Responsivitāte**: kartītes automātiski maina izkārtojumu uz šaurākiem ekrāniem, nodrošinot ērtu lietošanu mobilajās ierīcēs.

### 3. Dark Mode (Tumšais režīms)
- Iespēja pārslēgt starp gaišo un tumšo režīmu, kas maina fona un teksta krāsas gan navigācijai, gan kartītēm.
- **JavaScript** tiek izmantots, lai dinamiski pievienotu vai noņemtu CSS klasi `dark-mode`, mainot lapas izskatu.

## Izmantotās tehnoloģijas
- **HTML5**: struktūras veidošanai.
- **CSS3**: stilizēšanai, izmantojot Flexbox, krāsu pārejas un responsīvos izkārtojumus.
- **JavaScript**: interaktivitātes pievienošanai (Dark Mode funkcionalitāte).
- **FontAwesome**: ikonām navigācijas joslā.

## Failu struktūra

```
beauty-salon/
│
├── index.html        # Galvenais HTML fails
├── styles.css        # CSS stila fails
├── script.js         # JavaScript fails tumšā režīma funkcionalitātei
├── README.md         # Projekta apraksts
```

## Papildu iespējas
- **Krāsu pārejas** navigācijai: Gradienta fona efekts pievienots navigācijas joslai.
- **Dark Mode**: Tumšā režīma opcija, kas uzlabo lietotāja pieredzi vakara stundās vai zema apgaismojuma apstākļos.

## Autors
Projekts veidots kā vienkāršs piemērs mājaslapas izstrādei ar HTML, CSS un JavaScript.

