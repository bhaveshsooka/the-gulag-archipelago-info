# The Gulag Archipelago

This repository contains code to generate a static site with information and metadata about the audiobook The Gulag Archipelago By Aleksandr Solzhenitsyn published by Blackstone Audio and Narrated by Frederick Davidson. The reading is uploaded to YouTube 

## PDF Generation

To generate a PDF of all the docs, you can install pandoc and run the below command:

```
pandoc -V geometry:margin=1.5cm --columns 65 \
  docs/index.md \
  docs/timestamps.md \
  -o the-gulag-archipelago-info.pdf
```
