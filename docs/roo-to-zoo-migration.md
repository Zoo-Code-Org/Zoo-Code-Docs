---
sidebar_label: Roo to Zoo migration
description: Move your settings from Roo Code to Zoo Code by exporting a settings file from Roo Code and importing it into Zoo Code.
keywords:
  - Roo Code
  - Zoo Code
  - migration
  - export settings
  - import settings
---

# Roo to Zoo migration

Move your settings from Roo Code to Zoo Code in two steps. Export the settings file from Roo Code, then import that same file into Zoo Code.

---

## Export from Roo Code

1. Open Roo Code settings.
2. Click **Export**.

<img src="/img/roo-to-zoo/roo_export.png" alt="Start exporting settings from Roo Code" width="600" />

*Why this view matters: This starts the Roo Code settings export.*

3. When the save dialog opens, choose a location and save the file.

<img src="/img/roo-to-zoo/roo_export_dialog.png" alt="Save the exported Roo Code settings file" width="600" />

*Why this view matters: This is the file Zoo Code will import.*

The exported file can include sensitive settings, including API keys. Store it carefully. Do not share it.

## Import into Zoo Code

1. Open Zoo Code.
2. Click **Import Settings**.
3. Select the file you exported from Roo Code.

<img src="/img/roo-to-zoo/zoo_import.png" alt="Import the exported Roo Code settings file into Zoo Code" width="600" />

*Why this view matters: This is where Zoo Code loads the exported settings file.*

Zoo Code imports the file and merges the settings into your current setup.
