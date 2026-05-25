---
title: GORM Storage
description: GORM-based session storage for custom databases (MySQL, etc.).
---

# GORM Storage

Use GORM to connect to any supported database (MySQL, SQLite, PostgreSQL, SQL Server) through a unified interface.

## Install

```bash
go get github.com/mtgo-labs/storage/gorm
```

## Usage

```go
import (
    "gorm.io/driver/mysql"
    "gorm.io/gorm"
    gormstorage "github.com/mtgo-labs/storage/gorm"
    tg "github.com/mtgo-labs/mtgo/telegram"
)

db, err := gorm.Open(mysql.Open("user:pass@tcp(localhost:3306)/botdb?parseTime=true"), &gorm.Config{})
if err != nil {
    log.Fatal(err)
}

store, err := gormstorage.Open(db, "my_bot")
if err != nil {
    log.Fatal(err)
}
defer store.Close()

client, _ := tg.NewClient(apiID, apiHash, &tg.Config{
    BotToken:    botToken,
    SessionName: "my_bot",
    Storage:     store,
    SavePeers:   true,
})
```

## API

| Method | Description |
|--------|-------------|
| `Open(db *gorm.DB, sessionName string)` | Initialize storage with an existing GORM connection |
| `Close()` | Close the GORM connection |

GORM auto-migrates the schema on first use. Supports any GORM-compatible database driver.

## Supported Databases

- MySQL / MariaDB (`gorm.io/driver/mysql`)
- SQLite (`gorm.io/driver/sqlite`)
- PostgreSQL (`gorm.io/driver/postgres`)
- SQL Server (`gorm.io/driver/sqlserver`)
